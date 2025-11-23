# Voter List Management App - Optimized for 3000+ Rows

A high-performance, responsive web application for managing and searching large voter databases (3000+ rows) with advanced filtering, pagination, and export capabilities.

## 🚀 Features

- 🔍 **Advanced Search**: Search across all fields (names, voter ID, house numbers)
- 🎯 **Multiple Filters**: Filter by gender, age range, house number, and voter ID
- 📄 **Pagination**: Efficiently handle large datasets (25, 50, 100, 200, or 500 rows per page)
- 📊 **Real-time Statistics**: View total voters, filtered results, and gender counts
- 📥 **CSV Export**: Export filtered results to CSV file
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🌐 **Marathi Language Support**: Displays Marathi text correctly with UTF-8 encoding
- ⚡ **Optimized Performance**: Handles 3000+ rows smoothly with pagination

## 📋 Table Columns

1. Voter No.
2. Voter ID (EPIC No.)
3. Full Name (Marathi)
4. Full Name (English)
5. Relative's Name (Marathi)
6. Relative's Name (English)
7. House No. (Marathi)
8. House No. (English)
9. Age
10. Gender (Marathi)
11. Gender (English)

## 🛠️ Quick Setup for GitHub Pages

### Step 1: Prepare Your Data

1. **Convert your data to JSON format**
   - Use the included `convert-csv-to-json.html` tool
   - Or use an online CSV to JSON converter
   - Save as `data/voters.json`

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub (make it **Public**)
2. Upload these files:
   - `index.html`
   - `app.js`
   - `data/voters.json` (your 3000 rows)
   - `README.md`

### Step 3: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Select source: **main** branch, **/ (root)** folder
3. Click **Save**

### Step 4: Access Your App

Your app will be live at:
```
https://YOUR_USERNAME.github.io/voter-list-app/
```

## 📁 Project Structure

```
voter-list-app/
├── index.html              # Main HTML file
├── app.js                  # JavaScript logic with pagination
├── data/
│   └── voters.json        # Your voter data (3000 rows)
├── convert-csv-to-json.html # CSV to JSON converter tool
├── README.md               # This file
├── GITHUB-DEPLOYMENT.md   # Detailed deployment guide
├── DATA-SOURCES.md        # Data loading options
└── .gitignore            # Git ignore file
```

## 💾 Data Loading

The app automatically loads data from `data/voters.json` when deployed.

**For local testing:**
- The app will try to load from `data/voters.json`
- If file not found, it uses sample data
- Check browser console (F12) for loading status

## 🎨 Usage

1. **Search**: Type in the search box to find voters by any field
2. **Filter by Gender**: Select a gender from the dropdown
3. **Filter by Age**: Enter minimum and/or maximum age
4. **Filter by House Number**: Enter house number (Marathi or English)
5. **Filter by Voter ID**: Enter voter ID to find specific voter
6. **Change Page Size**: Select rows per page (25, 50, 100, 200, or 500)
7. **Navigate Pages**: Use pagination controls at the bottom
8. **Reset**: Click "Reset Filters" to clear all filters
9. **Export**: Click "Export CSV" to download filtered results

## ⚡ Performance

- **Pagination**: Only renders current page (default 50 rows)
- **Efficient Filtering**: Filters run on all data, then pagination applies
- **Fast Search**: Real-time search with debouncing
- **Optimized Rendering**: Only updates visible rows

## 🔧 Technologies Used

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (Vanilla JS - No frameworks)
- Bootstrap Icons

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📝 Notes

- **File Size**: GitHub Pages supports files up to 100MB
- **JSON Format**: Must be valid JSON with UTF-8 encoding
- **Marathi Text**: Ensure your JSON file is saved as UTF-8
- **Performance**: App handles 3000+ rows efficiently with pagination

## 🐛 Troubleshooting

**Data not loading?**
- Check browser console (F12) for errors
- Verify `data/voters.json` exists and is valid JSON
- Ensure file path is correct: `data/voters.json`

**Marathi text not displaying?**
- Ensure JSON file is saved as UTF-8 encoding
- Check browser supports UTF-8 (all modern browsers do)

**Slow performance?**
- Large JSON files may take 2-3 seconds to load
- Pagination ensures smooth scrolling and interaction
- Consider reducing page size if needed

## 📄 License

Free to use and modify for your needs.

## 📚 Additional Resources

- **GITHUB-DEPLOYMENT.md**: Detailed GitHub Pages deployment guide
- **DATA-SOURCES.md**: All data loading options explained
- **convert-csv-to-json.html**: Tool to convert CSV to JSON

---

**Need Help?** Check the detailed guides in the repository or open an issue!
