import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

// Icono de círculo con ondas concéntricas (simula reproducción)
const BroadcastIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    strokeWidth={2.5}
    {...props}
  >
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <circle cx="24" cy="24" r="10" strokeOpacity=".7" />
    <circle cx="24" cy="24" r="16" strokeOpacity=".4" />
  </svg>
);

type Message = {
  who: "user" | "bot";
  text: string;
  isButton?: boolean;
};

const demoMessages: Message[] = [
  { who: "user", text: "Hola, ¿tenéis hueco para mañana por la tarde?" },
  { who: "bot", text: "¡Hola! 😊 Sí tenemos disponibilidad. ¿Qué servicio necesitas?\n\n• Corte (30 min) - 25€\n• Color (90 min) - 45€\n• Mechas (120 min) - 65€\n• Peinado (45 min) - 30€" },
  { who: "user", text: "Mechas + peinado, por favor." },
  { who: "bot", text: "Perfecto! Mechas + peinado son 2h 45min total.\n\nTenemos disponible:\n🕐 16:00 - 18:45\n🕕 18:30 - 21:15\n\n¿Cuál prefieres?" },
  { who: "user", text: "A las 18:30 me va genial." },
  { who: "bot", text: "¡Excelente! 🎉\n\nResumen de tu cita:\n📅 Mañana 18:30\n✂️ Mechas + Peinado\n💰 95€ total\n⏱️ Duración: 2h 45min\n\nTe dejo el botón para confirmar:" },
  { who: "bot", text: "", isButton: true },
];

function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [buttonConfirmed, setButtonConfirmed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const playTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (playTimeout.current) clearTimeout(playTimeout.current);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  function startDemo() {
    setMessages([]);
    setIsPlaying(true);
    setIsPaused(false);
    setCurrentIdx(0);
    setButtonConfirmed(false);
    playNext(0);
  }


  function playNext(idx: number) {
    if (idx >= demoMessages.length) {
      setIsPlaying(false);
      return;
    }
    setCurrentIdx(idx);
    const msg = demoMessages[idx];
    if (msg.isButton) {
      setMessages((prev) => [...prev, msg]);
      setIsPlaying(false);
      return;
    }
    // Typewriter effect
    let charIdx = 0;
    function typeChar() {
      charIdx++;
      setMessages((prev) => {
        const prevMsgs = [...prev];
        if (prevMsgs[prevMsgs.length - 1]?.who === msg.who && prevMsgs[prevMsgs.length - 1]?.text !== undefined && prevMsgs[prevMsgs.length - 1]?.text.length < msg.text.length) {
          // Update last message
          prevMsgs[prevMsgs.length - 1] = { ...msg, text: msg.text.slice(0, charIdx) };
        } else {
          // Add new message
          prevMsgs.push({ ...msg, text: msg.text.slice(0, charIdx) });
        }
        return prevMsgs;
      });
      if (charIdx < msg.text.length) {
        playTimeout.current = setTimeout(typeChar, 18 + Math.random() * 30);
      } else {
        playTimeout.current = setTimeout(() => {
          if (!isPaused) playNext(idx + 1);
        }, msg.who === "user" ? 600 : 1100);
      }
    }
    typeChar();
  }

  function handlePausePlay() {
    if (isPlaying && !isPaused) {
      setIsPaused(true);
      if (playTimeout.current) clearTimeout(playTimeout.current);
    } else if (isPlaying && isPaused) {
      setIsPaused(false);
      playNext(currentIdx + 1);
    } else if (!isPlaying) {
      startDemo();
    }
  }

  function handleConfirm() {
    setButtonConfirmed(true);
    setMessages((prev) => [
      ...prev,
      { who: "bot", text: "¡Perfecto! Tu cita está confirmada. Te enviaremos un recordatorio 1 hora antes. ¡Nos vemos mañana! 💇‍♀️✨" },
    ]);
  }

  return (
    <>
      {/* Oculta la barra de scroll en navegadores modernos */}
      <style>{'.scrollbar-hide::-webkit-scrollbar{display:none;}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none;}'}</style>
      <div className="w-full max-w-xs md:max-w-md mx-auto bg-blue-950 rounded-2xl overflow-hidden border-2 border-blue-700">
      {/* Header */}
      <div className="p-4 border-b border-gray-600" style={{background: 'linear-gradient(90deg, #232526 0%, #303233ff 100%)'}}>
        <div className="flex items-center">
          <div className="bg-gray-400/80 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white text-lg font-bold">
            ✂️

          </div>
          <div>
            <h2 className="text-white font-semibold">Demo ChatBot para Peluquerías</h2>
            <p className="text-blue-200 text-sm">Asistente Virtual • En línea</p>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div
        className="h-[32rem] overflow-y-auto p-4 space-y-4 bg-black relative scrollbar-hide"
        style={{scrollBehavior:'smooth'}}
      >
        {/* Botón grande de play centrado en el área de mensajes */}
        {messages.length === 0 && !isPlaying && !isPaused && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={handlePausePlay}
              className="flex flex-row items-center justify-center gap-4 p-4 bg-blue-800/90 hover:bg-blue-800/80 text-white rounded-xl"
              style={{ width: 200, height: 60, fontSize: 32, opacity: 0.8 }}
              aria-label="Iniciar demo"
            >
                <span className="flex w-11 justify-start">
                  <BroadcastIcon className="w-12 h-12" />
                </span>
                <span className="flex w-32 justify-end text-lg font-semibold">Iniciar demo</span>
            </button>
          </div>
        )}
        {/* Agrupar mensajes consecutivos del mismo remitente */}
        {(() => {
          const grouped: { who: "user" | "bot"; items: Message[] }[] = [];
          let lastWho: "user" | "bot" | null = null;
          messages.forEach((msg) => {
            if (msg.isButton) {
              grouped.push({ who: "bot", items: [msg] });
              lastWho = null;
              return;
            }
            if (msg.who === lastWho) {
              grouped[grouped.length - 1].items.push(msg);
            } else {
              grouped.push({ who: msg.who, items: [msg] });
              lastWho = msg.who;
            }
          });
          return grouped.map((group, i) => (
            <div key={i} className={`flex ${group.who === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`bubble ${group.who === "user" ? "from-user" : "from-bot"}`}
                style={{
                  maxWidth: '85%',
                  borderRadius: group.who === "user"
                    ? '22px 22px 6px 22px'
                    : '22px 22px 22px 6px',
                  padding: '12px 18px',
                  marginBottom: 4,
                  background: group.who === "user"
                    ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
                    : 'linear-gradient(135deg, #22223b 0%, #37306b 100%)',
                  color: group.who === "user" ? '#fff' : '#e0e7ff',
                  boxShadow: group.who === "user"
                    ? '0 2px 8px rgba(59,130,246,0.10)'
                    : '0 2px 8px rgba(55,48,163,0.10)'
                }}
              >
                {group.items.map((message, j) =>
                  message.isButton ? (
                    <button
                      key={j}
                      className="booking-button"
                      style={{background:'linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%)', color:'#fff', padding:'12px 20px', borderRadius:'25px', fontWeight:600, fontSize:14, marginTop:8, boxShadow:'0 4px 12px rgba(255,107,107,0.3)'}}
                      onClick={handleConfirm}
                      disabled={buttonConfirmed}
                    >
                      {buttonConfirmed ? '✅ ¡Cita Confirmada!' : '✅ Confirmar Cita 18:30'}
                    </button>
                  ) : (
                    <span key={j} style={{whiteSpace:'pre-wrap', fontFamily:'inherit', display:'block', marginBottom: group.items.length > 1 && j !== group.items.length-1 ? 8 : 0}}>{message.text}</span>
                  )
                )}
              </div>
            </div>
          ));
        })()}
        <div ref={messagesEndRef} />
      </div>
      {/* Controls */}
      <div className="p-3 text-xs text-blue-300 text-center flex items-center justify-between gap-2 border-t border-gray-600" style={{background: 'linear-gradient(90deg, #232526 0%, #303233ff 100%)'}}>
        <button
          onClick={handlePausePlay}
          className="rounded-full bg-blue-700/80 hover:bg-blue-800/80 text-white p-2 transition-all flex items-center justify-center hover:shadow-[0_0_10px] shadow-blue-500"
          style={{minWidth:40, minHeight:40, opacity: 0.8}}
        >
          {isPlaying && !isPaused ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <span className="flex-1 text-center">💡 <strong>Demo automática:</strong> El flujo de reserva se muestra paso a paso</span>
      </div>
  </div>
  </>
  );
}

export default ChatBot;
