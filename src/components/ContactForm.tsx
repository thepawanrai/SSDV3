import React, { useState } from 'react';
import { Loader2, Check, AlertCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '400e28fe-032b-42ee-993a-2ebbd4d17640');
    formData.append('subject', '[सत्य सनातन धाम] वेबसाइट संपर्क प्रविष्टि');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? 'Success!' : (data.message || 'Error'));
    } catch (err: any) {
      setResult('Error: ' + (err?.message || 'Network Error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-xl border border-[#E7D7C4] shadow-xs">
      <div>
        <label className="block text-xs font-bold text-[#3E2B23] mb-1">नाम (Name) *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="आपका नाम"
          className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#3E2B23] mb-1">ईमेल (Email) *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#3E2B23] mb-1">संदेश (Message) *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="अपना संदेश यहाँ लिखें..."
          className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] disabled:bg-[#5B2A1B]/60 text-white font-bold text-sm rounded-md transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>सबमिट हो रहा है...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit</span>
          </>
        )}
      </button>

      {result && (
        <div
          className={`p-3 rounded-md text-xs flex items-center space-x-2 ${
            result.includes('Success')
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {result.includes('Success') ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>संदेश सफलतापूर्वक प्राप्त हुआ! हम शीघ्र संपर्क करेंगे। ({result})</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{result}</span>
            </>
          )}
        </div>
      )}
    </form>
  );
}
