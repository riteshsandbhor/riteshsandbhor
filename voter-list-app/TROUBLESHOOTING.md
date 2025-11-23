# Troubleshooting Guide

## Problem: Only seeing 5 voters instead of 30

### Solution 1: Check Browser Console

1. Open your browser's Developer Tools (Press F12)
2. Go to the "Console" tab
3. Look for error messages

**If you see CORS errors:**
- You're opening the file directly (file://)
- **Solution**: Use a local server or deploy to GitHub Pages

**If you see "Failed to load data file":**
- The JSON file path is incorrect
- **Solution**: Make sure `data/voters.json` exists in the same folder structure

### Solution 2: Verify File Structure

Your folder should look like this:
```
voter-list-app/
├── index.html
├── app.js
├── data/
│   └── voters.json  ← Make sure this file exists!
└── README.md
```

### Solution 3: Test JSON File

1. Open `data/voters.json` in a text editor
2. Verify it's valid JSON (use https://jsonlint.com/)
3. Check that it has 30 entries (voter numbers 31-60)

### Solution 4: Use Local Server

**Option A: Python (if installed)**
```bash
# Navigate to voter-list-app folder
cd voter-list-app

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option B: Node.js (if installed)**
```bash
# Install http-server globally
npm install -g http-server

# Navigate to folder
cd voter-list-app

# Start server
http-server

# Then open: http://localhost:8080
```

**Option C: VS Code Live Server Extension**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Solution 5: Check JSON Loading

Open browser console and look for:
- ✅ `Data loaded successfully: 30 voters from data/voters.json`
- ❌ `Error loading voter data from JSON` (means file not found)

### Solution 6: Quick Test

Add this to the end of `app.js` to verify data:
```javascript
console.log('Total voters:', voterData.length);
console.log('First voter:', voterData[0]);
```

You should see:
- Total voters: 30
- First voter: {voterNo: 31, ...}

## Problem: CORS Error

**Error message:** `Access to fetch at 'file:///...' from origin 'null' has been blocked by CORS policy`

**Solution:** 
- Don't open HTML file directly
- Use a local server (see Solution 4 above)
- Or deploy to GitHub Pages

## Problem: JSON File Not Found

**Error message:** `Failed to load data file` or `404 Not Found`

**Solutions:**
1. Check file path: `data/voters.json` (relative to index.html)
2. Make sure `data` folder exists
3. Make sure `voters.json` is inside `data` folder
4. Check file name spelling (case-sensitive)

## Problem: Invalid JSON

**Error message:** `Unexpected token` or `JSON.parse error`

**Solution:**
1. Validate JSON at https://jsonlint.com/
2. Check for:
   - Missing commas
   - Extra commas
   - Unclosed brackets
   - Invalid characters

## Problem: Still seeing 5 voters

**Possible causes:**
1. Browser cache - Clear cache and reload (Ctrl+Shift+R)
2. JSON file not loading - Check console for errors
3. Hardcoded data showing - JSON load failed silently

**Quick fix:**
1. Open browser console (F12)
2. Type: `voterData.length`
3. Should show: `30` (not `5`)

If it shows `5`, the JSON file didn't load. Check console for errors.

## Still Having Issues?

1. **Check browser console** (F12) for specific error messages
2. **Verify file structure** matches the guide above
3. **Test with local server** instead of opening file directly
4. **Check JSON file** is valid and has 30 entries

