# Data Loading Options for Voter List App

The app can load data from **4 different sources**. Currently, it uses **hardcoded sample data** by default.

## Current Data Source: Hardcoded Data (Default)

**Location:** `app.js` - Lines 2-68

The app currently loads sample data directly from the JavaScript file. This is the default method.

---

## Option 1: Load from JSON File (Recommended for GitHub Pages)

### Steps:
1. Create a folder named `data` in your project
2. Create a file `data/voters.json` with your voter data
3. In `app.js`, find the `DOMContentLoaded` function (around line 74)
4. Uncomment this line:
   ```javascript
   loadVoterData('data/voters.json');
   ```

### JSON Format Example:
```json
[
    {
        "voterNo": 1,
        "voterId": "ABC123456",
        "fullNameMarathi": "राजेश कुमार शर्मा",
        "fullNameEnglish": "Rajesh Kumar Sharma",
        "relativeNameMarathi": "राम कुमार शर्मा",
        "relativeNameEnglish": "Ram Kumar Sharma",
        "houseNoMarathi": "१२३",
        "houseNoEnglish": "123",
        "age": 35,
        "genderMarathi": "पुरुष",
        "genderEnglish": "Male"
    }
]
```

---

## Option 2: Load from CSV File

### Steps:
1. Create a folder named `data` in your project
2. Create a file `data/voters.csv` with your voter data
3. In `app.js`, find the `DOMContentLoaded` function
4. Uncomment this line:
   ```javascript
   loadFromCSV('data/voters.csv');
   ```

### CSV Format:
```csv
Voter No.,Voter ID (EPIC No.),Full Name (Marathi),Full Name (English),Relative's Name (Marathi),Relative's Name (English),House No. (Marathi),House No. (English),Age,Gender (Marathi),Gender (English)
1,ABC123456,"राजेश कुमार शर्मा","Rajesh Kumar Sharma","राम कुमार शर्मा","Ram Kumar Sharma","१२३","123",35,"पुरुष","Male"
```

---

## Option 3: Load from Google Sheets

### Steps:
1. Create a Google Sheet with your voter data
2. Publish the sheet: File → Share → Publish to web → CSV format
3. Copy the CSV export URL
4. In `app.js`, find the `DOMContentLoaded` function
5. Add this line:
   ```javascript
   loadFromGoogleSheets('YOUR_GOOGLE_SHEETS_CSV_URL');
   ```

### Google Sheets Format:
Make sure your columns match:
- Column A: Voter No.
- Column B: Voter ID (EPIC No.)
- Column C: Full Name (Marathi)
- Column D: Full Name (English)
- Column E: Relative's Name (Marathi)
- Column F: Relative's Name (English)
- Column G: House No. (Marathi)
- Column H: House No. (English)
- Column I: Age
- Column J: Gender (Marathi)
- Column K: Gender (English)

---

## Option 4: Upload File via Browser (No Server Required)

### Steps:
1. Click the **"Upload Data"** button in the app
2. Select a JSON or CSV file from your computer
3. The data will load automatically

This method works completely client-side - no server needed!

---

## Which Method Should You Use?

| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| **Hardcoded** | Small datasets, testing | Simple, no files needed | Hard to update |
| **JSON File** | GitHub Pages, static hosting | Easy to edit, version control | Need to upload file |
| **CSV File** | Excel users, large datasets | Easy to create in Excel | Less structured |
| **Google Sheets** | Live updates, collaboration | Can update without redeploying | Requires internet |
| **File Upload** | One-time use, testing | No setup needed | Data lost on refresh |

---

## Quick Start Guide

### For GitHub Pages (Recommended):

1. **Create `data` folder** in your repository
2. **Add `voters.json`** file with your data
3. **Edit `app.js`** - Uncomment line 77:
   ```javascript
   loadVoterData('data/voters.json');
   ```
4. **Upload to GitHub** - Your data will load automatically!

### For Local Testing:

1. **Create `data` folder** next to `index.html`
2. **Add your data file** (`voters.json` or `voters.csv`)
3. **Edit `app.js`** to use the appropriate loading function
4. **Open `index.html`** in a browser

---

## Troubleshooting

**Problem:** Data not loading
- **Solution:** Check browser console (F12) for errors
- Make sure file path is correct
- Ensure JSON/CSV format is valid

**Problem:** Marathi text not displaying
- **Solution:** Make sure your file is saved as UTF-8 encoding

**Problem:** CORS errors (when loading from file)
- **Solution:** Use a local server or upload to GitHub Pages
- For local testing: `python -m http.server` or use Live Server extension

---

## Need Help?

Check the comments in `app.js` for detailed instructions on each loading method!


