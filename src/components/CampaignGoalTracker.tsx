import React, { useState, useEffect } from 'react';
import {
  Target,
  Users,
  Sparkles,
  TreeDeciduous,
  Building2,
  HeartHandshake,
  ArrowRight,
  Clock,
  Flag,
  ShieldCheck,
  TrendingUp,
  Check
} from 'lucide-react';
import { siteConfig } from '../config/siteData';

export interface CampaignGoal {
  id: string;
  sevaId: string;
  title: string;
  englishTitle: string;
  badge: string;
  iconType: 'tree' | 'temple' | 'gau';
  targetAmount: number;
  raisedAmount: number;
  targetUnits: string;
  raisedUnits: string;
  unitLabel: string;
  donorsCount: number;
  milestoneDate: string;
  subtitle: string;
  impactMessage: string;
  suggestedTiers: { amount: number; label: string; highlight?: boolean }[];
  accentGradient: string;
  barGradient: string;
  badgeBg: string;
  badgeText: string;
}

export const CAMPAIGN_GOALS: CampaignGoal[] = [
  {
    id: 'tree-campaign',
    sevaId: 'vriksharopan-seva',
    title: 'वृक्षारोपण महाअभियान (प्रथम चरण)',
    englishTitle: 'वृक्षारोपण महाअभियान — प्रथम चरण',
    badge: 'अभियान प्रारंभ — भव्य प्रगति पर',
    iconType: 'tree',
    targetAmount: 1101100, // 1,100 trees * 1001
    raisedAmount: 236800, // North of ₹2.36 lakh received till now
    targetUnits: '1,100 वृक्ष',
    raisedUnits: '236+ वृक्ष (₹२.३६+ लाख प्राप्त)',
    unitLabel: 'वृक्ष',
    donorsCount: 184,
    milestoneDate: '11 अक्टूबर 2026 (शारदीय नवरात्रि)',
    subtitle: '11,000 वृक्षों के पावन महासंकल्प का प्रथम चरण — 5 वर्षों के पोषण व संरक्षण सहित',
    impactMessage: 'प्रथम चरण में अब तक ₹२.३६ लाख से अधिक (236+ वृक्ष) का पावन सहयोग प्राप्त हो चुका है! अभियान तीव्र गति से निरंतर प्रगति पर है। शेष वृक्षों के संकल्प हेतु आप भी सहभागी बनें।',
    suggestedTiers: [
      { amount: 1001, label: '१ वृक्ष (₹1,001)' },
      { amount: 2001, label: '२ वृक्ष (₹2,001)' },
      { amount: 5001, label: '५ वृक्ष (₹5,001)', highlight: true },
      { amount: 11000, label: '११ वृक्ष (₹11,000)' }
    ],
    accentGradient: 'from-[#194023] via-[#1F542E] to-[#112F19]',
    barGradient: 'from-emerald-500 via-green-500 to-[#194023]',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-900'
  },
  {
    id: 'temple-construction',
    sevaId: 'mandir-nirman-seva',
    title: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर निर्माण',
    englishTitle: 'श्री श्री राधा कृष्ण बिहारी जी मंदिर निर्माण',
    badge: 'प्रथम चरण पाषाण शिला',
    iconType: 'temple',
    targetAmount: 5100000, // 1,000 sq.ft * 5,100
    raisedAmount: 3672000, // 720 sq.ft
    targetUnits: '1,000 वर्ग फीट शिला',
    raisedUnits: '720 वर्ग फीट',
    unitLabel: 'वर्ग फीट',
    donorsCount: 564,
    milestoneDate: 'दिसंबर 2026 (आधारशिला पूर्णता)',
    subtitle: 'पारंपरिक नागर शैली का दिव्य शिखर मंदिर — गर्भगृह व आधार स्तंभों का पावन निर्माण',
    impactMessage: 'प्रथम चरण में केवल 280 वर्ग फीट शिला सेवा शेष है। ठाकुर जी के गर्भगृह में अपने नाम की पावन शिला समर्पित करें।',
    suggestedTiers: [
      { amount: 2600, label: 'आधा वर्ग फीट (₹2,600)' },
      { amount: 5100, label: '१ वर्ग फीट शिला (₹5,100)', highlight: true },
      { amount: 11000, label: '२ वर्ग फीट (₹11,000)' },
      { amount: 51000, label: '१० वर्ग फीट (₹51,000)' }
    ],
    accentGradient: 'from-[#5B2A1B] via-[#7A3B27] to-[#3E1B10]',
    barGradient: 'from-amber-400 via-orange-500 to-[#5B2A1B]',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-900'
  },
  {
    id: 'gau-annakshetra',
    sevaId: 'gau-mata-seva',
    title: 'सुरभि गौशाला एवं नित्य अन्नक्षेत्र',
    englishTitle: 'Surabhi Gaushala & Daily Annakshetra',
    badge: 'मासिक सेवा चक्र',
    iconType: 'gau',
    targetAmount: 500000,
    raisedAmount: 418500,
    targetUnits: '₹5,00,000',
    raisedUnits: '₹4,18,500',
    unitLabel: 'सहयोग',
    donorsCount: 312,
    milestoneDate: 'मासिक निरंतर सेवा',
    subtitle: 'निराश्रित देशी गोवंश का नित्य दलिया, हरा चारा, उपचार एवं साधु-संत महाप्रसादम',
    impactMessage: 'इस माह के लक्ष्य का 84% पूर्ण हो चुका है! गोमाता के हरे चारे और नित्य अन्नक्षेत्र हेतु मात्र ₹81,500 का सहयोग शेष है।',
    suggestedTiers: [
      { amount: 2100, label: 'गो-ग्रास सेवा (₹2,100)' },
      { amount: 3100, label: '1 दिन हरा चारा (₹3,100)', highlight: true },
      { amount: 5100, label: '1 दिन सम्पूर्ण गो-भोजन (₹5,100)' },
      { amount: 11000, label: 'अन्न दान / प्रसादम् (₹11,000)' }
    ],
    accentGradient: 'from-[#8C3A16] via-[#B45309] to-[#68240A]',
    barGradient: 'from-yellow-400 via-amber-500 to-[#8C3A16]',
    badgeBg: 'bg-[#FEF3C7]',
    badgeText: 'text-[#92400E]'
  }
];

interface CampaignGoalTrackerProps {
  selectedSevaId?: string;
  onSelectCampaignSeva?: (sevaId: string, suggestedAmount?: number) => void;
  className?: string;
}

export const CampaignGoalTracker: React.FC<CampaignGoalTrackerProps> = ({
  selectedSevaId,
  onSelectCampaignSeva,
  className = ''
}) => {
  // Determine initial active campaign based on selectedSevaId
  const getCampaignFromSeva = (sevaId?: string): string => {
    if (!sevaId) return CAMPAIGN_GOALS[0].id;
    if (sevaId.includes('vriksharopan') || sevaId.includes('tree')) return 'tree-campaign';
    if (sevaId.includes('mandir') || sevaId.includes('temple') || sevaId.includes('kaksh')) return 'temple-construction';
    if (sevaId.includes('gau') || sevaId.includes('anna') || sevaId.includes('sadhu') || sevaId.includes('bhog')) return 'gau-annakshetra';
    return CAMPAIGN_GOALS[0].id;
  };

  const [activeCampaignId, setActiveCampaignId] = useState<string>(() =>
    getCampaignFromSeva(selectedSevaId)
  );

  // Sync when selectedSevaId changes externally
  useEffect(() => {
    if (selectedSevaId) {
      const match = getCampaignFromSeva(selectedSevaId);
      setActiveCampaignId(match);
    }
  }, [selectedSevaId]);

  const activeCampaign =
    CAMPAIGN_GOALS.find((c) => c.id === activeCampaignId) || CAMPAIGN_GOALS[0];

  const percentage = Math.min(
    100,
    Math.round((activeCampaign.raisedAmount / activeCampaign.targetAmount) * 100)
  );

  const remainingAmount = Math.max(
    0,
    activeCampaign.targetAmount - activeCampaign.raisedAmount
  );

  // Format INR currency
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleCampaignTabClick = (campaign: CampaignGoal) => {
    setActiveCampaignId(campaign.id);
    if (onSelectCampaignSeva) {
      onSelectCampaignSeva(campaign.sevaId, campaign.suggestedTiers[0]?.amount);
    }
  };

  const handleTierClick = (amount: number) => {
    if (onSelectCampaignSeva) {
      onSelectCampaignSeva(activeCampaign.sevaId, amount);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden font-sans transition-all duration-300 ${className}`}
    >
      {/* Top Banner / Campaign Switcher */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B2A1B] flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#C59B27]" />
              लाइव सेवा संकल्प प्रगति ट्रैकर (Live Goal Counter)
            </span>
          </div>

          {/* Campaign Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CAMPAIGN_GOALS.map((camp) => {
              const isActive = camp.id === activeCampaignId;
              return (
                <button
                  key={camp.id}
                  type="button"
                  onClick={() => handleCampaignTabClick(camp)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-[#5B2A1B] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {camp.iconType === 'tree' && <TreeDeciduous className="w-3.5 h-3.5" />}
                  {camp.iconType === 'temple' && <Building2 className="w-3.5 h-3.5" />}
                  {camp.iconType === 'gau' && <HeartHandshake className="w-3.5 h-3.5" />}
                  <span>{camp.badge}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Campaign Progress Display Body */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Campaign Title & Metadata Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeCampaign.badgeBg} ${activeCampaign.badgeText} border-current/20`}
              >
                {activeCampaign.badge}
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                पावन लक्ष्य तिथि: <strong>{activeCampaign.milestoneDate}</strong>
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5B2A1B] tracking-tight">
              {activeCampaign.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              {activeCampaign.subtitle}
            </p>
          </div>

          {/* Donors Count Card */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between bg-[#FAF7F2] p-3 sm:p-3.5 rounded-xl border border-[#E7D7C4] shrink-0">
            <div className="flex items-center space-x-2 text-stone-500 text-xs">
              <Users className="w-4 h-4 text-[#793A27]" />
              <span>समर्पित सेवाधारी</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#5B2A1B] mt-0.5">
              {activeCampaign.donorsCount}+ भक्त
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
              <ShieldCheck className="w-3 h-3" />
              पुष्टिगत दानदाता
            </span>
          </div>
        </div>

        {/* 4-Stat Metric Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* 1. Raised */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-[#FCFAF6] to-[#F5ECE0] border border-[#E7D7C4] shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-stone-500 block">
              प्राप्त सहयोग (Raised)
            </span>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#265B33]">
              {formatINR(activeCampaign.raisedAmount)}
            </div>
            <span className="text-[11px] font-semibold text-[#194023] block">
              {activeCampaign.raisedUnits} समर्पित
            </span>
          </div>

          {/* 2. Target Goal */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F2] border border-[#E7D7C4] shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-[11px] font-medium text-stone-500">
              <span>संकल्प लक्ष्य (Target Goal)</span>
              <Target className="w-3.5 h-3.5 text-[#5B2A1B]" />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#5B2A1B]">
              {formatINR(activeCampaign.targetAmount)}
            </div>
            <span className="text-[11px] text-stone-600 block">
              कुल लक्ष्य: {activeCampaign.targetUnits}
            </span>
          </div>

          {/* 3. Progress Percentage */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F2] border border-[#E7D7C4] shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-stone-500 block">
              प्रगति (Completion)
            </span>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#D97706] flex items-center gap-1.5">
              <span>{percentage}%</span>
              <Sparkles className="w-4 h-4 text-[#D97706]" />
            </div>
            <span className="text-[11px] text-amber-800 font-semibold block">
              लक्ष्य के अत्यंत निकट
            </span>
          </div>

          {/* 4. Remaining to Goal */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F2] border border-[#E7D7C4] shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-[11px] font-medium text-stone-500">
              <span>शेष सहयोग (Needed)</span>
              <Flag className="w-3.5 h-3.5 text-stone-400" />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#793A27]">
              {formatINR(remainingAmount)}
            </div>
            <span className="text-[11px] text-stone-600 block">
              {100 - percentage}% संकल्प शेष
            </span>
          </div>
        </div>

        {/* Visual Progress Bar Section with Milestones */}
        <div className="space-y-3 pt-1">
          {/* Header Row above bar with tooltip marker */}
          <div className="flex items-center justify-between text-xs font-semibold text-stone-600">
            <span className="flex items-center gap-1.5 text-[#5B2A1B]">
              <span className="h-2 w-2 rounded-full bg-[#D97706]"></span>
              प्रगति स्थिति: <strong>{percentage}% पूर्ण</strong>
            </span>
            <span className="text-stone-500 font-mono text-[11px]">
              {formatINR(activeCampaign.raisedAmount)} / {formatINR(activeCampaign.targetAmount)}
            </span>
          </div>

          {/* The Progress Bar Container */}
          <div className="relative">
            {/* Background Track */}
            <div className="w-full h-5 sm:h-6 bg-[#EBE4D8] rounded-full p-1 overflow-hidden shadow-inner border border-[#D5C9B7]">
              {/* Animated Gradient Fill Bar */}
              <div
                className={`h-full rounded-full bg-gradient-to-r ${activeCampaign.barGradient} transition-all duration-1000 ease-out relative overflow-hidden flex items-center justify-end pr-2`}
                style={{ width: `${Math.max(8, percentage)}%` }}
              >
                {/* Subtle Moving Shimmer Effect */}
                <div className="absolute inset-0 bg-white/20 -skew-x-12 animate-pulse"></div>

                {/* Percentage label inside bar for tablet/desktop */}
                <span className="text-[10px] sm:text-[11px] font-black text-white drop-shadow-xs relative z-10 hidden sm:inline">
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Target Flag at 100% */}
            <div className="absolute right-0 -top-7 flex items-center space-x-1 text-[11px] font-bold text-[#5B2A1B]">
              <Flag className="w-3.5 h-3.5 text-[#C59B27] fill-current" />
              <span>१००% लक्ष्य</span>
            </div>
          </div>

          {/* Milestone Checkpoints (25%, 50%, 75%, 100%) */}
          <div className="grid grid-cols-4 text-center text-[10px] sm:text-xs text-stone-500 pt-1 font-medium border-t border-[#F0E6D8]">
            <div className="text-left border-l-2 border-[#265B33] pl-1.5">
              <span className="text-stone-700 font-bold block">प्रारंभ</span>
              <span className="text-[9px] text-stone-500">संकल्प आरंभ</span>
            </div>
            <div className="border-l-2 border-amber-500 pl-1.5">
              <span className="text-stone-700 font-bold block">२५%</span>
              <span className="text-[9px] text-stone-500">प्रारंभिक आधार</span>
            </div>
            <div className="border-l-2 border-emerald-600 pl-1.5">
              <span className="text-stone-700 font-bold block">५०%</span>
              <span className="text-[9px] text-stone-500">अर्ध संकल्प पार</span>
            </div>
            <div className="text-right border-r-2 border-[#5B2A1B] pr-1.5">
              <span className="text-[#5B2A1B] font-bold block">वर्तमान: {percentage}%</span>
              <span className="text-[9px] text-emerald-700 font-semibold">अंतिम चरण</span>
            </div>
          </div>
        </div>

        {/* Motivational Impact Banner & One-Click Contribution Tiers */}
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E7D7C4] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-[#5B2A1B]">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>संकल्प पूर्णता में आपका पावन सहयोग:</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans max-w-xl">
              {activeCampaign.impactMessage}
            </p>
          </div>

          {/* Quick-select amount buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="text-[11px] text-stone-500 font-medium block w-full sm:w-auto">
              त्वरित राशि चुनें:
            </span>
            {activeCampaign.suggestedTiers.map((tier) => (
              <button
                key={tier.amount}
                type="button"
                onClick={() => handleTierClick(tier.amount)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                  tier.highlight
                    ? 'bg-[#5B2A1B] text-[#FAF7F2] shadow-xs hover:bg-[#3E1B10]'
                    : 'bg-white text-[#5B2A1B] border border-[#CBD5E1] hover:bg-[#F5ECE0]'
                }`}
              >
                <span>{tier.label}</span>
                <ArrowRight className="w-3 h-3 opacity-75" />
              </button>
            ))}
          </div>
        </div>

        {/* Live Recent Contributors Ticker (Social Proof) */}
        <div className="pt-2 border-t border-[#F0E6D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold text-[#5B2A1B] flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              हालिया समर्पित सेवाधारी:
            </span>
            <span className="text-[11px] text-stone-600 truncate max-w-sm sm:max-w-md">
              पीयूष सिंह (१ वृक्ष) • डॉ. अरविन्द पटेल (३ वृक्ष) • राजेश शर्मा (५ वृक्ष) • सुनीता वर्मा (२ वृक्ष)
            </span>
          </div>
          <span className="text-[10px] text-stone-500 sm:text-right">
            पारदर्शी अधिकृत बैंक खाता: <strong>State Bank of India</strong> (खाता सं: 45657691676)
          </span>
        </div>
      </div>
    </div>
  );
};
