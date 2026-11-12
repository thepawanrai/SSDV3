import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteData';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E1B10] text-[#FAF7F2] border-t border-[#5B2A1B]">
      {/* Upper Seva Sankalpa Banner */}
      <div className="bg-[#5B2A1B] border-b border-[#793A27]/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#DFB25A] font-semibold">
              पावन संकल्प
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
              आप भी सेवा के इस संकल्प से जुड़ें।
            </h3>
            <p className="text-sm text-[#FAF7F2]/80 mt-1 max-w-xl">
              सेवा, संस्कार और सनातन मूल्यों के माध्यम से समाज, प्रकृति और आने वाली पीढ़ियों के लिए सार्थक प्रयास।
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/tree-plantation"
              className="px-5 py-2.5 bg-[#265B33] hover:bg-[#194023] text-white text-sm font-bold rounded-md transition-colors cursor-pointer border border-[#3D7A4D]/40 shadow-sm"
            >
              🌱 वृक्ष सेवा (₹1,001 से)
            </Link>
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] text-sm font-bold rounded-md transition-colors cursor-pointer shadow-md inline-flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 text-[#3E1B10] fill-current" />
              <span>सेवा में सहयोग करें</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex-shrink-0 flex items-center justify-center shadow-xs">
                <img
                  src="/ssd-logo-new.png"
                  alt="Satya Sanatan Dham Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png';
                  }}
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#FAF7F2] leading-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-xs text-[#DFB25A] font-medium tracking-wide">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-sans">
              सत्य सनातन धाम एक ऐसा आध्यात्मिक, सांस्कृतिक एवं सेवा-आधारित प्रयास है, जहाँ समाज, प्रकृति, गोवंश एवं सनातन परंपराओं की रक्षा हेतु निरंतर कार्य किया जा रहा है।
            </p>

            <div className="pt-2 text-xs text-[#DFB25A]/90 space-y-1">
              <p className="font-semibold">प्रमुख प्रेरणा:</p>
              <p className="text-[#FAF7F2]/70">सेवा • संस्कार • सनातन</p>
            </div>

            {/* Official Social Media Handles - Single Line Circular Buttons */}
            <div className="pt-4 border-t border-[#793A27]/40 space-y-2.5">
              <p className="text-xs font-bold text-[#DFB25A] uppercase tracking-wider">
                सोशल मीडिया पर जुड़ें (Follow Us)
              </p>
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                {/* 1. Facebook */}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-md shadow-[#3E1B10]/40 hover:shadow-lg hover:border-[#FAF7F2] hover:text-[#FAF7F2] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#DFB25A]"
                  title="Facebook - Satya Sanatan Dham"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* 2. Instagram */}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-md shadow-[#3E1B10]/40 hover:shadow-lg hover:border-[#FAF7F2] hover:text-[#FAF7F2] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#DFB25A]"
                  title="Instagram - @satyasanatan.dham"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* 3. YouTube */}
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-md shadow-[#3E1B10]/40 hover:shadow-lg hover:border-[#FAF7F2] hover:text-[#FAF7F2] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#DFB25A]"
                  title="YouTube - @satyasanatandhamorg"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 4. Telegram */}
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-md shadow-[#3E1B10]/40 hover:shadow-lg hover:border-[#FAF7F2] hover:text-[#FAF7F2] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#DFB25A]"
                  title="Telegram - @satyasanatandhamorg"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>

                {/* 5. WhatsApp */}
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#3E1B10] via-[#5B2A1B] to-[#481E13] text-[#DFB25A] border-2 border-[#DFB25A] shadow-md shadow-[#3E1B10]/40 hover:shadow-lg hover:border-[#FAF7F2] hover:text-[#FAF7F2] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#DFB25A]"
                  title="WhatsApp - +91 94525 45662"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Separate Page Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              पृष्ठ संदर्शिका (Pages)
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80 font-sans">
              <li>
                <Link to="/" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> मुख्य पृष्ठ (Home)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> हमारे बारे में (About Us)
                </Link>
              </li>
              <li>
                <Link to="/seva" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> सेवा निर्देशिका (All Sevas)
                </Link>
              </li>
              <li>
                <Link to="/temple" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> श्री श्री राधा कृष्ण बिहारी जी मंदिर
                </Link>
              </li>
              <li>
                <Link to="/gaushala" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> गौशाला एवं गौ सेवा
                </Link>
              </li>
              <li>
                <Link to="/gurukul" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> गुरुकुल विस्तार (Gurukul)
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan" className="hover:text-[#DFB25A] transition-colors flex items-center font-bold text-[#DFB25A]">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> महाअभियान (६ प्रमुख प्रकल्प)
                </Link>
              </li>
              <li>
                <Link to="/tree-plantation" className="hover:text-[#DFB25A] transition-colors flex items-center text-[#E2EEDF]">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> १. वृक्षारोपण महाअभियान
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan/gau-seva" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> २. गौ सेवा महाअभियान
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan/mandir-nirman" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> ३. मंदिर निर्माण अभियान
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan/annadaan" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> ४. अन्नदान महाअभियान
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan/gurukul" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> ५. गुरुकुल अभियान
                </Link>
              </li>
              <li>
                <Link to="/mahabhiyan/nasha-mukti" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> ६. नशा मुक्ति अभियान
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> कार्यक्रम एवं उत्सव (Events)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> अधिकृत छायाचित्र दीर्घा
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#DFB25A] transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> आजीवन सदस्यता (Membership)
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-[#DFB25A] transition-colors flex items-center font-semibold text-[#DFB25A]">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#DFB25A]" /> सेवा समर्पण एवं पुष्टि (Contribute)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              संपर्क सूत्र (Contact Us)
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80 font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#DFB25A] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {siteConfig.address.hindiFull}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] text-[#DFB25A] font-semibold">फोन / व्हाट्सएप संपर्क:</p>
                {siteConfig.contact.phones.map((phone, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-[#DFB25A]" />
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-[#DFB25A] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#DFB25A]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#DFB25A] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.treeCampaign.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFB25A] hover:underline inline-flex items-center"
                >
                  <span>अभियान पोर्टल: abhiyan.satyasanatandham.org</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Transparent Bank Account Attribution */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#DFB25A] mb-4 pb-1 border-b border-[#793A27]/40">
              सेवा समर्पण खाता (Bank Details)
            </h4>
            <div className="bg-[#2D140B] p-3.5 rounded-lg border border-[#793A27]/60 space-y-2 text-xs font-sans">
              <div className="flex items-center text-[#DFB25A] text-[11px] font-semibold">
                <ShieldCheck className="w-4 h-4 mr-1 text-[#DFB25A]" />
                <span>अधिकृत बैंक विवरण</span>
              </div>
              <p className="text-[11px] text-[#FAF7F2]/90 leading-tight">
                <strong className="text-white">खाताधारक:</strong> {siteConfig.payment.accountHolder}
                <br />
                <span className="text-[#DFB25A]">({siteConfig.payment.role})</span>
              </p>
              <p className="text-[11px] text-[#FAF7F2]/80">
                <strong>बैंक:</strong> {siteConfig.payment.bank}
                <br />
                <strong>शाखा:</strong> {siteConfig.payment.branch}
              </p>
              <div className="p-2 bg-[#1A0A05] rounded border border-[#5B2A1B] space-y-1">
                <p className="text-[11px]">
                  <strong>खाता संख्या:</strong> <code className="text-[#DFB25A] font-mono">{siteConfig.payment.accountNumber}</code>
                </p>
                <p className="text-[11px]">
                  <strong>IFSC:</strong> <code className="text-[#DFB25A] font-mono">{siteConfig.payment.ifsc}</code>
                </p>
                <p className="text-[10px] text-[#DFB25A] pt-0.5 font-sans">
                  * नया आधिकारिक UPI QR कोड शीघ्र उपलब्ध कराया जाएगा। सीधे A/C व IFSC से NEFT / RTGS / IMPS द्वारा सेवा समर्पित करें।
                </p>
              </div>
              <p className="text-[10px] text-[#FAF7F2]/60 leading-tight italic pt-1">
                * {siteConfig.payment.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution Strip */}
        <div className="mt-12 pt-6 border-t border-[#793A27]/50 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name} (Satya Sanatan Dham). सर्वाधिकार सुरक्षित।</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            <Link to="/privacy" className="hover:text-[#DFB25A]">
              गोपनीयता नीति (Privacy Policy)
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#DFB25A]">
              नियम व शर्तें (Terms &amp; Conditions)
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#DFB25A]">
              संपर्क व पता
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
