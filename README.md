# AI Fusion

A React Native mobile application that combines AI-powered text-to-image generation and text summarization features.

**Repository**: [https://github.com/vedantr51/AI-Fusion](https://github.com/vedantr51/AI-Fusion)

## Features

- **Text-to-Image Generation**: Generate images from text prompts using AI
- **Text Summarization**: Summarize long texts using advanced AI models
- **Cross-Platform**: Works on both Android and iOS
- **Real-time Logging**: View detailed process logs for debugging and monitoring

## Technologies Used

- **React Native**: Framework for building native mobile apps
- **React Navigation**: For screen navigation
- **Expo (Bare Workflow)**: For development and build tools
- **Polinations.ai API**: For text-to-image generation
- **Hugging Face API**: For text summarization using BART model

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Android SDK and emulator or physical device

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd AIfusion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install React Native CLI** (if not already installed):
   ```bash
   npm install -g @react-native-community/cli
   ```

## Running the App

### Development Server

1. **Start Metro bundler**:
   ```bash
   npx react-native start
   ```

2. **Run on Android**:
   ```bash
   npx react-native run-android
   ```

3. **Run on iOS** (macOS only):
   ```bash
   npx react-native run-ios
   ```

### Viewing Logs

- **In DevTools**: Press `j` in the Metro terminal to open React Native DevTools in your browser
- **In Terminal**: Run `npx react-native log-android` to view Android logs in terminal

## Project Structure

```
AIfusion/
├── android/                 # Android native code
├── ios/                     # iOS native code
├── components/              # React components
│   ├── HomeScreen.js        # Main screen with navigation
│   ├── TextToImageScreen.js # Image generation screen
│   └── SummarizeScreen.js   # Text summarization screen
├── App.js                   # Main app component
├── index.js                 # App entry point
├── metro.config.js          # Metro bundler configuration
├── babel.config.js          # Babel configuration
├── package.json             # Dependencies and scripts
└── app.json                 # App configuration
```

## Usage

1. **Launch the app** on your device/emulator
2. **Home Screen**: Choose between "Generate Images" or "Summarize Text"
3. **Image Generation**:
   - Enter a text prompt
   - Tap "Generate Image"
   - View the generated image
4. **Text Summarization**:
   - Enter text to summarize
   - Tap "Summarize"
   - View the summarized text

## API Usage

- **Image Generation**: Uses Pollinations.ai free API (no authentication required)
- **Text Summarization**: Uses Hugging Face free inference API for facebook/bart-large-cnn model

## Troubleshooting

### Common Issues

1. **404 Error**: Ensure Metro server is running before starting the app
2. **Babel Errors**: Clear Metro cache with `npx react-native start --reset-cache`
3. **Port Issues**: Kill process on port 8081 with `npx kill-port 8081`
4. **Android Build Issues**: Clean and rebuild with `./gradlew clean` in android/ directory

### Logs

Check logs in:
- React Native DevTools (press `j` in Metro terminal)
- Terminal with `npx react-native log-android`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Pollinations.ai for free image generation API
- Hugging Face for AI model hosting
- React Native community for excellent documentation