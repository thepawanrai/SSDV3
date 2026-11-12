import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, sevasData } from '../config/siteData';
import { Heart, Compass, CheckCircle2, ArrowRight, Info, ZoomIn, Eye } from 'lucide-react';

interface TempleViewProps {
  onOpenDonate?: (sevaId?: string, amount?: number) => void;
  onOpenLightbox: (src: string, alt: string, title?: string, desc?: string) => void;
}

const originalTempleImages = [
  {
    src: '/images/temple/temple-main-1.png',
    fallbackSrc: '/1.png',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर — मुख्य शिखर एवं प्रांगण (View 1)',
    badge: 'मुख्य शिखर एवं अग्र भाग (View 1)',
    desc: 'नागर शैली में निर्मित मुख्य शिखर, भव्य प्रवेश मेहराब एवं अष्टकोणीय नक्षत्र फव्वारा — अधिकृत वास्तविक छायाचित्र।'
  },
  {
    src: '/images/temple/temple-main-2.png',
    fallbackSrc: '/2.png',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर — विहंगम वास्तु दृष्टिकोण (View 2)',
    badge: 'विहंगम वास्तु कोण (View 2)',
    desc: '२५,००० वर्ग फीट के सम्पूर्ण भूखंड पर परिक्रमा पथ, कलात्मक छतरियां एवं उद्यान विन्यास — अधिकृत छायाचित्र।'
  },
  {
    src: '/images/temple/temple-main-3.png',
    fallbackSrc: '/3.png',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर — परिक्रमा एवं वाटिका (View 3)',
    badge: 'पुष्प वाटिका व परिक्रमा (View 3)',
    desc: 'मंदिर पथ, हरियाली युक्त वाटिका, दीप स्तंभ एवं पत्थर से जड़ा हुआ चौड़ा परिक्रमा मार्ग।'
  },
  {
    src: '/images/temple/temple-main-4.png',
    fallbackSrc: '/4.png',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर — नक्काशीदार जाली व स्तंभ (View 4)',
    badge: 'नक्काशीदार जाली व स्तंभ (View 4)',
    desc: 'भारतीय कारीगरी का उत्कृष्ट उदाहरण — लाल पत्थर पर जालीदार वातायन, नक्काशीदार मेहराब व अलंकृत स्तंभ।'
  },
  {
    src: '/images/temple/temple-main-5.png',
    fallbackSrc: '/5.png',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर — प्रांगण एवं जलकुंड (View 5)',
    badge: 'जलकुंड एवं ध्यान प्रांगण (View 5)',
    desc: 'भक्तों के विश्राम हेतु पत्थर की बेंचें, निरंतर प्रवाहित जल स्रोत एवं शांतिपूर्ण वातावरण।'
  },
  {
    src: '/images/temple/temple-masterplan.png',
    fallbackSrc: '/Temple Masterplan.png',
    title: 'आधिकारिक वास्तु मास्टरप्लान (Temple Masterplan)',
    badge: '२५,००० sq.ft मास्टरप्लान',
    desc: '१०० x २५० फीट भूखंड का संपूर्ण अधिकृत साइट मास्टरप्लान एवं वास्तु विन्यास।'
  },
  {
    src: '/images/temple/temple-satellite-chhetra.png',
    fallbackSrc: '/Satelight Image of Satya Sanatan Dham.png',
    title: 'सत्य सनातन धाम — उपग्रह मानचित्र एवं क्षेत्र',
    badge: 'उपग्रह सैटेलाइट दृश्य',
    desc: 'ग्राम पासुन (मौदहा, हमीरपुर) में ११,००० वृक्षारोपण क्षेत्र एवं मंदिर निर्माण क्षेत्र का अधिकृत उपग्रह सीमांकन।'
  }
];

export const TempleView: React.FC<TempleViewProps> = ({ onOpenLightbox }) => {
  const templeSevas = sevasData.filter((s) => s.category === 'temple');
  const bhagwatSevas = sevasData.filter((s) => s.category === 'bhagwat');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16 font-sans">
      {/* Temple Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          परम पावन अधिष्ठान
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          श्री श्री राधा कृष्ण बिहारी जी मंदिर
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif pt-1">
          २५,००० वर्ग फीट का भव्य नागर शैली पाषाण संकुल • ग्राम पासुन, मौदहा (हमीरपुर)
        </p>
      </div>

      {/* Main Locked Temple Image Architecture Display */}
      <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-stone-900 relative group">
        <img
          src="/1.png"
          alt="श्री श्री राधा कृष्ण बिहारी जी मंदिर - वास्तविक स्थापत्य"
          className="w-full h-80 sm:h-[480px] object-cover object-center cursor-pointer group-hover:scale-101 transition-transform duration-300"
          onClick={() =>
            onOpenLightbox(
              '/1.png',
              'श्री श्री राधा कृष्ण बिहारी जी मंदिर',
              'मुख्य मंदिर स्थापत्य एवं प्रवेश द्वार',
              'नागर शैली में निर्मित भव्य शिखर, कलात्मक मेहराबदार द्वार एवं अष्टकोणीय नक्षत्र फव्वारा'
            )
          }
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/temple-hero.jpg';
          }}
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#FEF08A]">
              परंपरागत नागर शैली एवं बंसी पहाड़पुर सैंडस्टोन स्थापत्य
            </p>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              २५,००० वर्ग फीट का पावन प्रांगण • केंद्रीय नक्षत्र फव्वारा • परिक्रमा पथ
            </p>
          </div>
          <Link
            to="/donate?seva=mandir-nirman-1sqft&amount=5100"
            className="px-5 py-2.5 bg-[#DFB25A] hover:bg-[#C49033] text-[#3E1B10] text-xs sm:text-sm font-bold rounded-md transition-colors shadow-md self-start sm:self-auto cursor-pointer inline-flex items-center space-x-1.5"
          >
            <Heart className="w-4 h-4 fill-current text-[#3E1B10]" />
            <span>मंदिर निर्माण सेवा (₹5,100/sq.ft)</span>
          </Link>
        </div>
      </div>

      {/* Architectural Masterplan & Plot Specs */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7D7C4] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-3">
          <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
            वास्तु एवं साइट विन्यास
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal">
            २५,००० वर्ग फीट का सुनियोजित संकुल
          </h2>
          <p className="text-xs sm:text-sm text-[#3E2B23] leading-relaxed">
            आधिकारिक वास्तु मास्टरप्लान के अनुसार मंदिर संकुल १००' x २५०' के विस्तीर्ण भूखंड पर आकार ले रहा है। इसमें मुख्य गर्भगृह और मंडप (२,५०० वर्ग फीट), पूर्व की ओर भव्य नक्षत्र जल फव्वारा, लगभग ५,००० वर्ग फीट का फोरकोर्ट गार्डन, तथा चारों ओर परिधि में सुगम वाहन एवं पैदल परिक्रमा पथ सम्मिलित हैं।
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7D7C4]">
              <span className="text-stone-500 block">कुल भूखंड माप:</span>
              <strong className="text-[#5B2A1B] text-sm">100' x 250' (25,000 sq.ft)</strong>
            </div>
            <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7D7C4]">
              <span className="text-stone-500 block">मुख्य मंदिर संरचना:</span>
              <strong className="text-[#5B2A1B] text-sm">2,500 sq.ft</strong>
            </div>
            <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7D7C4]">
              <span className="text-stone-500 block">उद्यान एवं हरियाली:</span>
              <strong className="text-[#265B33] text-sm">~15,000 sq.ft (Mango, Gulmohar, Rose)</strong>
            </div>
            <div className="p-3 bg-[#FAF7F2] rounded border border-[#E7D7C4]">
              <span className="text-stone-500 block">फोरकोर्ट गार्डन:</span>
              <strong className="text-[#5B2A1B] text-sm">~5,000 sq.ft (Central Star Fountain)</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="rounded-xl overflow-hidden border border-[#E7D7C4] shadow-md group cursor-pointer bg-stone-100"
            onClick={() =>
              onOpenLightbox(
                '/Temple Masterplan.png',
                'आधिकारिक वास्तु मास्टरप्लान',
                '25,000 वर्ग फीट का साइट प्लान (100x250 फीट)',
                'मंदिर संरचना, स्टार फव्वारा, पैदल मार्ग एवं उद्यान'
              )
            }
          >
            <img
              src="/Temple Masterplan.png"
              alt="आधिकारिक मूल वास्तु मास्टरप्लान (Original Temple Masterplan)"
              className="w-full h-72 sm:h-80 object-contain bg-white group-hover:scale-102 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/temple-masterplan.jpg';
              }}
            />
            <div className="p-2.5 bg-[#FAF7F2] text-center text-xs text-[#5B2A1B] font-semibold border-t border-[#E7D7C4] flex items-center justify-center space-x-1">
              <span>🔍 मूल वास्तु मास्टरप्लान (क्लिक करके संपूर्ण मैप ज़ूम करें)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Original Temple Architectural Gallery Showcase */}
      <div className="space-y-6">
        <div className="border-b border-[#E7D7C4] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
              मूल वास्तु व स्थापत्य दर्शन
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
              श्री श्री राधा कृष्ण बिहारी जी मंदिर — मूल चित्रण दीर्घा
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              परिसर, मुख्य शिखर, परिक्रमा पथ, जालीदार वातायन एवं उद्यान के अधिकृत मूल छायाचित्र
            </p>
          </div>
          <span className="text-xs text-[#5B2A1B] font-semibold bg-[#FAF0E4] px-3 py-1.5 rounded-md border border-[#E7D7C4] self-start sm:self-auto">
            📷 किसी भी चित्र पर क्लिक करके ज़ूम करें
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {originalTempleImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E7D7C4] overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div
                className="relative h-60 sm:h-64 overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => onOpenLightbox(img.src, img.title, img.badge, img.desc)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-contain bg-[#FAF7F2] p-2 group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = img.fallbackSrc;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 bg-white/95 rounded-full text-[#5B2A1B] shadow-md transform scale-90 group-hover:scale-100 transition-transform flex items-center space-x-1.5 px-3.5">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-xs font-bold">ज़ूम करें</span>
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium rounded">
                    {img.badge}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1.5 border-t border-[#E7D7C4]">
                <h3 className="font-serif font-bold text-base text-[#5B2A1B]">
                  {img.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Temple Daily Services (Verified Pricing Catalogue) */}
      <div className="space-y-6">
        <div className="border-b border-[#E7D7C4] pb-3">
          <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
            दैनिक एवं विशेष सेवा
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
            मंदिर नित्य सेवा प्रकल्प
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            श्री श्री राधा कृष्ण बिहारी जी की नित्य सेवा हेतु अधिकृत सहयोग राशि
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templeSevas.map((seva) => (
            <div
              key={seva.id}
              className="bg-white rounded-xl border border-[#E7D7C4] p-5 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2 py-0.5 rounded">
                    {seva.categoryHindi}
                  </span>
                  <span className="font-bold text-base text-[#5B2A1B]">
                    {seva.amountDisplay}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#5B2A1B]">
                  {seva.hindiName}
                </h3>
                <p className="text-xs text-[#3E2B23] leading-relaxed">
                  {seva.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-[#E7D7C4]">
                <Link
                  to={`/seva/${seva.id}`}
                  className="flex-1 py-2 text-center text-xs font-semibold text-[#5B2A1B] bg-white border border-[#CBD5E1] rounded hover:bg-[#FAF7F2] transition-colors"
                >
                  विवरण
                </Link>
                <Link
                  to={`/donate?seva=${seva.id}&amount=${seva.amount || ''}`}
                  className="flex-1 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center"
                >
                  <span>मंदिर सेवा करें</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bhagwat Seva Section */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-[#E7D7C4] pb-3">
          <span className="inline-block text-xs font-bold uppercase text-[#793A27] tracking-wider mb-2">
            कथा एवं उत्सव
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] leading-normal mt-1">
            श्रीमद्भागवत कथा एवं उत्सव सेवाएँ
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            पावन भागवत कथा के दौरान विभिन्न प्रहरों के भोग, आरती एवं भंडारा की अधिकृत सेवा
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#E7D7C4] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#5B2A1B] text-white font-serif text-xs">
                <tr>
                  <th className="p-3.5">सेवा का नाम (Seva)</th>
                  <th className="p-3.5">विवरण (Description)</th>
                  <th className="p-3.5">अधिकृत सहयोग राशि</th>
                  <th className="p-3.5 text-right">कार्य</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7D7C4] font-sans">
                {bhagwatSevas.map((seva) => (
                  <tr key={seva.id} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="p-3.5 font-bold text-[#5B2A1B] text-sm">
                      <Link to={`/seva/${seva.id}`} className="hover:underline">
                        {seva.hindiName}
                      </Link>
                    </td>
                    <td className="p-3.5 text-stone-600 max-w-md">
                      {seva.description}
                    </td>
                    <td className="p-3.5 font-bold text-sm text-[#5B2A1B]">
                      {seva.amountDisplay}
                    </td>
                    <td className="p-3.5 text-right space-x-2">
                      <Link
                        to={`/seva/${seva.id}`}
                        className="px-2.5 py-1 text-xs text-stone-600 hover:text-[#5B2A1B] underline"
                      >
                        विवरण
                      </Link>
                      <Link
                        to={`/donate?seva=${seva.id}&amount=${seva.amount || ''}`}
                        className="px-3.5 py-1.5 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] font-semibold rounded text-xs transition-colors cursor-pointer inline-block"
                      >
                        सेवा करें
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
