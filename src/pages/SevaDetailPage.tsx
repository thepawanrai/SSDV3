import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { sevasData, siteConfig } from '../config/siteData';
import {
  Heart,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  MessageCircle,
  Share2,
  Calendar,
  AlertCircle,
  QrCode
} from 'lucide-react';
import { submitToWeb3Forms } from '../utils/web3forms';

export const SevaDetailPage: React.FC = () => {
  const { sevaId } = useParams<{ sevaId: string }>();
  const navigate = useNavigate();

  const seva = sevasData.find((s) => s.id === sevaId);

  // Contribution State
  const defaultAmount = seva?.amount ? seva.amount.toString() : '1100';
  const [customAmount, setCustomAmount] = useState(defaultAmount);
  const [dedicatedTo, setDedicatedTo] = useState('');
  const [occasion, setOccasion] = useState('');

  // Confirmation Form State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [utrNumber, setUtrNumber] = useState('');
  const [city, setCity] = useState('');
  const [screenshotName, setScreenshotName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!seva) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4 font-sans">
        <AlertCircle className="w-12 h-12 text-[#B34909] mx-auto" />
        <h1 className="font-serif text-3xl font-bold text-[#5B2A1B]">
          सेवा विवरण प्राप्त नहीं हुआ
        </h1>
        <p className="text-stone-600 text-sm">
          यह सेवा पृष्ठ उपलब्ध नहीं है अथवा इसका पता बदल दिया गया है।
        </p>
        <Link
          to="/seva"
          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#5B2A1B] text-white text-sm font-bold rounded-md hover:bg-[#3E1B10]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>संपूर्ण सेवा सूची पर जाएं</span>
        </Link>
      </div>
    );
  }

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !utrNumber) {
      alert('कृपया नाम, मोबाइल नंबर और यूटीआर (Transaction ID) अवश्य भरें।');
      return;
    }
    setSubmitted(true);

    // Send seva confirmation to Web3Forms
    submitToWeb3Forms({
      formTitle: `सेवा समर्पण पुष्टि - ${seva?.hindiName || 'पावन सेवा'}`,
      senderName: fullName,
      data: {
        sevaId: seva?.id || 'seva',
        sevaName: seva?.hindiName || 'पावन सेवा',
        fullName,
        mobile,
        amount: `₹${customAmount}`,
        paymentMethod,
        paymentDate,
        utrNumber,
        dedicatedTo,
        occasion,
      },
    }).catch((err) => console.error('Web3Forms seva error:', err));
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `सत्य सनातन धाम की पावन सेवा: ${seva.hindiName} (${siteConfig.contact.mainWebsite}seva/${seva.id})`
  )}`;

  const whatsappDirectQuery = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `नमस्कार, मैं सत्य सनातन धाम की '${seva.hindiName}' के संबंध में सेवा सहयोग करना चाहता/चाहती हूँ।`
  )}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 font-sans">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <Link
          to="/seva"
          className="inline-flex items-center space-x-1.5 text-[#5B2A1B] hover:text-[#793A27] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>सभी सेवाएँ (All Sevas)</span>
        </Link>

        <div className="flex items-center space-x-2">
          <span>{seva.categoryHindi}</span>
          <span>/</span>
          <span className="text-[#5B2A1B] font-bold">{seva.hindiName}</span>
        </div>
      </div>

      {/* Main Seva Banner / Header Card */}
      <div className="bg-white rounded-2xl border border-[#E7D7C4] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5 bg-[#FAF0E4] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E7D7C4]">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#793A27] bg-white px-2.5 py-1 rounded shadow-2xs inline-block">
              {seva.categoryHindi}
            </span>

            <div className="w-20 h-20 rounded-full bg-white p-2 border border-[#E7D7C4] flex items-center justify-center shadow-xs">
              <img
                src="/ssd-logo-new.png"
                alt="Satya Sanatan Dham Crest"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
                }}
              />
            </div>

            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
                {seva.hindiName}
              </h1>
              <p className="text-xs text-stone-500 font-sans">
                {seva.englishName}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E7D7C4]/70 space-y-2">
            <span className="text-xs text-stone-500 block">निर्धारित सहयोग राशि:</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B]">
              {seva.amountDisplay || 'योगदान राशि के लिए संपर्क करें'}
            </div>
            {seva.amount && (
              <p className="text-[11px] text-stone-500 italic">
                * आप अपनी इच्छानुसार अधिक राशि का भी समर्पण कर सकते हैं।
              </p>
            )}
          </div>
        </div>

        {/* Right Details Column */}
        <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="font-serif font-bold text-lg text-[#5B2A1B] mb-1">
                सेवा का पावन महत्व एवं विवरण
              </h2>
              <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed">
                {seva.description}
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E7D7C4] space-y-1.5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#793A27]">
                यह सेवा किसमें सहायक होगी? (Purpose)
              </h3>
              <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed">
                {seva.purpose}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 bg-white rounded border border-[#E7D7C4]">
                <span className="text-stone-500 block text-[11px]">आयोजन केंद्र:</span>
                <strong className="text-[#5B2A1B]">सत्य सनातन धाम</strong>
              </div>
              <div className="p-3 bg-white rounded border border-[#E7D7C4]">
                <span className="text-stone-500 block text-[11px]">स्थान:</span>
                <strong className="text-[#5B2A1B]">पासुन, मौदहा (हमीरपुर)</strong>
              </div>
            </div>
          </div>

          {/* Social Share & Direct WhatsApp CTAs */}
          <div className="pt-4 border-t border-[#E7D7C4] flex flex-wrap items-center justify-between gap-3">
            <a
              href={whatsappDirectQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#265B33] hover:bg-[#194023] text-white text-xs font-bold rounded flex items-center space-x-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#A3E635]" />
              <span>WhatsApp पर जानकारी लें</span>
            </a>

            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-white border border-[#CBD5E1] text-[#3E2B23] text-xs font-semibold rounded hover:bg-stone-50 flex items-center space-x-1"
            >
              <Share2 className="w-3.5 h-3.5 text-stone-500" />
              <span>सेवा साझा करें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Step 1 & Step 2 Contribution & Payment Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-sm space-y-8">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#793A27] mb-2 sm:mb-2.5">
            सेवा समर्पण प्रक्रिया
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal pt-1">
            इस सेवा में अपना पावन योगदान करें
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            १. बैंक अथवा यूपीआई के माध्यम से सहयोग राशि प्रेषित करें → २. नीचे दिए फॉर्म में पुष्टि विवरण दर्ज करें
          </p>
        </div>

        {/* Step 1: Bank & UPI Credentials */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-[#E7D7C4] space-y-4">
          <div className="flex items-center space-x-2 text-[#265B33]">
            <ShieldCheck className="w-5 h-5 text-[#265B33]" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B]">
              चरण १: अधिकृत बैंक एवं UPI विवरण
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <span className="text-stone-500 block">खाताधारक का नाम (Account Holder):</span>
              <strong className="text-sm text-[#2D2421] block">
                {siteConfig.payment.accountHolder}
              </strong>
              <span className="text-[11px] text-[#793A27]">{siteConfig.payment.role}</span>
            </div>

            <div>
              <span className="text-stone-500 block">बैंक एवं शाखा:</span>
              <strong className="text-sm text-[#2D2421] block">
                {siteConfig.payment.bank}
              </strong>
              <span className="text-[11px] text-stone-600">{siteConfig.payment.branch}</span>
            </div>
          </div>

          {/* Interactive Copy Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 block">खाता संख्या:</span>
                <span className="font-mono text-sm font-bold text-[#5B2A1B]">
                  {siteConfig.payment.accountNumber}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(siteConfig.payment.accountNumber, 'acc')}
                className="px-2 py-1 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-[11px] font-semibold text-[#5B2A1B] cursor-pointer"
              >
                {copiedField === 'acc' ? 'कॉपी हुआ!' : 'कॉपी'}
              </button>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 block">IFSC Code:</span>
                <span className="font-mono text-sm font-bold text-[#5B2A1B]">
                  {siteConfig.payment.ifsc}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(siteConfig.payment.ifsc, 'ifsc')}
                className="px-2 py-1 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-[11px] font-semibold text-[#5B2A1B] cursor-pointer"
              >
                {copiedField === 'ifsc' ? 'कॉपी हुआ!' : 'कॉपी'}
              </button>
            </div>

            <div className="p-3 bg-[#E2EEDF] rounded-lg border border-[#265B33]/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#194023] font-medium block">UPI ID:</span>
                <span className="font-mono text-sm font-bold text-[#194023]">
                  {siteConfig.payment.upiId}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(siteConfig.payment.upiId, 'upi')}
                className="px-2 py-1 bg-white border border-[#265B33]/40 rounded text-[11px] font-semibold text-[#194023] cursor-pointer"
              >
                {copiedField === 'upi' ? 'कॉपी हुआ!' : 'कॉपी UPI'}
              </button>
            </div>

            {/* Astha Singh Official UPI QR Card */}
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#DFB25A]/40 text-center space-y-2">
              <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-[#5B2A1B]">
                <QrCode className="w-3.5 h-3.5 text-[#C18C3B]" />
                <span>स्कैन करके भुगतान करें (UPI QR)</span>
              </div>
              <div className="inline-block p-2 bg-white rounded-lg border border-[#E7D7C4] shadow-2xs">
                <img
                  src="/Astha Singh UPI QR.png"
                  alt="आस्था सिंह UPI QR Code"
                  className="w-32 h-32 object-contain mx-auto rounded"
                />
                <p className="mt-1 text-[11px] font-bold text-[#194023]">
                  श्रीमती आस्था सिंह (सचिव एवं कोषाध्यक्ष)
                </p>
                <p className="text-[10px] font-mono text-stone-600">
                  {siteConfig.payment.upiId}
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-stone-500 italic">
            * {siteConfig.payment.disclaimer}
          </p>
        </div>

        {/* Step 2: Payment Confirmation Form */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-2 text-[#5B2A1B]">
            <CheckCircle2 className="w-5 h-5 text-[#265B33]" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B]">
              चरण २: सेवा समर्पण पुष्टि फॉर्म
            </h3>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4 bg-[#FAF7F2] rounded-xl border border-[#E7D7C4]">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#5B2A1B]">
                धन्यवाद। आपकी सेवा जानकारी सफलतापूर्वक प्राप्त हो गई है।
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
                हमारी टीम आपके द्वारा प्रेषित यूटीआर विवरण की पुष्टि करेगी।
              </p>
              <div className="p-4 bg-white rounded max-w-md mx-auto text-left text-xs space-y-1 border border-[#E7D7C4]">
                <p><strong>सेवा:</strong> {seva.hindiName}</p>
                <p><strong>राशि:</strong> ₹{customAmount}</p>
                <p><strong>UTR संख्या:</strong> <code className="font-mono text-[#5B2A1B]">{utrNumber}</code></p>
                <p><strong>सेवाधारी:</strong> {fullName} ({mobile})</p>
                {dedicatedTo && <p><strong>समर्पित:</strong> {dedicatedTo} ({occasion})</p>}
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 bg-[#5B2A1B] text-white text-xs font-bold rounded"
              >
                पुनः अन्य विवरण दर्ज करें
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 bg-[#FAF7F2] p-6 rounded-xl border border-[#E7D7C4]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    सेवाधारी का पूरा नाम (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="उदा. रमेश चंद्र"
                    className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    व्हाट्सएप मोबाइल नंबर (Mobile) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    सहयोग राशि (Amount ₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs font-bold text-[#5B2A1B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    भुगतान माध्यम (Method) *
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs"
                  >
                    <option value="UPI">UPI (GPay, PhonePe, Paytm)</option>
                    <option value="NEFT/IMPS">NEFT / Net Banking / IMPS</option>
                    <option value="Cash/Cheque">चेक / शाखा में जमा</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    UTR / Transaction ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    placeholder="उदा. 429384729104"
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    समर्पित (Dedicated To)
                  </label>
                  <input
                    type="text"
                    value={dedicatedTo}
                    onChange={(e) => setDedicatedTo(e.target.value)}
                    placeholder="उदा. पूज्य माता-पिता"
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    पावन अवसर (Occasion)
                  </label>
                  <input
                    type="text"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="उदा. जन्मदिन / पुण्यतिथि"
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    शहर / राज्य (City/State)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="उदा. लखनऊ"
                    className="w-full p-2 bg-white border border-[#CBD5E1] rounded text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded transition-colors shadow-sm inline-flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
                <span>पुष्टि विवरण प्रेषित करें</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
