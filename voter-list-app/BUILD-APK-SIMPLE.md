# 📱 Build APK File - Simple Guide

This guide will help you build a **proper Android APK file** that can be installed on any Android device.

## ✅ What You'll Get

- A `.apk` file (Android app package)
- Can be installed on any Android phone/tablet
- Works like a native Android app
- No browser needed - standalone app

## 📋 Prerequisites Checklist

Before building, you need:

- [ ] **Java JDK 11+** installed
- [ ] **Android Studio** installed
- [ ] **Android SDK** installed (via Android Studio)

## 🚀 Quick Build Steps

### Step 1: Install Java JDK

**Check if Java is installed:**
```bash
java -version
```

**If not installed, install it:**

**macOS:**
```bash
brew install openjdk@11
```

**Linux:**
```bash
sudo apt-get install openjdk-11-jdk
```

**Windows:**
Download from: https://adoptium.net/

### Step 2: Install Android Studio

1. **Download:** https://developer.android.com/studio
2. **Install** Android Studio
3. **Open** Android Studio
4. **Complete setup wizard:**
   - Install Android SDK
   - Install SDK Platform (API 33 recommended)
   - Install Android SDK Build-Tools

### Step 3: Set Environment Variables

**macOS/Linux:**

Add to `~/.zshrc` (or `~/.bashrc`):
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
# export ANDROID_HOME=$HOME/Android/Sdk  # Linux
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
```

**Reload:**
```bash
source ~/.zshrc  # or source ~/.bashrc
```

**Windows:**
- System Properties → Environment Variables
- Add `ANDROID_HOME` = `C:\Users\YourName\AppData\Local\Android\Sdk`
- Add to PATH: `%ANDROID_HOME%\platform-tools`

### Step 4: Sync Web Files

```bash
cd voter-list-app
npm run sync
```

This copies your web files to the Android project.

### Step 5: Build APK

**Option A: Using Android Studio (Easiest)**

1. **Open Android Studio**
2. **Click "Open an Existing Project"**
3. **Navigate to:** `voter-list-app/android`
4. **Wait for Gradle sync** to complete (may take a few minutes first time)
5. **Go to:** `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
6. **Wait for build** to complete
7. **Click "locate"** in the notification
8. **Your APK is at:**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

**Option B: Using Command Line**

```bash
cd voter-list-app/android
./gradlew assembleDebug
```

**APK location:**
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### Step 6: Install APK on Your Phone

1. **Transfer APK** to your Android device (USB, email, cloud storage)
2. **On your phone:**
   - Go to Settings → Security
   - Enable **"Install from Unknown Sources"** or **"Install unknown apps"**
3. **Open the APK file** on your phone
4. **Tap "Install"**
5. **Done!** App installed like a native app

## 📱 APK File Details

- **File name:** `app-debug.apk`
- **Location:** `android/app/build/outputs/apk/debug/`
- **Size:** ~5-10 MB (approximate)
- **Type:** Debug APK (for testing)

## 🔐 Building Release APK (For Distribution)

If you want to distribute the app, build a release APK:

### 1. Generate Signing Key

```bash
cd voter-list-app/android/app
keytool -genkey -v -keystore voter-list-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias voter-list
```

**Remember the passwords you enter!**

### 2. Configure Signing

Edit `android/app/build.gradle` and add before the `android {` block:

```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('voter-list-release-key.jks')
            storePassword 'YOUR_STORE_PASSWORD'
            keyAlias 'voter-list'
            keyPassword 'YOUR_KEY_PASSWORD'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
        }
    }
}
```

### 3. Build Release APK

**In Android Studio:**
- `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
- Select **"release"** build variant

**Or command line:**
```bash
cd android
./gradlew assembleRelease
```

**Release APK location:**
```
android/app/build/outputs/apk/release/app-release.apk
```

## 🆘 Troubleshooting

### "SDK location not found"
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### "Java version error"
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)  # macOS
```

### "Gradle sync failed"
- Open Android Studio
- File → Invalidate Caches → Restart
- Try syncing again

### "Command not found: gradlew"
```bash
chmod +x android/gradlew
```

### Build takes too long
- First build takes 5-10 minutes (downloads dependencies)
- Subsequent builds are faster (1-2 minutes)

## ✅ Verification

After building, verify:
- [ ] APK file exists at the location
- [ ] File size is reasonable (5-10 MB)
- [ ] Can transfer to phone
- [ ] Can install on Android device

## 📦 What's in the APK

- Your web app (HTML, CSS, JavaScript)
- All 859 voters embedded
- Login system
- Search and filter functionality
- Works completely offline
- Native Android wrapper

## 🎯 Next Steps

1. Build the APK (follow steps above)
2. Transfer to Android device
3. Install and test
4. Share with others if needed!

---

**Need more help?** See `BUILD-APK.md` for detailed instructions.

