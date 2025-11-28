# 📱 Build APK File - Quick Start

You want a **proper Android APK file** (not just a browser shortcut). Here's the fastest way:

## 🎯 Two Ways to Build APK

### Method 1: Android Studio (Easiest - Recommended) ⭐

**Step 1: Install Android Studio**
- Download: https://developer.android.com/studio
- Install and complete setup wizard
- Install Android SDK (API 33+) when prompted

**Step 2: Open Project**
```bash
cd voter-list-app
npm run open:android
```
This opens the Android project in Android Studio.

**Step 3: Build APK**
1. Wait for Gradle sync (first time takes 5-10 minutes)
2. Go to: **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete
4. Click **"locate"** in notification
5. **Your APK is ready!**

**APK Location:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Method 2: Command Line (If Android SDK Installed)

**Step 1: Set Environment Variables**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**Step 2: Build APK**
```bash
cd voter-list-app
npm run build:apk
```

Or manually:
```bash
cd voter-list-app
npm run sync
cd android
./gradlew assembleDebug
```

**APK Location:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## 📦 What You Get

- **File:** `app-debug.apk`
- **Size:** ~5-10 MB
- **Type:** Android app package
- **Can install on:** Any Android device
- **Works:** Completely offline, like a native app

## 📱 Install APK on Your Phone

1. **Transfer APK** to your Android phone (USB, email, cloud)
2. **Enable installation:**
   - Settings → Security → Enable "Install from Unknown Sources"
   - Or: Settings → Apps → Special access → Install unknown apps
3. **Open APK file** on your phone
4. **Tap "Install"**
5. **Done!** App installed like a native Android app

## ✅ Prerequisites

Before building, you need:

- ✅ **Java JDK 11+** (You have this ✓)
- ⚠️ **Android Studio** (Need to install)
- ⚠️ **Android SDK** (Installed via Android Studio)

## 🚀 Recommended: Use Android Studio

**Why Android Studio?**
- ✅ Easiest method
- ✅ Visual interface
- ✅ Handles all dependencies
- ✅ Easy to debug issues
- ✅ Can test on emulator

**Steps:**
1. Install Android Studio
2. Run: `npm run open:android`
3. Build → Build APK
4. Done!

## 🆘 Troubleshooting

**"SDK location not found"**
- Install Android Studio first
- Or set: `export ANDROID_HOME=$HOME/Library/Android/sdk`

**"Gradle sync failed"**
- Open Android Studio
- File → Invalidate Caches → Restart
- Try again

**Build takes long time**
- First build: 5-10 minutes (downloads dependencies)
- Next builds: 1-2 minutes

## 📚 More Help

- **BUILD-APK-SIMPLE.md** - Detailed step-by-step guide
- **BUILD-APK.md** - Complete reference guide

## 🎯 Summary

**Fastest way to get APK:**
1. Install Android Studio
2. Run: `npm run open:android`
3. Build → Build APK
4. Get your `.apk` file
5. Install on Android device

**That's it!** You'll have a proper Android APK file that installs like a native app! 🎉

