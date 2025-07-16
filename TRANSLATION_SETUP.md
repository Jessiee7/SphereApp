# Translation Setup Guide

## Google Translate API Setup

To enable translation functionality in your app, you need to set up Google Translate API:

### 1. Get Google Translate API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Cloud Translation API"
4. Go to "Credentials" and create an API key
5. Copy your API key

### 2. Configure the API Key

1. Open `src/config/TranslationConfig.ts`
2. Replace `YOUR_GOOGLE_TRANSLATE_API_KEY_HERE` with your actual API key:

```typescript
export const GOOGLE_TRANSLATE_API_KEY = 'your_actual_api_key_here';
```

### 3. Security Note

⚠️ **Important**: Never commit your API key to version control. For production apps:
- Use environment variables
- Store keys in secure storage
- Use backend services to proxy API calls

### 4. Alternative: Free Translation Services

If you don't want to use Google Translate API, you can:

1. Use free translation services like LibreTranslate
2. Implement offline translation using local models
3. Use other translation APIs (Microsoft Translator, DeepL, etc.)

### 5. Testing

After setting up the API key:
1. Build and run your app
2. Select an image with text
3. Choose a target language
4. The app will automatically translate the recognized text

## Supported Languages

- English (eng)
- Hindi (hin)
- Gujarati (guj)
- Marathi (mar)
- Urdu (urd)

## Features

- **OCR**: Extract text from images in multiple languages
- **Translation**: Translate extracted text to selected language
- **Progress Tracking**: Real-time progress for OCR processing
- **Language Selection**: Easy switching between supported languages 