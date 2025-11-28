# How to Install the Voter List Web App

Your app is a **Progressive Web App (PWA)**, which means it can be installed on devices directly from the browser - no app store needed!

## 📱 Installing on Android Phone/Tablet

### Method 1: Chrome Browser (Recommended)

1. **Open the app** in Chrome browser:
   - Deploy to GitHub Pages, Netlify, or Vercel first
   - Or test locally with HTTP server
   - Open the app URL in Chrome

2. **Look for install prompt:**
   - Chrome will show a banner: "Add Voter List to Home screen"
   - Tap **"Add"** or **"Install"**

3. **Or manually add:**
   - Tap the **menu** (3 dots) in Chrome
   - Select **"Add to Home screen"** or **"Install app"**
   - Tap **"Add"** or **"Install"**

4. **Done!** The app icon will appear on your home screen
   - Tap it to open like a native app
   - Works offline after first load

### Method 2: Other Android Browsers

**Samsung Internet:**
- Menu → "Add page to" → "Home screen"

**Firefox:**
- Menu → "Install" or "Add to Home Screen"

**Edge:**
- Menu → "Apps" → "Install this site as an app"

## 🍎 Installing on iPhone/iPad (iOS)

1. **Open the app** in Safari browser (must use Safari, not Chrome)

2. **Tap the Share button** (square with arrow pointing up)

3. **Scroll down** and tap **"Add to Home Screen"**

4. **Edit the name** (optional) and tap **"Add"**

5. **Done!** The app icon appears on your home screen
   - Works like a native app
   - Opens in standalone mode (no browser UI)

## 💻 Installing on Desktop (Windows/Mac/Linux)

### Chrome/Edge (Windows/Mac/Linux)

1. **Open the app** in Chrome or Edge

2. **Look for install icon** in the address bar (usually a "+" or install icon)

3. **Click "Install"** when prompted

4. **Or use menu:**
   - Chrome: Menu (3 dots) → "Install Voter List..."
   - Edge: Menu (3 dots) → "Apps" → "Install this site as an app"

5. **Done!** App opens in its own window
   - Appears in your applications list
   - Can be pinned to taskbar/dock

### Firefox (Desktop)

Firefox doesn't support PWA installation yet, but you can:
- Bookmark the site
- Use "Open in App" if available

## 🌐 Prerequisites for Installation

### Important Requirements:

1. **HTTPS Required** (for production)
   - GitHub Pages: ✅ Provides HTTPS automatically
   - Netlify: ✅ Provides HTTPS automatically
   - Vercel: ✅ Provides HTTPS automatically
   - Local testing: Use HTTP server (not file://)

2. **Service Worker Must Register**
   - Check browser console (F12) for errors
   - Should see: "Service Worker registered"

3. **Manifest.json Must Be Accessible**
   - Verify: `https://your-site.com/manifest.json` loads correctly

## 🧪 Testing Installation Locally

Before deploying, test locally:

```bash
# Start local HTTP server
python3 -m http.server 8000

# Or with Node.js
npx http-server -p 8000
```

Then:
1. Open: `http://localhost:8000`
2. Try installing (Chrome/Edge will show install option)
3. Check browser console for any errors

## 📋 Installation Checklist

Before installing, ensure:
- [ ] App is deployed (or running on HTTP server)
- [ ] HTTPS enabled (for production)
- [ ] Service worker registered (check console)
- [ ] Manifest.json accessible
- [ ] App icons created (icon-192.png, icon-512.png)

## 🔍 Verify Installation

After installing:

1. **Check app icon** appears on home screen/desktop
2. **Open the app** - should open in standalone mode
3. **Test offline** - disconnect internet, app should still work
4. **Check app info** - should show app name, not browser

## 🆘 Troubleshooting

### "Install" option not showing?

**Possible causes:**
- Not using HTTPS (required for production)
- Service worker not registered (check console)
- Manifest.json not accessible
- Browser doesn't support PWA (use Chrome/Edge/Safari)

**Solutions:**
1. Check browser console (F12) for errors
2. Verify manifest.json loads: `https://your-site.com/manifest.json`
3. Try different browser (Chrome recommended)
4. Clear browser cache and reload

### App not working offline?

- Service worker must be registered
- Check browser console for service worker errors
- Ensure all files are cached (check Network tab)

### Icons not showing?

- Create icon files: `icon-192.png` and `icon-512.png`
- Place in root directory
- Verify paths in manifest.json

## 📱 Difference: PWA vs APK

**PWA (Progressive Web App):**
- ✅ Installs from browser
- ✅ No app store needed
- ✅ Works on all platforms
- ✅ Smaller size
- ✅ Easy updates (just refresh)

**APK (Android App Package):**
- ✅ Native Android app
- ✅ Requires Android Studio to build
- ✅ Only works on Android
- ✅ Larger file size
- ✅ Must be manually installed

**For this app:**
- **Web/PWA**: Use installation method above (works everywhere)
- **Android APK**: See `BUILD-APK.md` if you need native Android app

## 🚀 Quick Start

1. **Deploy your app** (GitHub Pages, Netlify, or Vercel)
2. **Open in browser** (Chrome recommended)
3. **Look for install prompt** or use browser menu
4. **Install and enjoy!**

## 📚 Related Guides

- **WEB-DEPLOYMENT.md** - How to deploy to web
- **BUILD-APK.md** - How to build Android APK (if needed)
- **WEB-APP-READY.md** - Web app setup summary

---

**Need help?** Check browser console (F12) for errors or see troubleshooting section above!

