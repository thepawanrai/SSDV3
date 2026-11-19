import React, { useEffect, useState, useRef } from 'react';
import { Check, X } from 'lucide-react';

interface SocialProofToastProps {
  suspended?: boolean;
}

type NotificationKind = 'seva' | 'member' | 'live';

interface SocialProofItem {
  id: string;
  kind: NotificationKind;
  name?: string;
  initials?: string;
  city?: string;
  actionPrefix?: string;
  highlightText: string;
  liveCount?: string;
  timeAgo?: string;
  avatarBg?: string;
}

const SOCIAL_PROOF_ITEMS: SocialProofItem[] = [
  {
    id: 'seva-gau',
    kind: 'seva',
    name: 'राजेश शर्मा',
    initials: 'रा',
    city: 'अयोध्या',
    actionPrefix: 'ने अभी',
    highlightText: 'गौ सेवा हेतु ₹२,१०० समर्पित किए',
    timeAgo: '५ मिनट पहले',
    avatarBg: 'from-[#5B2A1B] to-[#8C3B22]',
  },
  {
    id: 'live-1',
    kind: 'live',
    liveCount: '३७ श्रद्धालु',
    actionPrefix: 'अभी',
    highlightText: 'इस पृष्ठ को देख रहे हैं',
  },
  {
    id: 'member-pawan',
    kind: 'member',
    name: 'पवन जी',
    initials: 'प',
    actionPrefix: 'अभी',
    highlightText: 'सत्य सनातन धाम के सदस्य बने',
    timeAgo: '२ मिनट पहले',
    avatarBg: 'from-[#D86318] to-[#996C1B]',
  },
  {
    id: 'seva-mandir',
    kind: 'seva',
    name: 'अनिता देवी',
    initials: 'अ',
    city: 'वाराणसी',
    actionPrefix: 'ने अभी',
    highlightText: 'मंदिर निर्माण शिला सेवा हेतु ₹५,१०० समर्पित किए',
    timeAgo: '८ मिनट पहले',
    avatarBg: 'from-[#3E1B10] to-[#5B2A1B]',
  },
  {
    id: 'live-2',
    kind: 'live',
    liveCount: '४२ श्रद्धालु',
    actionPrefix: 'अभी',
    highlightText: 'इस वेबसाइट से जुड़े हैं',
  },
  {
    id: 'seva-annadaan',
    kind: 'seva',
    name: 'महेश अग्रवाल',
    initials: 'म',
    city: 'दिल्ली',
    actionPrefix: 'ने अभी',
    highlightText: 'अन्नदान महाअभियान हेतु ₹२,५०० समर्पित किए',
    timeAgo: '११ मिनट पहले',
    avatarBg: 'from-[#265B33] to-[#194023]',
  },
  {
    id: 'seva-vriksh',
    kind: 'seva',
    name: 'सुनीता मिश्रा',
    initials: 'सु',
    city: 'प्रयागराज',
    actionPrefix: 'ने अभी',
    highlightText: 'वृक्षारोपण सेवा हेतु ₹१,००१ समर्पित किए',
    timeAgo: '१४ मिनट पहले',
    avatarBg: 'from-[#194023] to-[#3D7A4D]',
  },
  {
    id: 'member-pawan-2',
    kind: 'member',
    name: 'पवन जी',
    initials: 'प',
    actionPrefix: 'सत्य सनातन धाम के',
    highlightText: 'गौरवशाली सदस्य के रूप में जुड़े',
    timeAgo: 'अभी',
    avatarBg: 'from-[#D86318] to-[#5B2A1B]',
  },
  {
    id: 'seva-gurukul',
    kind: 'seva',
    name: 'राकेश तिवारी',
    initials: 'रा',
    city: 'लखनऊ',
    actionPrefix: 'ने अभी',
    highlightText: 'गुरुकुल विद्यादान सेवा हेतु ₹२,५०० समर्पित किए',
    timeAgo: '१८ मिनट पहले',
    avatarBg: 'from-[#996C1B] to-[#5B2A1B]',
  },
];

// Animation timing: slides up from bottom after every 4 seconds, stays visible for 5 seconds, slides back down to bottom
const INITIAL_DELAY_MS = 4000;
const VISIBLE_DURATION_MS = 5000;
const BETWEEN_TOASTS_MS = 4000;

export const SocialProofToast: React.FC<SocialProofToastProps> = ({ suspended = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef<number | null>(null);
  const hasShownFirstRef = useRef<boolean>(false);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (isDismissed || suspended) {
      clearTimer();
      setIsVisible(false);
      return;
    }

    if (isHovered) {
      clearTimer();
      return;
    }

    clearTimer();

    if (isVisible) {
      // Visible -> stays for 5 seconds, then slides back down to the bottom
      timerRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, VISIBLE_DURATION_MS);
    } else {
      // Hidden -> waits 4 seconds at the bottom, advances to next item (after first), and slides up from bottom
      const delay = !hasShownFirstRef.current ? INITIAL_DELAY_MS : BETWEEN_TOASTS_MS;
      timerRef.current = window.setTimeout(() => {
        if (!hasShownFirstRef.current) {
          hasShownFirstRef.current = true;
        } else {
          setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_ITEMS.length);
        }
        setIsVisible(true);
      }, delay);
    }

    return () => clearTimer();
  }, [isVisible, isDismissed, suspended, isHovered]);

  if (isDismissed || suspended) {
    return null;
  }

  const item = SOCIAL_PROOF_ITEMS[currentIndex];

  return (
    <div
      aria-live="polite"
      className="fixed bottom-[114px] md:bottom-5 left-3 right-3 sm:right-auto sm:left-5 z-30 pointer-events-none overflow-hidden py-1"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`pointer-events-auto relative inline-flex items-center gap-3 max-w-[355px] sm:max-w-[390px] rounded-lg bg-white/95 backdrop-blur-md border border-[#E7D7C4] pl-3 pr-8 py-2.5 shadow-[0_10px_28px_-6px_rgba(62,27,16,0.22)] transition-all duration-300 ${
          isVisible
            ? 'translate-y-0 opacity-100 ease-out'
            : 'translate-y-[140%] opacity-0 ease-in pointer-events-none'
        }`}
      >
        {/* Left Visual Indicator */}
        {item.kind === 'live' ? (
          <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-emerald-400/50 animate-ping" />
            <span className="relative w-3 h-3 rounded-full bg-emerald-600 shadow-sm shadow-emerald-600/40" />
          </div>
        ) : (
          <div
            className={`relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
              item.avatarBg || 'from-[#5B2A1B] to-[#3E1B10]'
            } text-[#DFB25A] flex items-center justify-center font-serif font-bold text-base border-2 border-[#DFB25A]/50 shadow-sm`}
          >
            <span>{item.initials}</span>
            <img
              src="/ssd-logo-transparent.png"
              alt=""
              className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white p-0.5 border border-[#E7D7C4] object-contain"
            />
          </div>
        )}

        {/* Notification Content (100% Hindi) */}
        <div className="min-w-0 flex flex-col">
          <p className="text-[12.5px] sm:text-[13px] leading-snug text-[#1E293B]">
            {item.kind === 'live' ? (
              <>
                <span className="font-bold text-[#1E293B]">{item.liveCount}</span>{' '}
                <span className="text-[#475569]">{item.actionPrefix} </span>
                <span className="font-semibold text-[#5B2A1B]">{item.highlightText}</span>
              </>
            ) : (
              <>
                <span className="font-bold text-[#1E293B]">{item.name}</span>
                {item.city ? (
                  <span className="text-[#64748B] text-[11.5px]"> ({item.city})</span>
                ) : null}{' '}
                <span className="text-[#475569]">{item.actionPrefix} </span>
                <span className="font-semibold text-[#5B2A1B]">{item.highlightText}</span>
              </>
            )}
          </p>

          {/* Timestamp + Verified by Satya Sanatan Dham */}
          <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-[#64748B]">
            {item.timeAgo && (
              <>
                <span>{item.timeAgo}</span>
                <span aria-hidden="true">•</span>
              </>
            )}
            <span className="inline-flex items-center gap-1 font-medium text-[#194023]">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#5B2A1B] text-white shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>सत्य सनातन धाम द्वारा सत्यापित</span>
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="सूचना बंद करें"
          className="absolute top-1.5 right-1.5 p-0.5 rounded text-slate-400 hover:text-[#5B2A1B] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
