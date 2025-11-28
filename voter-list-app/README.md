# Voter List Management App - Progressive Web App (PWA)

A high-performance, responsive **Progressive Web App (PWA)** for managing and searching large voter databases (859+ voters) with advanced filtering, pagination, login system, and offline support. Can be installed on devices and works offline!

## 🚀 Features

- 🔐 **Login System**: Secure access with username/password (username: `kalpana`, password: `Sandbhor`)
- 🔍 **Advanced Search**: Search by name, voter ID, and room number
- 🎯 **Multiple Filters**: Filter by gender, age range, house number, and voter ID
- 📄 **Pagination**: Efficiently handle large datasets (25, 50, 100, 200, or 500 rows per page)
- 📊 **Real-time Statistics**: View total voters, filtered results, and gender counts
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🌐 **Marathi Language Support**: Displays Marathi text correctly with UTF-8 encoding
- ⚡ **Optimized Performance**: Handles 859+ voters smoothly with pagination
- 📲 **Progressive Web App (PWA)**: Installable on devices, works offline
- 🔄 **Offline Support**: All data embedded - no internet required after first load

## 📋 Table Columns

1. Voter No.
2. Voter ID (EPIC No.)
3. **Election Room No.** (newly added)
4. Full Name (Marathi)
5. Full Name (English)
6. Relative's Name (Marathi)
7. Relative's Name (English)
8. House No. (Marathi)
9. House No. (English)
10. Age
11. Gender (Marathi)
12. Gender (English)

## 🌐 Web Deployment (PWA Ready!)

Your app is now a **Progressive Web App** that can be deployed to the web and installed on devices!

### Quick Deploy Options

**1. GitHub Pages (Free)**
- See `WEB-DEPLOYMENT.md` for detailed instructions
- Push to GitHub and enable Pages in settings
- Your app will be live at: `https://YOUR_USERNAME.github.io/voter-list-app/`

**2. Netlify (Free & Fast)**
- Drag and drop the folder to https://app.netlify.com
- Or use: `netlify deploy`

**3. Vercel (Free)**
- Use: `vercel` command
- Or connect your GitHub repo

### 📱 Installing as PWA

After deployment, users can install the app:
- **Desktop**: Click install icon in browser
- **Android**: "Add to Home Screen" from Chrome menu
- **iOS**: Share → "Add to Home Screen"

The app will work offline and feel like a native app!

## 📁 Project Structure

```
voter-list-app/
├── index.html              # Main HTML file (PWA enabled)
├── app.js                  # JavaScript logic with 859 embedded voters
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline support)
├── data/
│   └── voters.json        # Voter data (859 voters)
├── convert-csv-to-json.js # CSV to JSON converter
├── convert-xlsx-to-json.js # Excel to JSON converter
├── create-icons.html       # Icon generator tool
├── README.md               # This file
├── WEB-DEPLOYMENT.md       # Web deployment guide
├── BUILD-APK.md           # Android APK build guide
└── .gitignore             # Git ignore file
```

## 💾 Data Loading

The app has **859 voters embedded directly in `app.js`** for offline support.

**Data Sources:**
- ✅ **Embedded Data**: 859 voters in `app.js` (works offline, no server needed)
- ✅ **JSON File**: Can also load from `data/voters.json` if available
- ✅ **Excel Import**: Use `convert-xlsx-to-json.js` to update data from Excel

**To update data:**
1. Update `list 1.xlsx` with new data
2. Run: `node convert-xlsx-to-json.js`
3. Run: `node -e "const fs=require('fs');const d=JSON.parse(fs.readFileSync('data/voters.json'));const c=fs.readFileSync('app.js','utf8');fs.writeFileSync('app.js',c.replace(/let voterData = \[[\s\S]*?\];/, 'let voterData = ' + JSON.stringify(d,null,2) + ';'))"`

## 🎨 Usage

1. **Login**: Enter username `kalpana` and password `Sandbhor`
2. **Search**: Type in the search box to find voters by name, voter ID, or room number
3. **Filter by Gender**: Select a gender from the dropdown
4. **Filter by Age**: Enter minimum and/or maximum age
5. **Filter by House Number**: Enter house number (Marathi or English)
6. **Filter by Voter ID**: Enter voter ID to find specific voter
7. **Change Page Size**: Select rows per page (25, 50, 100, 200, or 500)
8. **Navigate Pages**: Use pagination controls at the bottom
9. **Reset**: Click "Reset Filters" to clear all filters

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

- **WEB-DEPLOYMENT.md**: Complete web deployment guide (GitHub Pages, Netlify, Vercel)
- **BUILD-APK.md**: Android APK build instructions
- **QUICK-APK-GUIDE.md**: Quick APK build reference
- **DATA-SOURCES.md**: Data loading and update options
- **create-icons.html**: Generate app icons for PWA

## 🎯 Current Status

- ✅ **859 voters** embedded in app
- ✅ **PWA enabled** - installable and works offline
- ✅ **Login system** - secure access
- ✅ **Search & Filter** - by name, ID, room number
- ✅ **Responsive design** - mobile-friendly
- ✅ **Ready for deployment** - GitHub Pages, Netlify, Vercel

---

**Need Help?** Check the detailed guides in the repository or open an issue!
