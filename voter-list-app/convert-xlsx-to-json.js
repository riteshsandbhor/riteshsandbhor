const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Function to convert Marathi numerals to regular numbers
function marathiToNumber(marathiNum) {
    if (!marathiNum || marathiNum === '-' || marathiNum === null || marathiNum === undefined) {
        return 0;
    }
    
    // Convert to string if it's a number
    const str = String(marathiNum).trim();
    if (!str || str === '-') {
        return 0;
    }
    
    // If it's already a number, return it
    const num = parseInt(str);
    if (!isNaN(num)) {
        return num;
    }
    
    // Marathi numeral mapping
    const marathiMap = {
        '०': 0, '१': 1, '२': 2, '३': 3, '४': 4,
        '५': 5, '६': 6, '७': 7, '८': 8, '९': 9
    };
    
    let result = '';
    for (let char of str) {
        if (marathiMap[char] !== undefined) {
            result += marathiMap[char];
        } else if (char >= '0' && char <= '9') {
            result += char;
        }
    }
    
    return result ? parseInt(result) : 0;
}

// Function to fix EPIC ID (550 -> SSO)
function fixEpicId(epicId) {
    if (!epicId) return '';
    const str = String(epicId).trim();
    if (str.startsWith('550')) {
        return 'SSO' + str.substring(3);
    }
    return str;
}

// Read Excel file
const xlsxPath = path.join(__dirname, 'list 1.xlsx');
const jsonPath = path.join(__dirname, 'data', 'voters.json');

console.log('Reading Excel file...');
const workbook = XLSX.readFile(xlsxPath);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON array
const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

console.log(`Found ${rawData.length} rows in Excel file`);

// Map Excel headers to JSON keys
const headerMap = {
    'Voter No.': 'voterNo',
    'Voter ID (EPIC No.)': 'voterId',
    'Full Name (Marathi)': 'fullNameMarathi',
    'Full Name (English)': 'fullNameEnglish',
    'Relative\'s Name (Marathi)': 'relativeNameMarathi',
    'Relative\'s Name (English)': 'relativeNameEnglish',
    'House No. (Marathi)': 'houseNoMarathi',
    'House No. (English)': 'houseNoEnglish',
    'Age': 'age',
    'Gender (Marathi)': 'genderMarathi',
    'Gender (English)': 'genderEnglish'
};

// Convert data
const voters = [];
let skipped = 0;

for (let i = 0; i < rawData.length; i++) {
    const row = rawData[i];
    
    // Skip if essential fields are missing
    const voterNo = row['Voter No.'] || row['Voter No'];
    const voterId = row['Voter ID (EPIC No.)'] || row['Voter ID (EPIC No)'];
    
    if (!voterNo && !voterId) {
        skipped++;
        continue;
    }
    
    const voter = {};
    
    // Map each field directly using headerMap
    for (const [excelHeader, jsonKey] of Object.entries(headerMap)) {
        let value = row[excelHeader];
        
        // Handle empty values
        if (value === null || value === undefined || value === '') {
            value = '';
        } else {
            value = String(value).trim();
        }
        
        // Special handling for age (convert Marathi numerals)
        if (jsonKey === 'age') {
            voter[jsonKey] = marathiToNumber(value);
        } else if (jsonKey === 'voterId') {
            // Fix EPIC ID (550 -> SSO)
            voter[jsonKey] = fixEpicId(value);
        } else if (jsonKey === 'voterNo') {
            // Ensure voterNo is a number
            voter[jsonKey] = parseInt(value) || (i + 1);
        } else {
            voter[jsonKey] = value;
        }
    }
    
    // Add roomNo (default to "1" if not present)
    if (!voter.roomNo) {
        voter.roomNo = "1";
    }
    
    voters.push(voter);
}

// Write to JSON file
console.log(`Converting ${voters.length} voters to JSON...`);
console.log(`Skipped ${skipped} invalid rows`);
const jsonContent = JSON.stringify(voters, null, 2);
fs.writeFileSync(jsonPath, jsonContent, 'utf8');

console.log(`✅ Successfully converted ${voters.length} voters from Excel to JSON`);
console.log(`📁 Output file: ${jsonPath}`);
console.log(`\nFirst voter sample:`);
console.log(JSON.stringify(voters[0], null, 2));

