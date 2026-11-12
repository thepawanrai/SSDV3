export interface Language {
  code: string;
  name: string;
  englishName: string;
  region: string;
  shortCode: string;
  greeting: string;
}

export const TOP_INDIAN_LANGUAGES: Language[] = [
  {
    code: 'hi',
    name: 'हिन्दी',
    englishName: 'Hindi',
    region: '',
    shortCode: 'HI',
    greeting: 'नमस्ते / जय श्री कृष्णा',
  },
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    region: 'Pan India / International',
    shortCode: 'EN',
    greeting: 'Welcome / Jai Shri Krishna',
  },
  {
    code: 'bn',
    name: 'বাংলা',
    englishName: 'Bengali',
    region: 'পশ্চিমবঙ্গ / ত্রিপুরা / অসম',
    shortCode: 'BN',
    greeting: 'নমস্কার / জয় শ্রী কৃষ্ণ',
  },
  {
    code: 'mr',
    name: 'मराठी',
    englishName: 'Marathi',
    region: 'महाराष्ट्र / गोवा',
    shortCode: 'MR',
    greeting: 'नमस्कार / जय श्री कृष्ण',
  },
  {
    code: 'te',
    name: 'తెలుగు',
    englishName: 'Telugu',
    region: 'ఆంధ్రప్రదేశ్ / తెలంగాణ',
    shortCode: 'TE',
    greeting: 'నమస్కారం / జై శ్రీ కృష్ణ',
  },
  {
    code: 'ta',
    name: 'தமிழ்',
    englishName: 'Tamil',
    region: 'தமிழ்நாடு / புதுச்சேரி',
    shortCode: 'TA',
    greeting: 'வணக்கம் / ஜெய் ஸ்ரீ கிருஷ்ணா',
  },
  {
    code: 'gu',
    name: 'ગુજરાતી',
    englishName: 'Gujarati',
    region: 'ગુજરાત / દમણ અને દીવ',
    shortCode: 'GU',
    greeting: 'નમસ્તે / જય શ્રી કૃષ્ણ',
  },
  {
    code: 'kn',
    name: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    region: 'ಕರ್ನಾಟಕ',
    shortCode: 'KN',
    greeting: 'ನಮಸ್ಕಾರ / ಜೈ ಶ್ರೀ ಕೃಷ್ಣ',
  },
  {
    code: 'ml',
    name: 'മലയാളം',
    englishName: 'Malayalam',
    region: 'കേരളം',
    shortCode: 'ML',
    greeting: 'നമസ്കാരം / ജയ് ശ്രീ കൃഷ്ണ',
  },
  {
    code: 'pa',
    name: 'ਪੰਜਾਬੀ',
    englishName: 'Punjabi',
    region: 'ਪੰਜਾਬ / ਦਿੱਲੀ / ਹਰਿਆਣਾ',
    shortCode: 'PA',
    greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ / ਜੈ ਸ਼੍ਰੀ ਕ੍ਰਿਸ਼ਨ',
  },
  {
    code: 'or',
    name: 'ଓଡ଼ିଆ',
    englishName: 'Odia',
    region: 'ଓଡ଼ିଶା',
    shortCode: 'OR',
    greeting: 'ନମସ୍କାର / ଜୟ ଶ୍ରୀ କୃଷ୍ଣ',
  },
  {
    code: 'as',
    name: 'অসমীয়া',
    englishName: 'Assamese',
    region: 'অসম / উত্তৰ-পূৰ্বাঞ্চল',
    shortCode: 'AS',
    greeting: 'নমস্কাৰ / জয় শ্ৰী কৃষ্ণ',
  },
];

export function getSavedLanguageCode(): string {
  try {
    const local = localStorage.getItem('ssd_selected_language');
    if (local) return local;

    const match = document.cookie.match(/googtrans=\/hi\/([a-z]{2})/i);
    if (match && match[1]) {
      return match[1].toLowerCase();
    }
  } catch (e) {
    // fallback
  }
  return 'hi';
}

export function applyGoogleTranslateLanguage(code: string) {
  try {
    localStorage.setItem('ssd_selected_language', code);

    if (code === 'hi') {
      // Clear cookie for original language
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      document.cookie =
        'googtrans=; path=/; domain=' +
        window.location.hostname +
        '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      const parts = window.location.hostname.split('.');
      if (parts.length > 1) {
        document.cookie =
          'googtrans=; path=/; domain=.' +
          parts.slice(-2).join('.') +
          '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      }
    } else {
      const cookieVal = `/hi/${code}`;
      document.cookie = `googtrans=${cookieVal}; path=/;`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;
      const parts = window.location.hostname.split('.');
      if (parts.length > 1) {
        document.cookie = `googtrans=${cookieVal}; path=/; domain=.${parts.slice(-2).join('.')};`;
      }
    }

    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event('change'));
    } else {
      // Reload if combo not yet mounted so cookie takes effect
      window.location.reload();
    }
  } catch (err) {
    console.error('Error applying language:', err);
  }
}
