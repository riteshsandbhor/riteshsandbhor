# GitHub Pages Deployment Guide for Voter List App (3000+ Rows)

This guide will help you deploy your voter list app with 3000 rows to GitHub Pages.

## Step 1: Prepare Your Data

### Option A: Convert Excel/CSV to JSON (Recommended)

1. **Export your data to CSV** (if you have Excel file)
   - Open your Excel file
   - File → Save As → CSV (UTF-8)

2. **Convert CSV to JSON** using one of these methods:

   **Method 1: Online Converter**
   - Go to https://csvjson.com/csv2json
   - Upload your CSV file
   - Download the JSON file
   - Save as `voters.json`

   **Method 2: Python Script** (if you have Python)
   ```python
   import csv
   import json

   csv_file = 'voters.csv'
   json_file = 'voters.json'

   voters = []
   with open(csv_file, 'r', encoding='utf-8') as f:
       reader = csv.DictReader(f)
       for row in reader:
           voters.append({
               'voterNo': int(row['Voter No.']),
               'voterId': row['Voter ID (EPIC No.)'],
               'fullNameMarathi': row['Full Name (Marathi)'],
               'fullNameEnglish': row['Full Name (English)'],
               'relativeNameMarathi': row["Relative's Name (Marathi)"],
               'relativeNameEnglish': row["Relative's Name (English)"],
               'houseNoMarathi': row['House No. (Marathi)'],
               'houseNoEnglish': row['House No. (English)'],
               'age': int(row['Age']),
               'genderMarathi': row['Gender (Marathi)'],
               'genderEnglish': row['Gender (English)']
           })

   with open(json_file, 'w', encoding='utf-8') as f:
       json.dump(voters, f, ensure_ascii=False, indent=2)
   ```

### Option B: Create JSON Manually

Your JSON file should look like this:
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

## Step 2: Set Up GitHub Repository

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `voter-list-app` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - Click "Create repository"

2. **Clone or prepare your files locally**
   ```
   voter-list-app/
   ├── index.html
   ├── app.js
   ├── data/
   │   └── voters.json  (your 3000 rows data)
   ├── README.md
   └── .gitignore
   ```

## Step 3: Upload Files to GitHub

### Method 1: Using GitHub Web Interface

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop these files:
   - `index.html`
   - `app.js`
   - `README.md`
   - `.gitignore`
4. Create `data` folder:
   - Click "Add file" → "Create new file"
   - Type: `data/voters.json`
   - Paste your JSON data
   - Click "Commit new file"

### Method 2: Using Git Command Line

```bash
# Navigate to your project folder
cd voter-list-app

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Voter list app with 3000 rows"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/voter-list-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

## Step 5: Verify Deployment

1. Wait 1-2 minutes for GitHub to build your site
2. Go to: `https://YOUR_USERNAME.github.io/voter-list-app/`
3. Your app should load with all 3000 rows!

## Step 6: Verify Data Loading

1. Open browser console (F12)
2. Check for any errors
3. You should see: `Data loaded successfully: 3000 voters from data/voters.json`

## Important Notes

### File Size Limits
- GitHub Pages has a **100MB file size limit** per file
- For 3000 rows, your JSON file should be well under this limit
- If your JSON is too large, consider:
  - Compressing the JSON (remove extra spaces)
  - Splitting into multiple files
  - Using CSV format instead

### Performance Tips
- The app uses **pagination** (50 rows per page by default)
- Users can change page size: 25, 50, 100, 200, or 500 rows
- All filtering happens client-side (fast and efficient)

### Troubleshooting

**Problem: Data not loading**
- Check browser console for errors
- Verify file path: `data/voters.json`
- Ensure JSON is valid (use JSON validator)
- Check file encoding is UTF-8

**Problem: Marathi text not displaying**
- Ensure JSON file is saved as UTF-8
- Check browser supports UTF-8 (all modern browsers do)

**Problem: CORS errors**
- GitHub Pages should handle this automatically
- If issues persist, check file paths are correct

**Problem: Slow loading**
- Large JSON files may take a few seconds
- The app shows a loading indicator
- Consider compressing your JSON

## Updating Your Data

1. Edit `data/voters.json` on GitHub
2. Commit the changes
3. GitHub Pages will automatically update (may take 1-2 minutes)

## Custom Domain (Optional)

If you want a custom domain:
1. Add a `CNAME` file to your repository
2. Add your domain name in the file
3. Configure DNS settings with your domain provider

## Support

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all file paths are correct
3. Ensure JSON format is valid
4. Check GitHub Pages build status in repository Settings → Pages

---

**Your app URL will be:**
`https://YOUR_USERNAME.github.io/voter-list-app/`

Replace `YOUR_USERNAME` with your actual GitHub username!


