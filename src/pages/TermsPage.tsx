import React from 'react';
import { siteConfig } from '../config/siteData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
          नियम एवं शर्तें (Terms &amp; Conditions)
        </h1>
        <p className="text-xs text-stone-500">
          सत्य सनातन धाम, ग्राम–पासुन, मौदहा, हमीरपुर (उ.प्र.)
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs space-y-6 text-xs sm:text-sm text-[#3E2B23] leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">१. सामान्य नियम</h2>
          <p>
            इस वेबसाइट का उपयोग करके आप सत्य सनातन धाम के नियमों एवं नीतियों का पालन करने की सहमति प्रदान करते हैं। यह वेबसाइट विशुद्ध रूप से आध्यात्मिक, सांस्कृतिक, धार्मिक एवं समाज सेवा के उद्देश्यों हेतु संचालित है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">२. सेवा समर्पण एवं स्वैच्छिक सहयोग</h2>
          <p>
            संस्था को दिया जाने वाला प्रत्येक सेवा सहयोग पूरी तरह स्वैच्छिक एवं धार्मिक निष्ठा से प्रेरित है। वर्तमान में सहयोग अधिकृत बैंक खाते (श्रीमती आस्था सिंह, सचिव एवं कोषाध्यक्ष, भारतीय स्टेट बैंक, खाता संख्या: 42923299544) में स्वीकार किया जाता है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif font-bold text-lg text-[#5B2A1B]">३. आधिकारिक संपर्क</h2>
          <p>
            संस्था से संबंधित किसी भी विधिक अथवा सेवा संबंधी जानकारी हेतु आधिकारिक ईमेल <a href={`mailto:${siteConfig.contact.email}`} className="text-[#5B2A1B] underline">{siteConfig.contact.email}</a> अथवा दूरभाष <span className="font-semibold">{siteConfig.contact.primaryPhone}</span> पर संपर्क किया जा सकता है।
          </p>
        </section>
      </div>
    </div>
  );
};
