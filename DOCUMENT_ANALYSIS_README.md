# Document Analysis Screen

A comprehensive React Native screen that provides end-to-end document processing with OCR, translation, TTS, and AI analysis.

## Features

### 1. File Upload
- **Image Selection**: Choose images from gallery or take photos with camera
- **PDF Support**: Upload PDF files (UI ready, processing to be implemented)
- **File Preview**: Shows selected file with name and type

### 2. OCR (Optical Character Recognition)
- **Multi-language Support**: English, Hindi, Gujarati, Marathi, Urdu
- **Progress Tracking**: Real-time OCR progress indicator
- **Text Extraction**: Extracts text from images using Tesseract OCR

### 3. Translation
- **Google Translate API**: Professional translation service
- **Multi-language Support**: Translate to English, Hindi, Gujarati, Marathi, Urdu
- **Character Limit Handling**: Automatically truncates long text to fit API limits
- **Error Handling**: Graceful fallback for API errors

### 4. Text-to-Speech (TTS)
- **Voice Playback**: Read translated text aloud
- **Language-specific Voices**: Uses appropriate voice for target language
- **Playback Controls**: Start/stop functionality
- **Real-time Status**: Shows speaking state

### 5. AI Analysis (OpenAI GPT)
- **Document Classification**: Critical, Warning, or Normal based on content
- **Simple Explanations**: 2-3 bullet points in basic language
- **Confidence Scoring**: AI confidence in classification
- **Visual Indicators**: Color-coded badges and icons

## Setup Instructions

### 1. Install Dependencies

The following packages are already installed:
```bash
yarn add react-native-document-picker react-native-tts openai @react-native-picker/picker
```

### 2. API Keys Setup

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account and get your API key
3. In the app, tap the settings gear (⚙️) icon
4. Enter your OpenAI API key (starts with `sk-`)

#### Google Translate API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Cloud Translation API
4. Create credentials (API key)
5. In the app, tap the settings gear (⚙️) icon
6. Enter your Google Translate API key (starts with `AIza`)

### 3. OCR Language Data

Ensure the following language data files are in the correct locations:

**Android**: `android/app/src/main/assets/ocr_blobs/`
- `eng.traineddata` (English)
- `hin.traineddata` (Hindi)
- `guj.traineddata` (Gujarati)
- `mar.traineddata` (Marathi)
- `urd.traineddata` (Urdu)

**iOS**: `ios/ScanbotSDKOCRData.bundle/`
- Same files as Android

### 4. Permissions

Add the following permissions to your app:

**Android** (`android/app/src/main/AndroidManifest.xml`):
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

**iOS** (`ios/SphereApp/Info.plist`):
```xml
<key>NSCameraUsageDescription</key>
<string>This app needs camera access to take photos for OCR</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs photo library access to select images for OCR</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app needs microphone access for text-to-speech</string>
```

## Usage Guide

### 1. Launch the App
The app starts with the Document Analysis screen as the default.

### 2. Select a File
- **Gallery**: Tap "📁 Gallery" to select an image from your photo library
- **Camera**: Tap "📷 Camera" to take a new photo
- **PDF**: Tap "📄 PDF" to select a PDF file (processing not yet implemented)

### 3. Configure Languages
- **OCR Language**: Select the language of the text in your image
- **Target Language**: Select the language you want to translate to

### 4. Process Document
- Tap "Process Document" to start the analysis
- Watch the progress indicator as it goes through:
  - Text extraction (OCR)
  - Translation
  - AI analysis

### 5. View Results
- **Extracted Text**: See the original text from the image
- **Translation**: View the translated text
- **AI Analysis**: See the classification and simple explanation
- **Speak**: Tap "🔊 Speak Translation" to hear the translated text

### 6. Reset
- Tap "Reset All" to start over with a new document

## Technical Architecture

### Services Structure
```
src/services/
├── ocr.ts          # OCR functionality using Tesseract
├── translate.ts    # Google Translate API integration
├── tts.ts          # Text-to-Speech functionality
└── openai.ts       # OpenAI GPT analysis
```

### Key Components
- **DocumentAnalysisScreen**: Main screen component
- **ProcessingState**: Tracks current processing step and progress
- **FileData**: Handles image/PDF file information
- **Results**: Stores OCR, translation, and analysis results

### Error Handling
- **Network Errors**: Graceful handling of API failures
- **File Errors**: Validation of file types and permissions
- **API Limits**: Character limit handling for translation
- **User Feedback**: Clear error messages and alerts

## Troubleshooting

### Common Issues

1. **OCR Not Working**
   - Ensure language data files are in correct locations
   - Check image quality (should be clear and well-lit)
   - Verify OCR language selection matches image content

2. **Translation Fails**
   - Verify Google Translate API key is correct
   - Check internet connection
   - Ensure text is not too long (auto-truncated if needed)

3. **TTS Not Working**
   - Check device volume
   - Verify microphone permissions
   - Ensure target language is supported by device

4. **OpenAI Analysis Fails**
   - Verify OpenAI API key is correct
   - Check API quota/credits
   - Ensure internet connection is stable

### Performance Tips

1. **Image Quality**: Use clear, well-lit images for better OCR accuracy
2. **Text Length**: Shorter text processes faster and has better translation quality
3. **Language Selection**: Choose the correct OCR language for better accuracy
4. **Network**: Ensure stable internet connection for API calls

## API Usage Costs

### Google Translate API
- Free tier: 500,000 characters per month
- Paid: $20 per million characters

### OpenAI API
- GPT-3.5-turbo: ~$0.002 per 1K tokens
- Typical document analysis: 100-500 tokens per request

## Future Enhancements

1. **PDF Processing**: Implement PDF text extraction
2. **Offline OCR**: Add offline OCR capabilities
3. **Batch Processing**: Process multiple documents
4. **Export Results**: Save results to file or share
5. **Custom Models**: Fine-tune AI models for specific domains
6. **Voice Commands**: Add voice control for hands-free operation

## Support

For technical issues or questions:
1. Check the troubleshooting section above
2. Verify all dependencies are properly installed
3. Ensure API keys are correctly configured
4. Test with simple, clear images first 