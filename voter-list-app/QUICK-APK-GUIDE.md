# Quick APK Build Guide

## 🚀 Fastest Way to Build APK

### Prerequisites Check
- ✅ Node.js installed
- ⚠️ Android Studio installed? (Download: https://developer.android.com/studio)
- ⚠️ Java JDK installed? (macOS: `brew install openjdk@11`)

### Quick Build Steps

1. **Sync web files to Android:**
   ```bash
   npm run sync
   ```

2. **Open in Android Studio:**
   ```bash
   npm run open:android
   ```

3. **In Android Studio:**
   - Wait for Gradle sync
   - Click: **Build > Build Bundle(s) / APK(s) > Build APK(s)**
   - Find APK at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Command Line Build (Alternative)

```bash
cd android
./gradlew assembleDebug
```

APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📱 Install on Device

1. Transfer APK to Android device
2. Enable "Install from Unknown Sources"
3. Open and install the APK

## 🔧 Troubleshooting

**"SDK location not found"**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

**"Java not found"**
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

**Need more help?** See `BUILD-APK.md` for detailed instructions.

