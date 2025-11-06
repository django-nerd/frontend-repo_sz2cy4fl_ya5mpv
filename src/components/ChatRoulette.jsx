import { useEffect, useRef, useState } from "react";
import { Shuffle, PhoneOff, Mic, MicOff, Video, VideoOff, ShieldAlert } from "lucide-react";
import { useLang } from "../i18n";

export default function ChatRoulette() {
  const { t } = useLang();
  const [partnerFound, setPartnerFound] = useState(false);
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [safe, setSafe] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    const getMedia = async () => {
      try {
        // If user is in Russia or behind restricted networks, avoid external TURN/ICE; only local getUserMedia for preview.
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (e) {
        console.error(e);
      }
    };
    getMedia();
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return (
    <section id="chat" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-emerald-100">{t("chat")}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSafe((s) => !s)}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border ${safe ? "bg-emerald-800/60 border-emerald-700" : "bg-emerald-900/60 border-emerald-800"} text-emerald-100`}
          >
            <ShieldAlert size={18} /> {safe ? t("safeModeOn") : t("safeModeOff")}
          </button>
          <button onClick={() => setPartnerFound(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-emerald-50 font-medium border border-emerald-300/20">
            <Shuffle size={18} /> {t("findPartner")}
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 rounded-lg overflow-hidden border border-emerald-800 bg-black/60 aspect-video">
          <video ref={videoRef} autoPlay playsInline muted={muted} className={`w-full h-full object-cover ${videoOff ? "opacity-0" : "opacity-100"}`} />
          {videoOff && (
            <div className="w-full h-full grid place-items-center text-emerald-200">{t("cameraOff")}</div>
          )}
        </div>
        <div className="rounded-lg border border-emerald-800 bg-emerald-950/60 p-4">
          <div className={`text-sm ${partnerFound ? "text-emerald-300" : "text-emerald-300/70"}`}>
            {partnerFound ? t("partnerConnected") : t("clickFindPartner")}
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={() => setMuted((m) => !m)} className="px-3 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/60 text-emerald-100 border border-emerald-700">
              {muted ? <MicOff size={18} /> : <Mic size={18} />}
            </button>
            <button onClick={() => setVideoOff((v) => !v)} className="px-3 py-2 rounded-md bg-emerald-800/60 hover:bg-emerald-700/60 text-emerald-100 border border-emerald-700">
              {videoOff ? <VideoOff size={18} /> : <Video size={18} />}
            </button>
            <button className="ml-auto px-3 py-2 rounded-md bg-red-600 hover:bg-red-500 text-red-50 border border-red-300/20">
              <PhoneOff size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
