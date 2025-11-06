import React, { useEffect, useRef, useState } from 'react';
import { Camera, MicOff, Mic, Play, Square } from 'lucide-react';
import { useLang } from '../i18n';

export default function ChatPreview() {
  const { t } = useLang();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [safe, setSafe] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((tr) => tr.stop());
      }
    };
  }, [stream]);

  const start = async () => {
    setError('');
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: !safe });
      setStream(s);
      if (videoRef.current) {
        videoRef.current.srcObject = s;
        await videoRef.current.play();
      }
    } catch (e) {
      if (e && e.name === 'NotAllowedError') setError(t('chat.errorDenied'));
      else setError(t('chat.errorGeneric'));
    }
  };

  const stop = () => {
    if (stream) {
      stream.getTracks().forEach((tr) => tr.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
    }
  };

  return (
    <section id="chat" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2"><Camera className="h-6 w-6" /> {t('chat.title')}</h2>
          <button
            onClick={() => setSafe((s) => !s)}
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
            aria-pressed={!safe}
          >
            {safe ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            <span>{safe ? t('chat.safeOn') : t('chat.safeOff')}</span>
          </button>
        </div>

        <div className="grid md:grid-cols-[1fr_260px] gap-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-black/5 border border-gray-200">
            <video ref={videoRef} className="h-full w-full object-cover" muted={safe} playsInline />
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">{t('chat.note')}</p>
            {error ? (
              <div className="text-sm text-red-600">{error}</div>
            ) : null}
            <div className="flex gap-3">
              <button onClick={start} className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900">
                <Play className="h-4 w-4" /> {t('chat.start')}
              </button>
              <button onClick={stop} className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <Square className="h-4 w-4" /> {t('chat.stop')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
