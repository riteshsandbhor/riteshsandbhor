# How to Add More Voter Data (3000 Rows)

You've provided 30 rows (voter numbers 31-60). To add all 3000 rows, follow these steps:

## Method 1: Add Data Directly to JSON File

### Step 1: Open `data/voters.json`

### Step 2: Add More Entries

Each voter entry should follow this format:

```json
{
    "voterNo": 61,
    "voterId": "YOUR_VOTER_ID",
    "fullNameMarathi": "मराठी नाव",
    "fullNameEnglish": "English Name",
    "relativeNameMarathi": "नातेसंबंधाचे नाव मराठी",
    "relativeNameEnglish": "Relative's Name English",
    "houseNoMarathi": "घर क्रमांक मराठी",
    "houseNoEnglish": "House Number English",
    "age": 35,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
}
```

### Step 3: Important Notes

- **Age**: If age is missing or "-", use `0` (the app will display "-")
- **Gender Marathi**: Use "पु" for Male, "स्त्री" for Female
- **Gender English**: Use "Male" or "Female"
- **Voter No.**: Must be unique and sequential
- **Commas**: Add comma after each entry except the last one

### Example for Missing Age:

```json
{
    "voterNo": 61,
    "voterId": "KXH2961234",
    "fullNameMarathi": "नाव",
    "fullNameEnglish": "Name",
    "relativeNameMarathi": "नातेसंबंध",
    "relativeNameEnglish": "Relative",
    "houseNoMarathi": "१२३",
    "houseNoEnglish": "123",
    "age": 0,
    "genderMarathi": "पु",
    "genderEnglish": "Male"
}
```

## Method 2: Use Excel/CSV and Convert

### Step 1: Create CSV File

Create a CSV file with these columns:
```
Voter No.,Voter ID (EPIC No.),Full Name (Marathi),Full Name (English),Relative's Name (Marathi),Relative's Name (English),House No. (Marathi),House No. (English),Age,Gender (Marathi),Gender (English)
```

### Step 2: Fill Your Data

- Add all 3000 rows in Excel
- Save as CSV (UTF-8 encoding)

### Step 3: Convert to JSON

1. Open `convert-csv-to-json.html` in your browser
2. Upload your CSV file
3. Download the generated JSON
4. Replace `data/voters.json` with the new file

## Method 3: Use Python Script (For Large Datasets)

Create a file `convert.py`:

```python
import csv
import json

# Read CSV
voters = []
with open('voters.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Handle missing age
        age = row['Age'].strip()
        if age == '-' or age == '':
            age = 0
        else:
            age = int(age)
        
        voters.append({
            'voterNo': int(row['Voter No.']),
            'voterId': row['Voter ID (EPIC No.)'].strip(),
            'fullNameMarathi': row['Full Name (Marathi)'].strip(),
            'fullNameEnglish': row['Full Name (English)'].strip(),
            'relativeNameMarathi': row["Relative's Name (Marathi)"].strip(),
            'relativeNameEnglish': row["Relative's Name (English)"].strip(),
            'houseNoMarathi': row['House No. (Marathi)'].strip(),
            'houseNoEnglish': row['House No. (English)'].strip(),
            'age': age,
            'genderMarathi': row['Gender (Marathi)'].strip(),
            'genderEnglish': row['Gender (English)'].strip()
        })

# Write JSON
with open('data/voters.json', 'w', encoding='utf-8') as f:
    json.dump(voters, f, ensure_ascii=False, indent=2)

print(f'Converted {len(voters)} voters to JSON!')
```

Run: `python convert.py`

## Current Status

✅ **30 rows added** (Voter numbers 31-60)
📝 **Need to add**: 2970 more rows (1-30, 61-3000)

## Quick Checklist

- [ ] All voter numbers are unique
- [ ] Age is number (0 for missing)
- [ ] Gender values are correct ("पु"/"स्त्री" or "Male"/"Female")
- [ ] JSON is valid (use JSON validator)
- [ ] File is saved as UTF-8
- [ ] All commas are correct (comma after each entry except last)

## Testing

After adding data:
1. Open `index.html` in browser
2. Check browser console (F12) for errors
3. Verify all rows display correctly
4. Test search and filters
5. Check pagination works

## File Size Tips

- 30 rows ≈ 5-10 KB
- 3000 rows ≈ 500 KB - 1 MB
- GitHub Pages limit: 100 MB per file ✅

Your JSON file will be well within limits!


