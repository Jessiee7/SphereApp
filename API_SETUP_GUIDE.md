# Google Translate API Setup Guide

## Step-by-Step Setup Instructions

### 1. Create/Select Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Make sure you're in the correct project

### 2. Enable Cloud Translation API

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Cloud Translation API"
3. Click on "Cloud Translation API"
4. Click **Enable**

### 3. Create API Key

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **API Key**
3. Copy the generated API key
4. **Important**: Click on the API key to edit it
5. Under "Application restrictions", select "Android apps" or "None" for testing
6. Under "API restrictions", select "Restrict key" and choose "Cloud Translation API"
7. Click **Save**

### 4. Enable Billing (Required)

1. Go to **Billing** in the Google Cloud Console
2. Link a billing account to your project
3. **Note**: Google Translate API requires billing to be enabled, but you get $300 free credit

### 5. Test Your API Key

Run this command in terminal to test your API key:

```bash
curl -X POST "https://translation.googleapis.com/language/translate/v2" \
  -H "Content-Type: application/json" \
  -d '{"q":"Hello","target":"hi","key":"YOUR_API_KEY_HERE"}'
```

If successful, you should get a response like:
```json
{
  "data": {
    "translations": [
      {
        "translatedText": "नमस्ते",
        "detectedSourceLanguage": "en"
      }
    ]
  }
}
```

### 6. Update Your App

1. Open `src/config/TranslationConfig.ts`
2. Replace `YOUR_API_KEY_HERE` with your actual API key
3. Build and test your app

## Common Issues & Solutions

### Issue: "Method doesn't allow unregistered callers"
**Solution**: Make sure you've enabled the Cloud Translation API in your project

### Issue: "API key not valid"
**Solution**: 
- Check that you copied the API key correctly
- Make sure the API key has the correct restrictions
- Verify billing is enabled

### Issue: "Quota exceeded"
**Solution**: 
- Check your billing account
- Monitor usage in Google Cloud Console
- Consider upgrading your plan

## Alternative: Use Free Translation Service

If you continue having issues with Google Translate API, you can use a free alternative:

1. **LibreTranslate**: Free, open-source translation service
2. **MyMemory**: Free translation API with generous limits
3. **Yandex Translate**: Free tier available

## Security Best Practices

1. **Never commit API keys to version control**
2. Use environment variables in production
3. Set up proper API key restrictions
4. Monitor API usage regularly
5. Use the minimum required permissions

## Testing in Your App

1. Build and run your app
2. Tap "Test Translation API" button
3. Check the console logs for detailed error information
4. If successful, try translating some text 