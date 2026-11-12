import React, { useState, useRef } from 'react';
import { siteConfig } from '../config/siteData';
import {
  ShieldCheck,
  CheckCircle2,
  Upload,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Printer,
  Share2,
  Sparkles,
  FileText,
  AlertCircle,
  X,
  BadgeCheck,
  Check,
  Layers,
} from 'lucide-react';
import { submitToWeb3Forms } from '../utils/web3forms';

interface MembershipViewProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
}

export const MembershipView: React.FC<MembershipViewProps> = () => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('पुरुष');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [stateName, setStateName] = useState('उत्तर प्रदेश');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectedSevas, setSelectedSevas] = useState<string[]>([
    'वृक्षारोपण महाअभियान',
    'गौ सेवा महाअभियान',
  ]);
  const [availability, setAvailability] = useState('सप्ताहांत (शनिवार व रविवार)');
  const [specialSkills, setSpecialSkills] = useState('');
  const [pledgeAccepted, setPledgeAccepted] = useState(false);

  // Validation & UI State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registeredCard, setRegisteredCard] = useState<any>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cardPrintRef = useRef<HTMLDivElement | null>(null);

  // Seva options list
  const sevaOptions = [
    { id: 'vriksh', label: 'वृक्षारोपण महाअभियान', desc: 'पर्यावरण संरक्षण, पौधे लगाना व देखरेख' },
    { id: 'gau', label: 'गौ सेवा महाअभियान', desc: 'गौशाला संवर्धन, चारा-पानी व चिकित्सा सेवा' },
    { id: 'mandir', label: 'मंदिर निर्माण व प्रबंधन', desc: 'प्रत्येक जिले में भव्य मंदिर स्थापना सहयोग' },
    { id: 'anna', label: 'अन्नदान महाअभियान', desc: 'अक्षय भंडारा व्यवस्था व भोजन वितरण' },
    { id: 'gurukul', label: 'गुरुकुल व बाल संस्कार', desc: 'वैदिक शिक्षा, बच्चों को संस्कार एवं ज्ञान' },
    { id: 'nasha', label: 'नशा मुक्ति अभियान', desc: 'युवा जागरूकता, संगोष्ठी व परामर्श' },
    { id: 'prachar', label: 'सोशल मीडिया व प्रचार', desc: 'डिजिटल सेवा, लेख, फोटोग्राफी व जनसंपर्क' },
    { id: 'chikitsa', label: 'प्राथमिक चिकित्सा व सहायता', desc: 'शिविर सहयोग एवं आपदा राहत' },
  ];

  // Indian States
  const indianStates = [
    'उत्तर प्रदेश',
    'मध्य प्रदेश',
    'राजस्थान',
    'बिहार',
    'उत्तराखंड',
    'हरियाणा',
    'दिल्ली (NCR)',
    'महाराष्ट्र',
    'गुजरात',
    'झारखंड',
    'छत्तीसगढ़',
    'पंजाब',
    'पश्चिम बंगाल',
    'ओडिशा',
    'अन्य राज्य',
  ];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: 'फोटो का आकार 5MB से कम होना चाहिए' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.photo;
          return newErrors;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleSeva = (sevaLabel: string) => {
    setSelectedSevas((prev) =>
      prev.includes(sevaLabel)
        ? prev.filter((item) => item !== sevaLabel)
        : [...prev, sevaLabel]
    );
  };

  // Format Aadhaar number with auto spacing (XXXX XXXX XXXX)
  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 12);
    setAadhaar(rawVal);
    if (errors.aadhaar) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.aadhaar;
        return next;
      });
    }
  };

  const formatAadhaarDisplay = (val: string) => {
    if (!val) return '';
    const parts = [];
    for (let i = 0; i < val.length; i += 4) {
      parts.push(val.slice(i, i + 4));
    }
    return parts.join(' ');
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'कृपया अपना पूरा नाम दर्ज करें';
    }

    if (!guardianName.trim()) {
      newErrors.guardianName = 'कृपया पिता या पति का नाम दर्ज करें';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'कृपया मान्य १० अंकों का मोबाइल नंबर दर्ज करें';
    }

    // Aadhaar is strictly MANDATORY (12 digits)
    const cleanAadhaar = aadhaar.replace(/\D/g, '');
    if (!cleanAadhaar) {
      newErrors.aadhaar = 'आधार संख्या अनिवार्य है (Mandatory)';
    } else if (cleanAadhaar.length !== 12) {
      newErrors.aadhaar = 'कृपया सही १२ अंकों की आधार संख्या दर्ज करें';
    }

    if (!district.trim()) {
      newErrors.district = 'कृपया अपना जिला दर्ज करें';
    }

    if (!address.trim()) {
      newErrors.address = 'कृपया अपना पूरा पता दर्ज करें';
    }

    if (!pincode.trim() || pincode.replace(/\D/g, '').length !== 6) {
      newErrors.pincode = 'कृपया सही ६ अंकों का पिनकोड दर्ज करें';
    }

    if (selectedSevas.length === 0) {
      newErrors.sevas = 'कृपया कम से कम एक सेवा क्षेत्र चुनें';
    }

    if (!pledgeAccepted) {
      newErrors.pledge = 'कृपया सेवादार संकल्प स्वीकार करें';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 380, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate registration generation
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const cardData = {
        id: `SSD-SEWA-${new Date().getFullYear()}-${randomNum}`,
        fullName,
        guardianName,
        gender,
        dob: dob || 'उपलब्ध नहीं',
        phone,
        email: email || 'उपलब्ध नहीं',
        // Mask Aadhaar for privacy on ID display
        aadhaarMasked: `XXXX XXXX ${aadhaar.slice(-4)}`,
        stateName,
        district,
        address,
        pincode,
        sevas: selectedSevas,
        availability,
        photo: photoPreview,
        issueDate: new Date().toLocaleDateString('hi-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };

      setRegisteredCard(cardData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Send sewadaar registration lead to Web3Forms
      submitToWeb3Forms({
        formTitle: 'निःशुल्क सेवादार सदस्यता पंजीकरण (Volunteering Membership)',
        senderName: fullName,
        senderEmail: email || undefined,
        data: {
          membershipId: cardData.id,
          fullName,
          guardianName,
          gender,
          dob: dob || 'उपलब्ध नहीं',
          phone,
          email: email || 'उपलब्ध नहीं',
          aadhaarMasked: `XXXX XXXX ${aadhaar.slice(-4)}`,
          stateName,
          district,
          address,
          pincode,
          selectedSevas: selectedSevas.join(', '),
          availability,
          hasPhoto: photoPreview ? 'हाँ (संलग्न)' : 'नहीं',
        },
      }).catch((err) => console.error('Web3Forms registration error:', err));
    }, 900);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'सत्य सनातन धाम सेवादार पहचान पत्र',
          text: `जय श्री कृष्णा! मैं सत्य सनातन धाम का अधिकृत सेवादार बन चुका हूँ (सदस्यता क्रमांक: ${registeredCard?.id})। आप भी निःशुल्क सेवादार बनकर धर्म सेवा में जुड़ें!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `जय श्री कृष्णा! मैं सत्य सनातन धाम का अधिकृत सेवादार बन चुका हूँ (सदस्यता क्रमांक: ${registeredCard?.id})। निःशुल्क सेवादार बनने हेतु यहाँ जाएँ: ${window.location.href}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRegisteredCard(null);
    setFullName('');
    setGuardianName('');
    setDob('');
    setPhone('');
    setEmail('');
    setAadhaar('');
    setPhotoPreview(null);
    setDistrict('');
    setTehsil('');
    setAddress('');
    setPincode('');
    setPledgeAccepted(false);
    setErrors({});
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#3E1B10] via-[#5B2A1B] to-[#793A27] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#DFB25A]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge: 100% Free Volunteer Membership */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-md bg-black/25 border border-white/20 text-[#DFB25A] text-xs sm:text-sm font-semibold mb-4">
            <span>१००% निःशुल्क सेवादार सदस्यता (Zero Fee Volunteering)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#FAF7F2] mb-4">
            सत्य सनातन धाम सेवादार पंजीकरण
          </h1>

          <p className="text-sm sm:text-base text-[#FAF7F2]/90 max-w-2xl mx-auto font-sans leading-relaxed">
            सत्य सनातन धाम में सेवादार सदस्यता पूर्णतः <span className="text-[#DFB25A] font-bold">निःशुल्क</span> है।
            हमारा लक्ष्य भारतवर्ष के प्रत्येक राज्य और प्रत्येक जिले में धर्म, गौ, प्रकृति एवं मंदिर सेवा हेतु समर्पित सेवादारों का विराट परिवार बनाना है।
          </p>

          {/* Core Values Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-lg bg-black/25 border border-white/10 backdrop-blur-xs">
              <p className="text-[#DFB25A] text-xs font-bold font-serif">शून्य शुल्क</p>
              <p className="text-[11px] text-white/80">कोई पंजीकरण शुल्क या चंदा नहीं</p>
            </div>
            <div className="p-3 rounded-lg bg-black/25 border border-white/10 backdrop-blur-xs">
              <p className="text-[#DFB25A] text-xs font-bold font-serif">पहचान पत्र</p>
              <p className="text-[11px] text-white/80">आधिकारिक डिजिटल सेवादार कार्ड</p>
            </div>
            <div className="p-3 rounded-lg bg-black/25 border border-white/10 backdrop-blur-xs">
              <p className="text-[#DFB25A] text-xs font-bold font-serif">आधार सत्यापन</p>
              <p className="text-[11px] text-white/80">सुरक्षित व प्रामाणिक सेवादार मंडल</p>
            </div>
            <div className="p-3 rounded-lg bg-black/25 border border-white/10 backdrop-blur-xs">
              <p className="text-[#DFB25A] text-xs font-bold font-serif">६ महाअभियान</p>
              <p className="text-[11px] text-white/80">रुचि अनुसार सेवा का पावन अवसर</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* If successfully registered, show the Digital Sewadaar ID Card & Confirmation */}
        {isSubmitted && registeredCard ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Success notification banner */}
            <div className="bg-[#EAF5EC] border-2 border-[#265B33]/40 rounded-2xl p-6 sm:p-8 text-center shadow-md">
              <div className="w-16 h-16 bg-[#265B33] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#194023] mb-2">
                बधाई हो! आप सत्य सनातन धाम के अधिकृत सेवादार बन चुके हैं
              </h2>
              <p className="text-sm sm:text-base text-[#2E5E3A] max-w-2xl mx-auto leading-relaxed">
                आपका सेवादार पंजीकरण सफलतापूर्वक संपन्न हो चुका है। नीचे आपका आधिकारिक डिजिटल सेवादार पहचान पत्र तैयार है। इसे सुरक्षित रखें अथवा प्रिंट करें।
              </p>
              <p className="mt-3 text-xs font-bold text-[#5B2A1B] bg-white/70 py-1.5 px-4 rounded-full inline-block border border-[#265B33]/20">
                पंजीकरण संख्या (Member ID): <span className="font-mono text-sm">{registeredCard.id}</span>
              </p>
            </div>

            {/* Printable Digital Sewadaar Card */}
            <div className="flex flex-col items-center">
              <div
                ref={cardPrintRef}
                className="w-full max-w-xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F3EADA] rounded-2xl border-2 border-[#5B2A1B] shadow-2xl overflow-hidden relative"
              >
                {/* Decorative header */}
                <div className="bg-[#481E13] text-[#FAF7F2] p-4 sm:p-5 border-b-2 border-[#DFB25A] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/ssd-logo-new.png"
                      alt="Satya Sanatan Dham Crest"
                      className="w-12 h-12 rounded-full bg-white p-0.5 border border-[#DFB25A]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
                      }}
                    />
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#DFB25A] leading-tight">
                        सत्य सनातन धाम
                      </h3>
                      <p className="text-[11px] text-white/80 tracking-wide">
                        श्री श्री राधा कृष्ण बिहारी जी मंदिर • सेवादार पहचान पत्र
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#DFB25A] text-[#3E1B10]">
                      SEWADAAR
                    </span>
                    <p className="text-[10px] text-white/70 mt-1 font-mono">{registeredCard.id}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* Passport Photo / Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-xl border-2 border-[#5B2A1B] bg-white overflow-hidden shadow-inner flex items-center justify-center relative">
                        {registeredCard.photo ? (
                          <img
                            src={registeredCard.photo}
                            alt={registeredCard.fullName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4EDE1] text-[#793A27] p-2 text-center">
                            <User className="w-12 h-12 mb-1 text-[#5B2A1B]/50" />
                            <span className="text-[10px] font-serif font-semibold">सत्य सनातन सेवादार</span>
                          </div>
                        )}
                        <span className="absolute bottom-0 inset-x-0 bg-[#481E13]/85 text-[#DFB25A] text-[9px] text-center py-0.5 font-bold">
                          प्रमाणित सेवादार
                        </span>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex-1 w-full text-center sm:text-left space-y-2">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#5B2A1B]">
                          {registeredCard.fullName}
                        </h4>
                        <p className="text-xs text-[#793A27] font-medium">
                          आत्मज/पति: <span className="text-[#2D2421] font-semibold">{registeredCard.guardianName}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs py-1 border-t border-b border-[#E7D7C4]/70">
                        <div>
                          <span className="text-[#793A27] text-[11px]">लिंग / आयु:</span>
                          <p className="font-semibold">{registeredCard.gender}</p>
                        </div>
                        <div>
                          <span className="text-[#793A27] text-[11px]">आधार संख्या:</span>
                          <p className="font-mono font-bold text-[#3E1B10]">{registeredCard.aadhaarMasked}</p>
                        </div>
                        <div>
                          <span className="text-[#793A27] text-[11px]">मोबाइल:</span>
                          <p className="font-semibold">{registeredCard.phone}</p>
                        </div>
                        <div>
                          <span className="text-[#793A27] text-[11px]">जिला / राज्य:</span>
                          <p className="font-semibold text-truncate">
                            {registeredCard.district}, {registeredCard.stateName}
                          </p>
                        </div>
                      </div>

                      {/* Selected Sevas */}
                      <div>
                        <span className="text-[11px] text-[#793A27] font-semibold block mb-1">
                          संबद्ध सेवा प्रभाग:
                        </span>
                        <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                          {registeredCard.sevas.map((seva: string, i: number) => (
                            <span
                              key={i}
                              className="text-[10px] font-medium bg-[#EAE3D2] text-[#481E13] px-2 py-0.5 rounded border border-[#DFB25A]/40"
                            >
                              {seva}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Stamp / Verification */}
                  <div className="mt-5 pt-3 border-t border-[#DFB25A]/60 flex items-center justify-between text-[11px] text-[#793A27]">
                    <div>
                      <p className="text-[10px]">पंजीकरण तिथि: {registeredCard.issueDate}</p>
                      <p className="text-[10px] font-semibold text-[#194023]">✓ पूर्णतः निःशुल्क सदस्यता</p>
                    </div>
                    <div className="text-right flex items-center space-x-1.5">
                      <BadgeCheck className="w-5 h-5 text-[#265B33]" />
                      <div className="text-right">
                        <p className="text-[10px] font-serif font-bold text-[#5B2A1B]">सत्य सनातन धाम</p>
                        <p className="text-[8px] text-gray-500">अधिकृत मुहर एवं हस्ताक्षर</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="bg-[#DFB25A] py-1 text-center text-[10px] font-bold text-[#3E1B10] tracking-wider uppercase">
                  एक कदम सेवा की ओर • एक कदम संस्कार की ओर
                </div>
              </div>

              {/* Action Buttons: Print, Share, Register Another */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] hover:bg-[#3E1B10] rounded-lg font-semibold text-sm flex items-center space-x-2 shadow-md transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>पहचान पत्र प्रिंट करें</span>
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="px-5 py-2.5 bg-[#265B33] text-white hover:bg-[#194023] rounded-lg font-semibold text-sm flex items-center space-x-2 shadow-md transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedLink ? 'लिंक कॉपी हो गया!' : 'शेयर करें'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#FAF7F2] text-[#5B2A1B] border border-[#5B2A1B]/40 hover:bg-[#ECE4D6] rounded-lg font-semibold text-sm transition-all cursor-pointer"
                >
                  नया पंजीकरण करें
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Enrollment Form */
          <div className="space-y-8">
            {/* Free Membership Guarantee Card */}
            <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FAF4E8] to-[#FFFDF9] border border-[#DFB25A]/60 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-full bg-[#DFB25A]/20 border border-[#DFB25A] flex items-center justify-center flex-shrink-0 text-[#B34909]">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#5B2A1B] text-base sm:text-lg">
                    सत्य सनातन सेवादार सदस्यता — १००% निःशुल्क
                  </h3>
                  <p className="text-xs sm:text-sm text-[#793A27]">
                    हम किसी भी प्रकार का शुल्क नहीं लेते। केवल तन, मन और समय से धर्म-सेवा का संकल्प चाहिए।
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 text-center sm:text-right">
                <span className="inline-block px-3 py-1 bg-[#265B33] text-white text-xs font-bold rounded-md">
                  शुल्क: ₹० (शून्य)
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[#E7D7C4] shadow-sm p-6 sm:p-10 space-y-8"
            >
              {/* Section 1: Personal Details */}
              <div>
                <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E7D7C4]">
                  <User className="w-5 h-5 text-[#5B2A1B]" />
                  <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
                    १. व्यक्तिगत विवरण (Personal Details)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      सेवादार का पूरा नाम <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) {
                          setErrors((prev) => {
                            const n = { ...prev };
                            delete n.fullName;
                            return n;
                          });
                        }
                      }}
                      placeholder="उदा. राहुल शर्मा"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-[#E7D7C4]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Father's / Husband's Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      पिता / पति का नाम <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <input
                      type="text"
                      value={guardianName}
                      onChange={(e) => {
                        setGuardianName(e.target.value);
                        if (errors.guardianName) {
                          setErrors((prev) => {
                            const n = { ...prev };
                            delete n.guardianName;
                            return n;
                          });
                        }
                      }}
                      placeholder="उदा. श्री रामेश्वर शर्मा"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.guardianName ? 'border-red-500' : 'border-[#E7D7C4]'
                      }`}
                    />
                    {errors.guardianName && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.guardianName}</span>
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      लिंग (Gender) <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['पुरुष', 'महिला', 'अन्य'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g)}
                          className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            gender === g
                              ? 'bg-[#5B2A1B] text-[#FAF7F2] border-[#5B2A1B]'
                              : 'bg-[#FAF7F2] text-[#3E2B23] border-[#E7D7C4] hover:bg-[#EAE3D2]'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date of Birth / Age */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      जन्म तिथि अथवा आयु (वैकल्पिक)
                    </label>
                    <input
                      type="text"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder="उदा. 25 वर्ष अथवा 15/08/1995"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      मोबाइल नंबर (WhatsApp) <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-sm text-gray-500 font-semibold">+91</span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhone(val);
                          if (errors.phone) {
                            setErrors((prev) => {
                              const n = { ...prev };
                              delete n.phone;
                              return n;
                            });
                          }
                        }}
                        placeholder="9876543210"
                        className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                          errors.phone ? 'border-red-500' : 'border-[#E7D7C4]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      ईमेल पता (वैकल्पिक)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="उदा. sevadaar@gmail.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Identity & Photo (Aadhaar Mandatory, Photo Optional) */}
              <div className="bg-[#FAF7F2]/90 border border-[#E7D7C4] rounded-xl p-5 sm:p-6 space-y-5">
                <div className="flex items-center space-x-2.5 pb-2 border-b border-[#E7D7C4]">
                  <ShieldCheck className="w-5 h-5 text-[#265B33]" />
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B2A1B]">
                      २. पहचान एवं प्रमाणीकरण (Identity Verification)
                    </h3>
                    <p className="text-[11px] text-[#793A27]">
                      सत्य सनातन धाम की सुरक्षा व अनुशासन हेतु आधार संख्या अनिवार्य है। पासपोर्ट फोटो जोड़ना पूर्णतः वैकल्पिक है।
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Aadhaar Number: MANDATORY */}
                  <div className="bg-white p-4 rounded-xl border-2 border-[#5B2A1B]/20">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#3E1B10]">
                        आधार कार्ड संख्या <span className="text-red-600">* (अनिवार्य - Mandatory)</span>
                      </label>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">
                        अनिवार्य
                      </span>
                    </div>

                    <p className="text-[11px] text-[#793A27] mb-2.5 leading-normal">
                      कृपया अपनी १२ अंकों की वैध आधार संख्या दर्ज करें। यह केवल सेवादार सत्यापन हेतु सुरक्षित रखी जाती है।
                    </p>

                    <input
                      type="text"
                      maxLength={14}
                      value={formatAadhaarDisplay(aadhaar)}
                      onChange={handleAadhaarChange}
                      placeholder="XXXX XXXX XXXX (१२ अंक)"
                      className={`w-full px-3.5 py-2.5 text-base font-mono font-semibold tracking-wider rounded-lg border bg-[#FAF7F2]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.aadhaar ? 'border-red-500' : 'border-[#5B2A1B]/40'
                      }`}
                    />

                    {errors.aadhaar ? (
                      <p className="text-red-600 text-xs mt-1.5 font-medium flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.aadhaar}</span>
                      </p>
                    ) : (
                      <p className="text-[11px] text-gray-500 mt-1.5 flex items-center space-x-1">
                        <ShieldCheck className="w-3 h-3 text-[#265B33]" />
                        <span>पहचान पत्र पर आधार नंबर को सुरक्षित रूप से मास्क (XXXX) किया जाता है।</span>
                      </p>
                    )}
                  </div>

                  {/* Passport Photo: OPTIONAL */}
                  <div className="bg-white p-4 rounded-xl border border-[#E7D7C4]">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#3E1B10]">
                        पासपोर्ट साइज फोटो <span className="text-[#265B33]">(वैकल्पिक - Optional)</span>
                      </label>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#EAF5EC] text-[#265B33] font-bold">
                        वैकल्पिक
                      </span>
                    </div>

                    <p className="text-[11px] text-[#793A27] mb-2.5 leading-normal">
                      यदि आप चाहें तो पहचान पत्र पर अपनी फोटो जोड़ने हेतु अपनी पासपोर्ट साइज फोटो अपलोड कर सकते हैं।
                    </p>

                    {photoPreview ? (
                      <div className="flex items-center space-x-4 p-2 bg-[#FAF7F2] rounded-lg border border-[#DFB25A]/40">
                        <img
                          src={photoPreview}
                          alt="Passport preview"
                          className="w-16 h-20 object-cover rounded-md border border-[#5B2A1B]"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-[#194023] flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>फोटो अपलोड हो गई</span>
                          </p>
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="mt-2 text-xs text-red-600 hover:text-red-800 flex items-center space-x-1 font-medium cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                            <span>फोटो हटाएं</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          id="passport-photo-upload"
                        />
                        <label
                          htmlFor="passport-photo-upload"
                          className="flex flex-col items-center justify-center border-2 border-dashed border-[#DFB25A]/70 hover:border-[#5B2A1B] rounded-lg p-4 cursor-pointer bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] transition-colors"
                        >
                          <Upload className="w-6 h-6 text-[#793A27] mb-1" />
                          <span className="text-xs font-semibold text-[#5B2A1B]">
                            फोटो चुनें या यहाँ खींचें
                          </span>
                          <span className="text-[10px] text-gray-500 mt-0.5">
                            JPG, PNG (अधिकतम 5MB)
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 3: Address Details */}
              <div>
                <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E7D7C4]">
                  <MapPin className="w-5 h-5 text-[#5B2A1B]" />
                  <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
                    ३. स्थायी पता एवं स्थान (Address & Location)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                  {/* State */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      राज्य (State) <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all cursor-pointer"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      जिला (District) <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        if (errors.district) {
                          setErrors((prev) => {
                            const n = { ...prev };
                            delete n.district;
                            return n;
                          });
                        }
                      }}
                      placeholder="उदा. गोरखपुर, अयोध्या, वाराणसी"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.district ? 'border-red-500' : 'border-[#E7D7C4]'
                      }`}
                    />
                    {errors.district && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.district}</span>
                      </p>
                    )}
                  </div>

                  {/* Tehsil / City */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      तहसील / नगर (Tehsil / City)
                    </label>
                    <input
                      type="text"
                      value={tehsil}
                      onChange={(e) => setTehsil(e.target.value)}
                      placeholder="उदा. सदर"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all"
                    />
                  </div>

                  {/* Complete Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      गाँव / मोहल्ला / गली / मकान संख्या <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) {
                          setErrors((prev) => {
                            const n = { ...prev };
                            delete n.address;
                            return n;
                          });
                        }
                      }}
                      placeholder="उदा. ग्राम-रामपुर, पो.-हरिहरपुर"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.address ? 'border-red-500' : 'border-[#E7D7C4]'
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.address}</span>
                      </p>
                    )}
                  </div>

                  {/* Pin Code */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      पिनकोड (PIN Code) <span className="text-red-600">* (अनिवार्य)</span>
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setPincode(val);
                        if (errors.pincode) {
                          setErrors((prev) => {
                            const n = { ...prev };
                            delete n.pincode;
                            return n;
                          });
                        }
                      }}
                      placeholder="273001"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all ${
                        errors.pincode ? 'border-red-500' : 'border-[#E7D7C4]'
                      }`}
                    />
                    {errors.pincode && (
                      <p className="text-red-600 text-[11px] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.pincode}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 4: Seva Preferences & Availability */}
              <div>
                <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E7D7C4]">
                  <Layers className="w-5 h-5 text-[#5B2A1B]" />
                  <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
                    ४. सेवा प्रभाग एवं समय उपलब्धता (Seva Interest & Availability)
                  </h3>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-[#3E2B23] mb-2">
                    आप किन अभियानों में सेवा देना चाहते हैं? <span className="text-red-600">* (एक या अधिक चुनें)</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sevaOptions.map((opt) => {
                      const isChecked = selectedSevas.includes(opt.label);
                      return (
                        <div
                          key={opt.id}
                          onClick={() => toggleSeva(opt.label)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-start space-x-3 ${
                            isChecked
                              ? 'bg-[#F4EDE1] border-[#5B2A1B] shadow-xs'
                              : 'bg-white border-[#E7D7C4] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}} // handled by div
                            className="mt-0.5 rounded text-[#5B2A1B] focus:ring-[#5B2A1B]"
                          />
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-[#5B2A1B]">{opt.label}</p>
                            <p className="text-[11px] text-[#793A27]">{opt.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.sevas && (
                    <p className="text-red-600 text-[11px] mt-2 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.sevas}</span>
                    </p>
                  )}
                </div>

                {/* Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      आप कितना समय दे सकते हैं?
                    </label>
                    <select
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all cursor-pointer"
                    >
                      <option value="प्रतिदिन (Daily)">प्रतिदिन (Daily)</option>
                      <option value="सप्ताहांत (शनिवार व रविवार)">सप्ताहांत (शनिवार व रविवार)</option>
                      <option value="पूर्णिमा, एकादशी व पावन त्योहारों पर">पूर्णिमा, एकादशी व पावन त्योहारों पर</option>
                      <option value="माह में १-२ दिन">माह में १-२ दिन</option>
                      <option value="विशेष आयोजनों व बुलावे पर">विशेष आयोजनों व बुलावे पर</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3E2B23] mb-1.5">
                      विशेष योग्यता / हुनर (वैकल्पिक)
                    </label>
                    <input
                      type="text"
                      value={specialSkills}
                      onChange={(e) => setSpecialSkills(e.target.value)}
                      placeholder="उदा. ड्राइविंग, वीडियोग्राफी, संगीत, शिक्षक, वैद्य, खाना बनाना"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7D7C4] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B2A1B] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: Sewadaar Pledge */}
              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#DFB25A]/60">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="pledge"
                    checked={pledgeAccepted}
                    onChange={(e) => {
                      setPledgeAccepted(e.target.checked);
                      if (errors.pledge) {
                        setErrors((prev) => {
                          const n = { ...prev };
                          delete n.pledge;
                          return n;
                        });
                      }
                    }}
                    className="mt-1 w-4 h-4 rounded text-[#5B2A1B] focus:ring-[#5B2A1B] cursor-pointer"
                  />
                  <label htmlFor="pledge" className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed cursor-pointer">
                    <span className="font-bold text-[#5B2A1B]">सेवादार संकल्प (Pledge): </span>
                    "मैं सत्य, धर्म, गौ, प्रकृति एवं राष्ट्र रक्षा हेतु सत्य सनातन धाम के सेवादार के रूप में निस्वार्थ भाव से कार्य करने का संकल्प लेता/लेती हूँ। मैं धाम की मर्यादाओं और अनुशासन का निष्ठापूर्वक पालन करूँगा/करूँगी।"
                    <span className="text-red-600 font-bold ml-1">* (अनिवार्य)</span>
                  </label>
                </div>
                {errors.pledge && (
                  <p className="text-red-600 text-[11px] mt-2 ml-7 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.pledge}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3.5 text-base font-serif font-bold text-[#FAF7F2] bg-[#5B2A1B] hover:bg-[#3E1B10] disabled:bg-[#793A27] rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <span>पंजीकरण किया जा रहा है...</span>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-[#DFB25A]" />
                      <span>निःशुल्क सेवादार पंजीकरण पूर्ण करें</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-gray-500 mt-2">
                  ✓ कोई शुल्क नहीं • तत्काल डिजिटल पहचान पत्र जनरेट होगा
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Informational Guidance Section for Sewadaars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E7D7C4] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#DFB25A]/20 text-[#5B2A1B] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#5B2A1B] mb-2">
              निस्वार्थ सेवा का मार्ग
            </h4>
            <p className="text-xs text-[#793A27] leading-relaxed">
              सत्य सनातन धाम में सेवादार बनना केवल सहयोग नहीं, बल्कि सनातन मूल्यों को जीवन में उतारने और राष्ट्र कल्याण में प्रत्यक्ष भागीदार बनने का अवसर है।
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E7D7C4] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#265B33]/20 text-[#265B33] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#5B2A1B] mb-2">
              आधार सत्यापन क्यों?
            </h4>
            <p className="text-xs text-[#793A27] leading-relaxed">
              धाम के सभी ६ महाअभियान, गौशाला व मंदिर परिसरों में सेवादारों की प्रामाणिकता, सुरक्षा एवं अनुशासन सुनिश्चित करने हेतु आधार संख्या आवश्यक है।
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E7D7C4] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#5B2A1B]/20 text-[#5B2A1B] flex items-center justify-center mb-4">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-base text-[#5B2A1B] mb-2">
              सम्मान एवं पहचान पत्र
            </h4>
            <p className="text-xs text-[#793A27] leading-relaxed">
              पंजीकृत सेवादार को धाम का आधिकारिक डिजिटल पहचान पत्र प्रदान किया जाता है, जिससे आयोजनों एवं अभियानों में प्राथमिकता से सहभागिता मिलती है।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
