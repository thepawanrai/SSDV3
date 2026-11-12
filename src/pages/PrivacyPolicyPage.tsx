import React from 'react';
import { siteConfig } from '../config/siteData';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 font-sans">
      <Link
        to="/"
        className="inline-flex items-center space-x-1.5 text-xs text-[#5B2A1B] hover:underline font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>मुख्य पृष्ठ पर लौटें</span>
      </Link>

      <div className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5B2A1B]">
          गोपनीयता नीति (Privacy Policy)
        </h1>
        <p className="text-xs text-stone-500">
          अंतिम अद्यतन: सितंबर २०२६ • सत्य सनातन धाम
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs space-y-6 text-xs sm:text-sm text-[#3E2B23] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">१. परिचय</h2>
          <p>
            सत्य सनातन धाम (ग्राम–पासुन, मौदहा, जनपद–हमीरपुर, उत्तर प्रदेश–210507) अपने सभी सेवाधारियों, दर्शनार्थियों एवं सहयोगियों की गोपनीयता का पूर्ण सम्मान करता है। यह नीति स्पष्ट करती है कि हमारी संस्था द्वारा आपकी व्यक्तिगत जानकारी किस प्रकार एकत्रित, सुरक्षित एवं उपयोग की जाती है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">२. एकत्रित की जाने वाली जानकारी</h2>
          <p>
            जब आप हमारी वेबसाइट पर सेवा सहयोग करते हैं अथवा संपर्क फॉर्म भरते हैं, तो हम केवल आवश्यक विवरण जैसे आपका पूरा नाम, मोबाइल नंबर, ईमेल पता, शहर, तथा सेवा समर्पण का संदर्भ (UTR/Transaction ID) एकत्रित करते हैं।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">३. जानकारी का उपयोग</h2>
          <p>
            आपकी जानकारी का उपयोग केवल सेवा रसीद प्रेषण, सेवा की अद्यतन स्थिति से अवगत कराने, धार्मिक उत्सवों की सूचना देने एवं आवश्यक प्रशासनिक सत्यापन हेतु किया जाता है। हम किसी भी सेवाधारी की व्यक्तिगत जानकारी को किसी तीसरे पक्ष के साथ व्यावसायिक रूप से साझा अथवा विक्रय नहीं करते हैं।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">४. संपर्क सूत्र</h2>
          <p>
            गोपनीयता नीति के संबंध में किसी भी जिज्ञासा अथवा संशोधन हेतु आप हमें <a href={`mailto:${siteConfig.contact.email}`} className="text-[#5B2A1B] underline font-medium">{siteConfig.contact.email}</a> पर संपर्क कर सकते हैं।
          </p>
        </section>
      </div>
    </div>
  );
};
