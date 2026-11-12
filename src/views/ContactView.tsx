import React, { useState } from 'react';
import { siteConfig } from '../config/siteData';
import { Phone, Mail, MapPin, MessageCircle, Send, Check, ShieldCheck, QrCode, AlertCircle, Loader2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !message.trim()) {
      alert('कृपया नाम, मोबाइल एवं संदेश अवश्य भरें।');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('access_key', '400e28fe-032b-42ee-993a-2ebbd4d17640');
      formData.append('subject', `[सत्य सनातन धाम] संपर्क संदेश - ${name}`);
      formData.append('from_name', name);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'संदेश प्रेषित करने में त्रुटि हुई। कृपया पुनः प्रयास करें।');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'नेटवर्क समस्या। कृपया पुनः प्रयास करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'नमस्कार, मैं सत्य सनातन धाम के संबंध में जानकारी लेना चाहता/चाहती हूँ।'
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          संपर्क एवं संवाद
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सत्य सनातन धाम से संपर्क करें
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          दर्शन, सेवा सहयोग, अथवा किसी भी जानकारी हेतु संस्था से सीधे संपर्क करें
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E7D7C4] shadow-xs space-y-6">
            <h2 className="font-serif font-bold text-xl text-[#5B2A1B]">
              कार्यालय एवं संपर्क विवरण
            </h2>

            {/* Address */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#3E2B23]">
              <MapPin className="w-5 h-5 text-[#5B2A1B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#5B2A1B] font-serif text-sm">
                  स्थायी पता (Office Address):
                </strong>
                <p className="mt-1 leading-relaxed">
                  {siteConfig.address.hindiFull}
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  {siteConfig.address.englishFull}
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#3E2B23]">
              <Phone className="w-5 h-5 text-[#5B2A1B] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="block text-[#5B2A1B] font-serif text-sm">
                  दूरभाष संपर्क (Phone Numbers):
                </strong>
                {siteConfig.contact.phones.map((phone, idx) => (
                  <div key={idx}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#5B2A1B] font-medium"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#3E2B23]">
              <Mail className="w-5 h-5 text-[#5B2A1B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#5B2A1B] font-serif text-sm">
                  ईमेल पता (Email):
                </strong>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#5B2A1B] font-medium"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#265B33] hover:bg-[#194023] text-white font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#A3E635]" />
                <span>सीधे WhatsApp पर संदेश भेजें</span>
              </a>
            </div>
          </div>

          {/* Account Transparency Card */}
          <div className="bg-[#FAF0E4] p-5 rounded-xl border border-[#E7D7C4] text-xs text-[#3E2B23] space-y-1.5 leading-relaxed">
            <div className="flex items-center text-[#5B2A1B] font-bold text-sm">
              <ShieldCheck className="w-4 h-4 mr-1 text-[#265B33]" />
              <span>अधिकृत सेवा खाता</span>
            </div>
            <p>
              खाताधारक: <strong>{siteConfig.payment.accountHolder}</strong> ({siteConfig.payment.role})
            </p>
            <p>
              स्टेट बैंक ऑफ इंडिया (SBI) | खाता: <code className="font-mono text-[#5B2A1B]">{siteConfig.payment.accountNumber}</code>
            </p>
            <p>
              UPI: <code className="font-mono text-[#265B33]">{siteConfig.payment.upiId}</code>
            </p>
            <div className="pt-2 flex items-center space-x-3 bg-white p-2.5 rounded-lg border border-[#E7D7C4]">
              <img
                src="/Astha Singh UPI QR.png"
                alt="आस्था सिंह UPI QR Code"
                className="w-16 h-16 object-contain rounded border border-stone-200"
              />
              <div className="text-[11px] text-[#5B2A1B]">
                <strong className="block font-serif">श्रीमती आस्था सिंह</strong>
                <span className="text-stone-500 block text-[10px]">UPI QR कोड (PhonePe / GPay / Paytm)</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 italic pt-1">
              * {siteConfig.payment.disclaimer}
            </p>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#E7D7C4] shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">
                धन्यवाद। आपका संदेश प्राप्त हो गया है।
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                हमारी टीम शीघ्र ही आपके दिए गए संपर्क विवरण पर आपसे संवाद स्थापित करेगी।
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setMobile('');
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold rounded"
              >
                नया संदेश भेजें
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#5B2A1B]">
                  ऑनलाइन संदेश भेजें (Write to Us)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  कृपया अपना विवरण भरें, हम यथाशीघ्र संपर्क करेंगे।
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    आपका नाम (Name) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="उदा. अमित शर्मा"
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    मोबाइल नंबर (Mobile) *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    ईमेल (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amit@example.com"
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    विषय (Subject)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="उदा. सेवा समर्पण / दर्शन जानकारी"
                    className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                  संदेश / प्रश्न (Message) *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="अपना संदेश यहाँ लिखें..."
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] disabled:bg-[#5B2A1B]/60 text-[#FAF7F2] font-bold text-xs sm:text-sm rounded-md transition-colors shadow-sm inline-flex items-center space-x-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>भेजा जा रहा है...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>संदेश भेजें</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
