const fs = require('fs');
const path = require('path');

// Function to convert Marathi numerals to regular numbers
function marathiToNumber(marathiNum) {
    if (!marathiNum || marathiNum === '-' || marathiNum.trim() === '') {
        return 0;
    }
    
    // If it's already a number, return it
    const num = parseInt(marathiNum);
    if (!isNaN(num)) {
        return num;
    }
    
    // Marathi numeral mapping
    const marathiMap = {
        '०': 0, '१': 1, '२': 2, '३': 3, '४': 4,
        '५': 5, '६': 6, '७': 7, '८': 8, '९': 9
    };
    
    let result = '';
    for (let char of marathiNum) {
        if (marathiMap[char] !== undefined) {
            result += marathiMap[char];
        } else if (char >= '0' && char <= '9') {
            result += char;
        }
    }
    
    return result ? parseInt(result) : 0;
}

// Read CSV file
const csvPath = path.join(__dirname, 'list 1.csv');
const jsonPath = path.join(__dirname, 'data', 'voters.json');

console.log('Reading CSV file...');
const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n').filter(line => line.trim());

if (lines.length < 2) {
    console.error('CSV file is empty or has no data rows');
    process.exit(1);
}

// Parse header
const headers = lines[0].split(',').map(h => h.trim());

// Map CSV headers to JSON keys
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

// Parse data rows
const voters = [];
let rowNum = 0;

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Simple CSV parsing (handles basic cases)
    // For more complex CSV with quoted fields, consider using a CSV parser library
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    values.push(current.trim()); // Add last value
    
    if (values.length < headers.length) {
        console.warn(`Row ${i + 1} has ${values.length} columns, expected ${headers.length}. Skipping...`);
        continue;
    }
    
    const voter = {};
    
    // Map each header to its value
    headers.forEach((header, index) => {
        const key = headerMap[header];
        if (key) {
            let value = values[index] || '';
            
            // Special handling for age (convert Marathi numerals)
            if (key === 'age') {
                value = marathiToNumber(value);
            } else {
                value = value.trim();
            }
            
            voter[key] = value;
        }
    });
    
    // Add roomNo (default to "1" if not present in CSV)
    if (!voter.roomNo) {
        voter.roomNo = "1";
    }
    
    // Ensure voterNo is a number
    voter.voterNo = parseInt(voter.voterNo) || (i);
    
    voters.push(voter);
    rowNum++;
}

// Write to JSON file
console.log(`Converting ${voters.length} voters to JSON...`);
const jsonContent = JSON.stringify(voters, null, 2);
fs.writeFileSync(jsonPath, jsonContent, 'utf8');

console.log(`✅ Successfully converted ${voters.length} voters from CSV to JSON`);
console.log(`📁 Output file: ${jsonPath}`);
console.log(`\nFirst voter sample:`);
console.log(JSON.stringify(voters[0], null, 2));


