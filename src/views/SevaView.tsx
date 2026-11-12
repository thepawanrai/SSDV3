import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { sevasData, SevaItem } from '../config/siteData';
import { Search, Heart, Info, X, Check, ArrowRight } from 'lucide-react';

interface SevaViewProps {
  onOpenDonate: (sevaId?: string, amount?: number) => void;
}

export const SevaView: React.FC<SevaViewProps> = ({ onOpenDonate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [detailSeva, setDetailSeva] = useState<SevaItem | null>(null);

  const categories = [
    { id: 'all', label: 'सभी सेवाएँ (All)' },
    { id: 'general', label: 'मुख्य सेवाएँ' },
    { id: 'construction', label: 'निर्माण कार्य सेवा (३६)' },
    { id: 'temple', label: 'मंदिर दैनिक सेवा' },
    { id: 'bhagwat', label: 'भागवत सेवा' },
    { id: 'community', label: 'साधु, गौ व अन्न दान' },
    { id: 'membership', label: 'आजीवन सदस्यता' },
  ];

  const filteredSevas = useMemo(() => {
    return sevasData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.hindiName.toLowerCase().includes(q) ||
        item.englishName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.purpose.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 font-sans">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#793A27] mb-2 sm:mb-2.5">
          अविरल सेवा प्रवाह
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#5B2A1B] leading-normal pt-1">
          सत्य सनातन धाम सेवा सूची
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-sans max-w-2xl mx-auto">
          अपनी श्रद्धा एवं सामर्थ्यानुसार धर्म, संस्कृति, पर्यावरण एवं मानव सेवा के किसी भी पावन प्रकल्प में सहयोगी बनें।
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E7D7C4] shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="सेवा का नाम खोजें (उदा. गौ सेवा, वृक्षारोपण, राजभोग, धर्मशाला...)"
            className="w-full pl-11 pr-4 py-2.5 bg-[#FAF7F2] border border-[#CBD5E1] rounded-lg text-sm text-[#2D2421] focus:ring-2 focus:ring-[#5B2A1B] focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#5B2A1B] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#3E2B23] hover:bg-[#ECE4D6]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>उपलब्ध सेवा विकल्प: <strong>{filteredSevas.length}</strong></span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#5B2A1B] underline hover:text-[#793A27]"
          >
            खोज रीसेट करें
          </button>
        )}
      </div>

      {/* Seva Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSevas.map((seva) => (
          <div
            key={seva.id}
            className="bg-white rounded-xl border border-[#E7D7C4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-semibold text-[#793A27] bg-[#FAF0E4] px-2 py-0.5 rounded">
                  {seva.categoryHindi}
                </span>
                {seva.amountDisplay ? (
                  <span className="text-sm font-bold text-[#5B2A1B]">
                    {seva.amountDisplay}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-stone-500 italic">
                    योगदान राशि: संपर्क करें
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#5B2A1B] group-hover:text-[#793A27] transition-colors">
                  {seva.hindiName}
                </h3>
                <p className="text-[11px] text-stone-500 font-sans">
                  {seva.englishName}
                </p>
              </div>

              <p className="text-xs text-[#3E2B23] leading-relaxed line-clamp-3">
                {seva.description}
              </p>

              <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E7D7C4]">
                <strong>सेवा प्रयोजन:</strong> {seva.purpose}
              </div>
            </div>

            <div className="p-4 bg-[#FCFAF6] border-t border-[#E7D7C4] flex items-center space-x-2">
              <Link
                to={`/seva/${seva.id}`}
                className="flex-1 py-2 bg-white hover:bg-[#FAF7F2] text-[#5B2A1B] text-xs font-semibold rounded border border-[#CBD5E1] transition-colors cursor-pointer inline-flex items-center justify-center space-x-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>विस्तृत पृष्ठ</span>
              </Link>
              <button
                onClick={() => onOpenDonate(seva.id, seva.amount)}
                className="flex-1 py-2 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center"
              >
                <span>सेवा करें</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSevas.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E7D7C4] space-y-3">
          <p className="font-serif text-lg text-[#5B2A1B]">
            आपकी खोज के अनुसार कोई सेवा नहीं मिली।
          </p>
          <p className="text-xs text-stone-500">
            कृपया अन्य शब्द खोजें अथवा सभी श्रेणियाँ चुनें।
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-[#5B2A1B] text-white text-xs font-bold rounded"
          >
            सभी सेवाएँ देखें
          </button>
        </div>
      )}

      {/* Individual Seva Detail Modal */}
      {detailSeva && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#E7D7C4] rounded-xl max-w-xl w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setDetailSeva(null)}
              className="absolute top-4 right-4 text-stone-500 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-[#793A27] bg-[#FAF0E4] px-2.5 py-1 rounded">
              {detailSeva.categoryHindi}
            </span>

            <div>
              <h3 className="font-serif font-bold text-2xl text-[#5B2A1B]">
                {detailSeva.hindiName}
              </h3>
              <p className="text-xs text-stone-500">{detailSeva.englishName}</p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#E7D7C4] space-y-1">
              <span className="text-xs text-stone-500 block">सहयोग राशि:</span>
              <div className="font-bold text-lg text-[#5B2A1B]">
                {detailSeva.amountDisplay || 'योगदान राशि के लिए संपर्क करें'}
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#3E2B23] leading-relaxed">
              <h4 className="font-bold text-sm text-[#5B2A1B]">सेवा का महत्व एवं पृष्ठभूमि:</h4>
              <p>{detailSeva.description}</p>
            </div>

            <div className="space-y-2 text-xs text-[#3E2B23] leading-relaxed bg-[#FCFAF6] p-3 rounded border border-[#E7D7C4]">
              <h4 className="font-bold text-xs text-[#793A27]">यह सेवा किसमें सहायक होगी?</h4>
              <p>{detailSeva.purpose}</p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button
                onClick={() => {
                  const s = detailSeva;
                  setDetailSeva(null);
                  onOpenDonate(s.id, s.amount);
                }}
                className="flex-1 py-2.5 bg-[#5B2A1B] text-[#FAF7F2] text-xs font-bold rounded hover:bg-[#3E1B10] transition-colors inline-flex items-center justify-center space-x-1.5"
              >
                <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
                <span>इस सेवा में योगदान करें</span>
              </button>
              <button
                onClick={() => setDetailSeva(null)}
                className="px-4 py-2.5 bg-white border border-[#CBD5E1] text-xs font-semibold text-stone-700 rounded hover:bg-stone-50"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
