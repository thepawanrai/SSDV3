import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { siteConfig, sevasData } from '../config/siteData';
import { ShieldCheck, Heart, Copy, Check, CheckCircle2, ArrowRight, QrCode } from 'lucide-react';
import { CampaignGoalTracker } from '../components/CampaignGoalTracker';
import { submitToWeb3Forms } from '../utils/web3forms';

export const DonatePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSeva = searchParams.get('seva');
  const preAmount = searchParams.get('amount');

  const [selectedSeva, setSelectedSeva] = useState(preSeva || 'vriksharopan-seva');
  const [amount, setAmount] = useState(preAmount || '1001');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [utrNumber, setUtrNumber] = useState('');
  const [dedicatedTo, setDedicatedTo] = useState('');
  const [occasion, setOccasion] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preSeva) setSelectedSeva(preSeva);
    if (preAmount) setAmount(preAmount);
  }, [preSeva, preAmount]);

  const handleSelectCampaign = (sevaId: string, suggestedAmount?: number) => {
    setSelectedSeva(sevaId);
    if (suggestedAmount) {
      setAmount(suggestedAmount.toString());
    }
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !utrNumber) {
      alert('कृपया नाम, मोबाइल नंबर और यूटीआर अवश्य भरें।');
      return;
    }
    setIsSubmitting(true);
    try {
      await submitToWeb3Forms({
        formTitle: 'दान एवं सेवा समर्पण पुष्टि',
        senderName: fullName,
        senderEmail: email,
        data: {
          sevaId: selectedSeva,
          sevaName: currentSevaObj?.hindiName || selectedSeva,
          fullName,
          mobile,
          email,
          amount: `₹${amount}`,
          paymentMethod,
          paymentDate,
          utrNumber,
          dedicatedTo,
          occasion,
          city,
        },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentSevaObj = sevasData.find((s) => s.id === selectedSeva);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          पावन सेवा समर्पण
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सेवा सहयोग एवं समर्पण (Contribute)
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          सत्य सनातन धाम के किसी भी सेवा प्रकल्प में अपना स्वैच्छिक योगदान समर्पित करें
        </p>
      </div>

      {/* Visual Progress Bar & Goal Counter */}
      <CampaignGoalTracker
        selectedSevaId={selectedSeva}
        onSelectCampaignSeva={handleSelectCampaign}
      />

      {/* Main Grid: Step 1 Details & Step 2 Confirmation */}
      <div ref={formSectionRef} id="contribution-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
        {/* Left Column: Bank Account Credentials */}
        <div className="lg:col-span-5 space-y-6">
          {/* Seva selector */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7D7C4] shadow-xs space-y-4">
            <h3 className="font-serif font-bold text-base text-[#5B2A1B]">
              १. सेवा एवं राशि चयन
            </h3>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                सेवा का चयन करें:
              </label>
              <select
                value={selectedSeva}
                onChange={(e) => {
                  setSelectedSeva(e.target.value);
                  const sel = sevasData.find((s) => s.id === e.target.value);
                  if (sel && sel.amount) {
                    setAmount(sel.amount.toString());
                  }
                }}
                className="w-full p-2.5 bg-slate-50 border border-[#CBD5E1] rounded-md text-xs sm:text-sm text-[#2D2421]"
              >
                {sevasData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.hindiName} {s.amountDisplay ? `(${s.amountDisplay})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                सहयोग राशि (Contribution Amount ₹):
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-stone-500 font-bold">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-[#CBD5E1] rounded-md text-sm font-bold text-[#5B2A1B]"
                />
              </div>

              {/* Quick Preset Amount Chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['501', '1001', '2100', '5100', '11000', '21000'].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`px-2 py-1 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                      amount === preset
                        ? 'bg-[#5B2A1B] text-white'
                        : 'bg-slate-50 text-stone-700 border border-[#E7D7C4] hover:bg-[#F2ECE1]'
                    }`}
                  >
                    ₹{Number(preset).toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {currentSevaObj && (
              <div className="p-3 bg-[#FCFAF6] rounded border border-[#E7D7C4] text-xs text-stone-600">
                <p><strong>प्रयोजन:</strong> {currentSevaObj.purpose}</p>
                <Link
                  to={`/seva/${currentSevaObj.id}`}
                  className="text-[#5B2A1B] font-bold text-[11px] underline block mt-1"
                >
                  इस सेवा का विस्तृत पृष्ठ देखें →
                </Link>
              </div>
            )}
          </div>

          {/* Official Bank Account Details */}
          <div className="bg-white p-5 rounded-2xl border-2 border-[#5B2A1B]/30 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-[#265B33]">
              <ShieldCheck className="w-5 h-5 text-[#265B33]" />
              <h3 className="font-serif font-bold text-base text-[#5B2A1B]">
                २. अधिकृत बैंक खाता विवरण
              </h3>
            </div>

            <div className="space-y-1.5 text-xs">
              <div>
                <span className="text-stone-500 block text-[11px]">खाताधारक (Account Holder):</span>
                <strong className="text-sm text-[#2D2421] block">
                  {siteConfig.payment.accountHolder}
                </strong>
                <span className="text-[11px] text-[#793A27] font-medium block">
                  {siteConfig.payment.role}
                </span>
              </div>
              <div className="pt-1 border-t border-slate-200/80 space-y-1 text-stone-700">
                <p>
                  <strong>बैंक (Bank):</strong> <span className="font-semibold text-[#2D2421]">{siteConfig.payment.bank}</span>
                </p>
                <p>
                  <strong>शाखा (Branch):</strong> <span className="font-semibold text-[#2D2421]">{siteConfig.payment.branch}</span>
                </p>
              </div>
            </div>

            {/* Account & IFSC Copy Boxes */}
            <div className="space-y-2 pt-1 text-xs font-mono">
              <div className="p-2.5 bg-slate-50 rounded border border-[#E7D7C4] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 block font-sans">खाता संख्या:</span>
                  <span className="font-bold text-sm text-[#5B2A1B]">{siteConfig.payment.accountNumber}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.payment.accountNumber, 'acc')}
                  className="px-2.5 py-1 bg-white border border-[#CBD5E1] rounded text-[11px] font-sans font-semibold text-[#5B2A1B]"
                >
                  {copiedField === 'acc' ? 'कॉपी हुआ!' : 'कॉपी'}
                </button>
              </div>

              <div className="p-2.5 bg-slate-50 rounded border border-[#E7D7C4] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 block font-sans">IFSC:</span>
                  <span className="font-bold text-sm text-[#5B2A1B]">{siteConfig.payment.ifsc}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.payment.ifsc, 'ifsc')}
                  className="px-2.5 py-1 bg-white border border-[#CBD5E1] rounded text-[11px] font-sans font-semibold text-[#5B2A1B]"
                >
                  {copiedField === 'ifsc' ? 'कॉपी हुआ!' : 'कॉपी'}
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-[#DFB25A]/50 text-center space-y-2">
                <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-[#5B2A1B]">
                  <ShieldCheck className="w-4 h-4 text-[#265B33]" />
                  <span>सीधा बैंक अंतरण (Direct Bank Transfer)</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] text-left text-xs space-y-1">
                  <p className="font-semibold text-[#5B2A1B]">
                    NEFT / RTGS / IMPS / NetBanking
                  </p>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    उपरोक्त अधिकृत खाता संख्या एवं IFSC का उपयोग कर अपने बैंक ऐप, Google Pay, PhonePe अथवा नेटबैंकिंग से सीधे सेवा राशि प्रेषित करें।
                  </p>
                </div>
                <div className="p-2 bg-[#FEF3C7] rounded border border-[#DFB25A]/60 text-[11px] text-[#92400E] font-medium">
                  📢 नया आधिकारिक UPI QR कोड शीघ्र ही यहाँ उपलब्ध कराया जाएगा।
                </div>
              </div>
            </div>

            <p className="text-[10px] text-stone-500 italic leading-tight">
              * {siteConfig.payment.disclaimer}
            </p>
          </div>
        </div>

        {/* Right Column: Payment Confirmation Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E7D7C4] shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#5B2A1B]">
                धन्यवाद। आपकी सेवा जानकारी सफलतापूर्वक प्राप्त हो गई है।
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                हमारी टीम आपके द्वारा प्रेषित विवरण एवं यूटीआर की पुष्टि करेगी।
              </p>
              <div className="p-4 bg-slate-50 rounded-lg max-w-md mx-auto text-left text-xs space-y-1 border border-[#E7D7C4]">
                <p><strong>सेवा:</strong> {currentSevaObj?.hindiName}</p>
                <p><strong>राशि:</strong> ₹{amount}</p>
                <p><strong>UTR / ID:</strong> <code className="font-mono text-[#5B2A1B]">{utrNumber}</code></p>
                <p><strong>सेवाधारी:</strong> {fullName} ({mobile})</p>
                {dedicatedTo && <p><strong>संकल्प:</strong> {dedicatedTo} ({occasion})</p>}
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold rounded"
              >
                अन्य सेवा समर्पण विवरण दर्ज करें
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#5B2A1B]">
                  ३. भुगतान पुष्टि फॉर्म (Payment Confirmation Form)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  बैंक अथवा UPI से राशि भेजने के उपरांत यह विवरण भरें।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    सेवाधारी का पूरा नाम *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="उदा. विजय नारायण"
                    className="w-full p-2.5 bg-slate-50 border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    व्हाट्सएप मोबाइल नंबर *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-slate-50 border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vijay@example.com"
                    className="w-full p-2.5 bg-slate-50 border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    सहयोग राशि (Amount ₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-[#CBD5E1] rounded-md text-sm font-bold text-[#5B2A1B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    भुगतान माध्यम *
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-[#CBD5E1] rounded text-xs"
                  >
                    <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
                    <option value="NEFT/IMPS">NEFT / Net Banking / IMPS</option>
                    <option value="Cash/Cheque">चेक / शाखा में जमा</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                    भुगतान तिथि *
                  </label>
                  <input
                    type="date"
                    required
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                    className="w-full p-2 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-xs"
                  />
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
                    className="w-full p-2 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    किसके नाम समर्पित?
                  </label>
                  <input
                    type="text"
                    value={dedicatedTo}
                    onChange={(e) => setDedicatedTo(e.target.value)}
                    placeholder="उदा. पूज्य माता-पिता"
                    className="w-full p-2 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-xs"
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
                    placeholder="उदा. जन्मदिन / वर्षगांठ"
                    className="w-full p-2 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-xs"
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
                    placeholder="उदा. हमीरपुर / लखनऊ"
                    className="w-full p-2 bg-[#FAF7F2] border border-[#CBD5E1] rounded text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md transition-colors shadow-sm inline-flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
                <span>पुष्टि विवरण भेजें</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
