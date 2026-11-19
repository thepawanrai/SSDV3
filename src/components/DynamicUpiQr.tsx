import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { siteConfig } from '../config/siteData';

// Exact merchant UPI VPA & Payee Name decoded from the official Satya Sanatan Dham QR
const OFFICIAL_UPI_PA = '9453160074@ptsbi';
const OFFICIAL_UPI_PN = 'SATYA SANATAN DHAM';

export function buildUpiPaymentUri(
  amount?: number | string,
  sevaNote?: string
): { uri: string; validAmount: number | null } {
  const numeric =
    typeof amount === 'number'
      ? amount
      : Number(String(amount ?? '').replace(/[^\d.]/g, ''));

  const isValidAmount = Number.isFinite(numeric) && numeric > 0;
  const pnEncoded = encodeURIComponent(OFFICIAL_UPI_PN);

  if (!isValidAmount) {
    return {
      uri: `upi://pay?pa=${OFFICIAL_UPI_PA}&pn=${pnEncoded}`,
      validAmount: null,
    };
  }

  const formattedAm = Number.isInteger(numeric)
    ? String(numeric)
    : numeric.toFixed(2);

  const cleanAsciiNote = (sevaNote || 'Satya Sanatan Dham Seva')
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 45);

  const tn = encodeURIComponent(cleanAsciiNote || 'Satya Sanatan Dham Seva');

  return {
    uri: `upi://pay?pa=${OFFICIAL_UPI_PA}&pn=${pnEncoded}&am=${formattedAm}&cu=INR&tn=${tn}`,
    validAmount: numeric,
  };
}

interface DynamicUpiQrProps {
  amount?: number | string;
  sevaName?: string;
  sizeClass?: string;
  compact?: boolean;
}

export const DynamicUpiQr: React.FC<DynamicUpiQrProps> = ({
  amount,
  sevaName,
  sizeClass = 'w-36 h-36',
  compact = false,
}) => {
  const { uri, validAmount } = buildUpiPaymentUri(amount, sevaName);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (!validAmount) {
      setQrDataUrl('');
      return;
    }

    let isMounted = true;
    QRCode.toDataURL(uri, {
      width: 340,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    })
      .then((url) => {
        if (isMounted) setQrDataUrl(url);
      })
      .catch((err) => {
        console.error('Dynamic QR generation error:', err);
        if (isMounted) setQrDataUrl('');
      });

    return () => {
      isMounted = false;
    };
  }, [uri, validAmount]);

  const displaySrc =
    validAmount && qrDataUrl ? qrDataUrl : siteConfig.payment.qrCodeUrl;

  return (
    <div className="inline-flex flex-col items-center">
      <div className="p-2 bg-white rounded-xl border border-[#DFB25A]/60 shadow-2xs">
        <img
          src={displaySrc}
          alt={
            validAmount
              ? `सत्य सनातन धाम ₹${validAmount.toLocaleString('en-IN')} UPI QR कोड`
              : 'सत्य सनातन धाम आधिकारिक UPI QR कोड'
          }
          className={`${sizeClass} object-contain mx-auto`}
        />
      </div>
    </div>
  );
};
