import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  description?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  const [zoom, setZoom] = React.useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-between p-4 backdrop-blur-xs select-none"
      onClick={onClose}
    >
      {/* Top Header */}
      <div
        className="w-full max-w-6xl flex items-center justify-between py-2 text-white/90 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span className="font-serif font-bold text-base sm:text-lg text-white">
            {title || imageAlt}
          </span>
          {description && (
            <span className="text-xs text-stone-300 font-sans">{description}</span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.3, 3))}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.3, 0.7))}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom(1)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-red-600/80 rounded-full transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="flex-1 w-full flex items-center justify-center overflow-auto p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[80vh] max-w-full object-contain transition-transform duration-200 rounded-md shadow-2xl"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      {/* Footer Info */}
      <div className="w-full text-center text-xs text-stone-400 py-1 font-sans">
        सत्य सनातन धाम • आधिकारिक एवं सुरक्षित चित्रण
      </div>
    </div>
  );
};
