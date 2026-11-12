import React, { useState } from 'react';
import { galleryItems } from '../config/siteData';
import { Eye, ZoomIn } from 'lucide-react';

interface GalleryViewProps {
  onOpenLightbox: (src: string, alt: string, title?: string, desc?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'सभी चित्र (All)' },
    { id: 'temple', label: 'मंदिर स्थापत्य (Temple)' },
    { id: 'plantation', label: 'वृक्षारोपण अभियान (Tree Campaign)' },
    { id: 'plan', label: 'वास्तु मास्टरप्लान (Plan)' },
    { id: 'satellite', label: 'साइट उपग्रह मानचित्र (Site)' },
    { id: 'seva', label: 'पहचान व सेवा (Brand)' },
  ];

  const filteredItems =
    selectedCat === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-3">
          प्रामाणिक छायाचित्र
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सत्य सनातन धाम चित्र दीर्घा
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-serif">
          मंदिर स्थापत्य, वास्तु विन्यास एवं धाम परिसर के वास्तविक छायाचित्र
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCat(c.id)}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
              selectedCat === c.id
                ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs'
                : 'bg-white text-[#3E2B23] border border-[#CBD5E1] hover:bg-[#FAF7F2]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const mainSrc = item.assetUrl || `/${item.assetKey}`;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E7D7C4] overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div
                className="relative h-60 sm:h-64 overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() =>
                  onOpenLightbox(mainSrc, item.title, item.title, item.description)
                }
              >
                <img
                  src={mainSrc}
                  alt={item.title}
                  className={`w-full h-full ${
                    item.category === 'plan' || item.category === 'satellite'
                      ? 'object-contain bg-stone-100 p-2'
                      : 'object-cover'
                  } group-hover:scale-105 transition-transform duration-300`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `/${item.assetKey}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 bg-white/90 rounded-full text-[#5B2A1B] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1.5 border-t border-[#E7D7C4]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#793A27] uppercase tracking-wider bg-[#FAF0E4] px-2 py-0.5 rounded">
                    {item.categoryHindi}
                  </span>
                  <span className="text-[10px] text-stone-400 font-sans">अधिकृत चित्रण</span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#5B2A1B] line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
