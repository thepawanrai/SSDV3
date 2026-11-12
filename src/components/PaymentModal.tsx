import React, { useState } from 'react';
import { siteConfig, sevasData } from '../config/siteData';
import { X, Copy, Check, ShieldCheck, Heart, Upload, ArrowRight, QrCode } from 'lucide-react';
import { submitToWeb3Forms } from '../utils/web3forms';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSevaId?: string;
  preselectedAmount?: number;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  preselectedSevaId,
  preselectedAmount,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedSeva, setSelectedSeva] = useState<string>(
    preselectedSevaId || 'vriksharopan-seva'
  );
  const [customAmount, setCustomAmount] = useState<string>(
    preselectedAmount ? preselectedAmount.toString() : '500'
  );

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [utrNumber, setUtrNumber] = useState('');
  const [dedicatedTo, setDedicatedTo] = useState('');
  const [occasion, setOccasion] = useState('');
  const [city, setCity] = useState('');
  const [screenshotName, setScreenshotName] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'confirm'>('details');

  if (!isOpen) return null;

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

    // Send donation verification lead to Web3Forms
    submitToWeb3Forms({
      formTitle: 'त्वरित सेवा समर्पण व यूटीआर सूचना (Modal)',
      senderName: fullName,
      data: {
        sevaId: selectedSeva,
        sevaName: currentSevaObj?.hindiName || selectedSeva,
        fullName,
        mobile,
        amount: `₹${customAmount}`,
        paymentMethod,
        paymentDate,
        utrNumber,
        dedicatedTo,
        occasion,
        city,
      },
    }).catch((err) => console.error('Web3Forms modal error:', err));
  };

  const currentSevaObj = sevasData.find((s) => s.id === selectedSeva);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#E7D7C4] rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden text-[#2D2421] my-8 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#5B2A1B] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#3E1B10]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 flex-shrink-0 flex items-center justify-center">
              <img
                src="/ssd-logo-new.png"
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
                }}
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                सेवा सहयोग एवं समर्पण
              </h3>
              <p className="text-xs text-[#DFB25A]">
                {siteConfig.name} • {siteConfig.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#FAF7F2]/80 hover:text-white p-1 rounded-md hover:bg-[#3E1B10] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {submitted ? (
            <div className="py-10 px-4 text-center space-y-4 bg-white rounded-lg border border-[#E7D7C4] shadow-xs">
              <div className="w-16 h-16 bg-[#265B33]/10 text-[#265B33] rounded-full mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#5B2A1B]">
                धन्यवाद एवं साधुवाद!
              </h4>
              <p className="text-base text-[#3E2B23] max-w-lg mx-auto leading-relaxed">
                आपकी सेवा जानकारी सफलतापूर्वक प्राप्त हो गई है। हमारी टीम आपके द्वारा दी गई जानकारी व यूटीआर विवरण की पुष्टि करेगी।
              </p>
              <div className="p-4 bg-[#FAF7F2] rounded-md max-w-md mx-auto text-left text-xs text-[#3E2B23] space-y-1.5 border border-[#E7D7C4]">
                <p><strong>सेवा:</strong> {currentSevaObj?.hindiName || 'सत्य सनातन धाम सेवा'}</p>
                <p><strong>सहयोग राशि:</strong> ₹{customAmount}</p>
                <p><strong>यूटीआर / आईडी:</strong> <code className="font-mono text-[#5B2A1B]">{utrNumber}</code></p>
                <p><strong>सेवाधारी:</strong> {fullName} ({mobile})</p>
                {dedicatedTo && <p><strong>संकल्प / समर्पण:</strong> {dedicatedTo} ({occasion})</p>}
              </div>
              <p className="text-xs text-stone-500 italic">
                किसी भी सहायता के लिए संपर्क करें: {siteConfig.contact.primaryPhone}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] font-bold text-sm rounded-md hover:bg-[#3E1B10] transition-colors"
                >
                  समाप्त करें
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Tab Selector */}
              <div className="flex border-b border-[#E7D7C4] space-x-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`pb-2.5 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                    activeTab === 'details'
                      ? 'border-[#5B2A1B] text-[#5B2A1B]'
                      : 'border-transparent text-stone-500 hover:text-[#5B2A1B]'
                  }`}
                >
                  १. बैंक एवं यूपीआई विवरण (Step 1)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('confirm')}
                  className={`pb-2.5 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                    activeTab === 'confirm'
                      ? 'border-[#5B2A1B] text-[#5B2A1B]'
                      : 'border-transparent text-stone-500 hover:text-[#5B2A1B]'
                  }`}
                >
                  २. भुगतान पुष्टि फॉर्म (Step 2)
                </button>
              </div>

              {activeTab === 'details' ? (
                <div className="space-y-6">
                  {/* Seva selection preview */}
                  <div className="bg-[#FCFAF6] border border-[#E7D7C4] p-4 rounded-lg">
                    <label className="block text-xs font-bold text-[#5B2A1B] uppercase tracking-wide mb-1.5">
                      सेवा का चयन करें (Choose Seva)
                    </label>
                    <select
                      value={selectedSeva}
                      onChange={(e) => {
                        setSelectedSeva(e.target.value);
                        const sel = sevasData.find((s) => s.id === e.target.value);
                        if (sel && sel.amount) {
                          setCustomAmount(sel.amount.toString());
                        }
                      }}
                      className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                    >
                      {sevasData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.hindiName} {s.amountDisplay ? `(${s.amountDisplay})` : ''}
                        </option>
                      ))}
                    </select>

                    <div className="mt-3 flex items-center space-x-3">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-stone-600 mb-1">
                          सहयोग राशि (Contribution Amount ₹)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-stone-500 font-bold">₹</span>
                          <input
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 bg-white border border-[#CBD5E1] rounded-md text-sm font-bold text-[#5B2A1B]"
                            placeholder="राशि दर्ज करें"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Official Bank Account Information */}
                  <div className="bg-white border-2 border-[#5B2A1B]/30 rounded-xl p-5 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E7D7C4]">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-5 h-5 text-[#265B33]" />
                        <span className="font-serif font-bold text-base text-[#5B2A1B]">
                          अधिकृत बैंक खाता विवरण
                        </span>
                      </div>
                      <span className="text-xs bg-[#FAF7F2] text-[#793A27] px-2.5 py-1 rounded border border-[#E7D7C4] font-medium">
                        भारतीय स्टेट बैंक
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                      <div className="space-y-1">
                        <span className="text-stone-500 block">खाताधारक का नाम (Account Holder):</span>
                        <div className="font-bold text-sm text-[#2D2421]">
                          {siteConfig.payment.accountHolder}
                        </div>
                        <span className="text-[11px] text-[#793A27] block font-medium">
                          {siteConfig.payment.role}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-stone-500 block">बैंक एवं शाखा (Bank &amp; Branch):</span>
                        <div className="font-bold text-sm text-[#2D2421]">
                          {siteConfig.payment.bank}
                        </div>
                        <span className="text-[11px] text-stone-600 block">
                          {siteConfig.payment.branch}
                        </span>
                      </div>
                    </div>

                    {/* Account Number & IFSC Copy Rows */}
                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between p-3 bg-[#FAF7F2] rounded-lg border border-[#E7D7C4]">
                        <div>
                          <span className="text-[11px] text-stone-500 block">खाता संख्या (Account No):</span>
                          <span className="font-mono text-base font-bold text-[#5B2A1B] tracking-wider">
                            {siteConfig.payment.accountNumber}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(siteConfig.payment.accountNumber, 'acc')}
                          className="px-3 py-1.5 bg-white border border-[#CBD5E1] rounded text-xs font-semibold text-[#5B2A1B] hover:bg-[#ECE4D6] transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          {copiedField === 'acc' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-700">कॉपी हुआ!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>कॉपी करें</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-[#FAF7F2] rounded-lg border border-[#E7D7C4]">
                        <div>
                          <span className="text-[11px] text-stone-500 block">IFSC Code:</span>
                          <span className="font-mono text-base font-bold text-[#5B2A1B] tracking-wider">
                            {siteConfig.payment.ifsc}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(siteConfig.payment.ifsc, 'ifsc')}
                          className="px-3 py-1.5 bg-white border border-[#CBD5E1] rounded text-xs font-semibold text-[#5B2A1B] hover:bg-[#ECE4D6] transition-colors inline-flex items-center space-x-1 cursor-pointer"
                        >
                          {copiedField === 'ifsc' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-700">कॉपी हुआ!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>कॉपी करें</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Direct Bank Transfer Row */}
                      <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DFB25A]/50 space-y-2">
                        <div className="flex items-center space-x-2 text-[#5B2A1B]">
                          <ShieldCheck className="w-4 h-4 text-[#265B33]" />
                          <h4 className="font-serif font-bold text-sm">
                            सीधा बैंक अंतरण (Direct Bank Transfer)
                          </h4>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">
                          उपरोक्त अधिकृत खाता संख्या (<strong className="font-mono text-[#5B2A1B]">{siteConfig.payment.accountNumber}</strong>) एवं IFSC (<strong className="font-mono text-[#5B2A1B]">{siteConfig.payment.ifsc}</strong>) का उपयोग कर अपने बैंक ऐप, नेट बैंकिंग, अथवा किसी भी बैंकिंग माध्यम से NEFT / RTGS / IMPS द्वारा सीधे सेवा राशि समर्पित करें।
                        </p>
                        <div className="p-2.5 bg-[#FEF3C7] rounded border border-[#DFB25A]/60 text-xs text-[#92400E] font-medium">
                          📢 <strong>सूचना:</strong> नया आधिकारिक UPI QR कोड शीघ्र ही यहाँ उपलब्ध कराया जाएगा।
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer box as specified */}
                    <div className="p-3 bg-[#FCFAF6] border border-[#E7D7C4] rounded text-xs text-[#793A27] leading-relaxed">
                      <strong>महत्वपूर्ण सूचना:</strong> {siteConfig.payment.disclaimer}
                    </div>
                  </div>

                  {/* Proceed to Step 2 Button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveTab('confirm')}
                      className="px-6 py-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md transition-all inline-flex items-center space-x-2 cursor-pointer shadow-sm"
                    >
                      <span>भुगतान उपरांत विवरण दर्ज करें</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Payment Confirmation Form */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="bg-[#FAF0E4] p-3 rounded-md border border-[#E7D7C4] text-xs text-[#5B2A1B] leading-relaxed">
                    कृपया बैंक अथवा यूपीआई से भुगतान करने के उपरांत यह फॉर्म भरें ताकि आपके सेवा सहयोग का अधिकृत लेखा दर्ज किया जा सके।
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        पूरा नाम (Full Name) *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="उदा. राजेश कुमार"
                        className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        मोबाइल नंबर (WhatsApp Mobile) *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        ईमेल पता (Email)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@example.com"
                        className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        सहयोग राशि (Amount Paid ₹) *
                      </label>
                      <input
                        type="number"
                        required
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full p-2.5 bg-white border border-[#CBD5E1] rounded-md text-sm font-bold text-[#5B2A1B] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        भुगतान माध्यम (Method) *
                      </label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs"
                      >
                        <option value="UPI">UPI (GPay / PhonePe / Paytm)</option>
                        <option value="NEFT/IMPS">NEFT / Net Banking / IMPS</option>
                        <option value="Cash/Cheque">चेक / शाखा में जमा</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3E2B23] mb-1">
                        भुगतान तिथि (Date) *
                      </label>
                      <input
                        type="date"
                        required
                        value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)}
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs"
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
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-1">
                        किसके नाम समर्पित (Dedicated To)
                      </label>
                      <input
                        type="text"
                        value={dedicatedTo}
                        onChange={(e) => setDedicatedTo(e.target.value)}
                        placeholder="उदा. पूज्य माता-पिता की स्मृति में"
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs"
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
                        placeholder="उदा. जन्मदिन / विवाह वर्षगांठ"
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-1">
                        शहर / निवास (City/State)
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="उदा. लखनऊ / कानपुर"
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-md text-xs"
                      />
                    </div>
                  </div>

                  {/* Screenshot upload simulation */}
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      भुगतान का स्क्रीनशॉट / रसीद (Optional Screenshot)
                    </label>
                    <label className="flex items-center justify-center p-3 border-2 border-dashed border-[#CBD5E1] hover:border-[#5B2A1B] rounded-lg cursor-pointer bg-white transition-colors">
                      <Upload className="w-4 h-4 text-stone-400 mr-2" />
                      <span className="text-xs text-stone-600">
                        {screenshotName || 'स्क्रीनशॉट फाइल चुनें (JPG, PNG)'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setScreenshotName(e.target.files[0].name);
                          }
                        }}
                      />
                    </label>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="text-xs text-stone-600 hover:text-[#5B2A1B] underline cursor-pointer"
                    >
                      ← बैंक विवरण पुनः देखें
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-bold text-sm rounded-md transition-colors shadow-sm inline-flex items-center space-x-1.5 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
                      <span>पुष्टि विवरण भेजें</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
