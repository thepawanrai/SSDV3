import React, { useEffect, useState } from 'react';

const MIN_DISPLAY_MS = 2800;
const MAX_WAIT_MS = 4500;
const FADE_OUT_MS = 500;

export const Preloader: React.FC = () => {
  const [fadingOut, setFadingOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let minElapsed = false;
    let pageLoaded = document.readyState === 'complete';
    let finished = false;
    let fadeTimer: number | undefined;

    const triggerFadeOut = () => {
      if (finished) return;
      finished = true;
      setFadingOut(true);
      fadeTimer = window.setTimeout(() => {
        setRemoved(true);
      }, FADE_OUT_MS);
    };

    const tryFinish = () => {
      if (minElapsed && pageLoaded) {
        triggerFadeOut();
      }
    };

    const minTimer = window.setTimeout(() => {
      minElapsed = true;
      tryFinish();
    }, MIN_DISPLAY_MS);

    const maxTimer = window.setTimeout(() => {
      triggerFadeOut();
    }, MAX_WAIT_MS);

    const handleLoad = () => {
      pageLoaded = true;
      tryFinish();
    };

    if (!pageLoaded) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      if (fadeTimer !== undefined) {
        window.clearTimeout(fadeTimer);
      }
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (removed) {
    return null;
  }

  return (
    <div
      role="status"
      aria-label="सत्य सनातन धाम लोड हो रहा है"
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/preloader.gif"
        alt="सत्य सनातन धाम"
        className="w-[320px] sm:w-[460px] md:w-[540px] max-w-[90vw] h-auto object-contain select-none pointer-events-none"
      />
    </div>
  );
};
