/**
 * Web3Forms integration helper for capturing all form leads across Satya Sanatan Dham
 * Access Key: 400e28fe-032b-42ee-993a-2ebbd4d17640
 * Endpoint: https://api.web3forms.com/submit
 */

export const WEB3FORMS_ACCESS_KEY = '400e28fe-032b-42ee-993a-2ebbd4d17640';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface Web3FormsSubmitParams {
  formTitle: string;
  senderName?: string;
  senderEmail?: string;
  data: Record<string, string | number | boolean | null | undefined | File>;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function submitToWeb3Forms({
  formTitle,
  senderName,
  senderEmail,
  data,
}: Web3FormsSubmitParams): Promise<Web3FormsResponse> {
  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', `[सत्य सनातन धाम] ${formTitle} - ${senderName || 'नया प्रेषक'}`);
  formData.append('from_name', senderName || 'सत्य सनातन धाम वेबसाइट');
  
  if (senderEmail) {
    formData.append('email', senderEmail);
    formData.append('replyto', senderEmail);
  }

  // Append form payload
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null && value !== '') {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }
  }

  // Also record submission timestamp and origin
  formData.append('submitted_at', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  formData.append('source_url', window.location.href);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  } catch (err: any) {
    console.error('Web3Forms submission error:', err);
    return {
      success: false,
      message: err?.message || 'नेटवर्क त्रुटि, कृपया पुनः प्रयास करें।',
    };
  }
}
