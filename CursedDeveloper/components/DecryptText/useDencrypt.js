import { useState, useRef, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>/?|\\"\'`~';

export function useDencrypt() {
  const [result, setResult] = useState('');
  const intervalRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const dencrypt = (value = '') => {
    if (!mountedRef.current) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    const target = String(value);
    const totalFrames = Math.max(10, target.length * 6);
    let frame = 0;

    intervalRef.current = setInterval(() => {
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * target.length);

      let display = target
        .split('')
        .map((ch, idx) => (idx < revealCount ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join('');

      if (mountedRef.current) setResult(display);

      frame += 1;
      if (frame >= totalFrames) {
        if (mountedRef.current) setResult(target);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 30);
  };

  return { result, dencrypt };
}

export default useDencrypt;
