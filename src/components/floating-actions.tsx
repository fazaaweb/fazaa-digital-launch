import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site-config";
import { generateFazzaResponse } from "@/lib/fazza-assistant";
import { Bot, Sparkles, X, Send, ArrowLeft } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  quickActions?: { label: string; action: () => void }[];
}

export function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" });
  };

  const defaultQuestions = [
    "ماذا تقدم فزعة ويب؟",
    "أريد موقعاً لشركتي",
    "هل تصممون متجراً إلكترونياً؟",
    "كم يستغرق تنفيذ الموقع؟",
    "كيف يتم تحديد الأسعار؟",
  ];

  const [quickQuestions, setQuickQuestions] = useState<string[]>(defaultQuestions);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "مرحباً بك في فزعة ويب! 👋\nشعارنا: «نصنع حضورًا رقميًا يليق بمشروعك.»\n\nأنا «فَزّاع» مساعد الموقع الذكي، يسعدني مساعدتك في التعرف على خدماتنا، تحديد احتياج مشروعك، وتجهيز متطلباتك قبل التواصل مع الفريق.\n\nما نوع مشروعك أو الفكرة التي تفكر فيها؟",
      time: getCurrentTime(),
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Call Fazza reasoning engine based on the official 50-rule constitution
    setTimeout(() => {
      const response = generateFazzaResponse(query);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        time: getCurrentTime(),
      };

      if (response.quickPrompts && response.quickPrompts.length > 0) {
        setQuickQuestions(response.quickPrompts);
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 650);
  };

  return (
    <>
      {/* Floating Action Container in Bottom-Left */}
      <aside
        aria-label="المساعد الذكي والتواصل السريع"
        className="fixed bottom-[max(2.5rem,env(safe-area-inset-bottom))] sm:bottom-[max(3rem,env(safe-area-inset-bottom))] left-[max(1.25rem,env(safe-area-inset-left))] z-40 flex flex-col items-center gap-2.5"
      >
        {/* 1. Fazza AI Assistant Floating Button (Top Button - Exactly 10px above WhatsApp) */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => setIsChatOpen((prev) => !prev)}
            aria-label={
              isChatOpen ? "إغلاق المساعد الذكي فَزّاع" : "فتح المساعد الذكي فَزّاع للدردشة"
            }
            aria-expanded={isChatOpen}
            className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isChatOpen
                ? "bg-primary shadow-[0_0_25px_rgba(var(--primary),0.6)] ring-2 ring-primary"
                : "bg-gradient-to-tr from-blue-700 via-primary to-cyan-500 shadow-lg shadow-primary/35 hover:shadow-primary/50"
            }`}
          >
            {/* Subtle Neon Pulse Aura */}
            {!isChatOpen && (
              <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-primary/30 opacity-75" />
            )}

            {/* Online Status Badge */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            {/* Custom AI Assistant Icon */}
            {isChatOpen ? (
              <X className="h-6 w-6 transition-transform duration-200" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Bot className="h-7 w-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-cyan-200 animate-pulse" />
              </div>
            )}
          </button>

          {/* Tooltip on Desktop */}
          <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden whitespace-nowrap rounded-lg bg-card border border-primary/30 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
            المساعد الذكي «فَزّاع»
          </span>
        </div>

        {/* 2. Official WhatsApp Floating Button (Bottom Button - Preserved untouched) */}
        <div className="relative group">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تحدث معنا عبر واتساب"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {/* Ping Animation */}
            <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366]/40 opacity-75" />

            {/* Official WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {/* Tooltip */}
            <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 sm:block">
              تحدث معنا عبر واتساب
            </span>
          </a>
        </div>
      </aside>

      {/* 3. Fazza Interactive AI Chatbot Window */}
      {isChatOpen && (
        <div
          role="dialog"
          aria-label="محادثة المساعد الذكي فَزّاع"
          className="fixed bottom-[max(7rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] right-[max(1rem,env(safe-area-inset-right))] sm:right-auto sm:w-[380px] z-50 flex flex-col h-[520px] max-h-[80vh] rounded-2xl border border-primary/30 bg-[#0B1120]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(var(--primary),0.25)] overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-md shadow-primary/30">
                <Bot className="h-6 w-6 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#0B1120]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-foreground">فَزّاع</h3>
                  <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  مستشارك الذكي • متصل الآن
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              aria-label="إغلاق المحادثة"
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-start" : "items-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none shadow-md shadow-primary/20"
                      : "bg-white/[0.07] border border-white/10 text-foreground rounded-bl-none shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="mt-1 px-1 text-[10px] text-muted-foreground/60">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-xl bg-white/[0.05] border border-white/10 px-3 py-2 w-fit text-xs text-primary">
                <Bot className="h-4 w-4 animate-bounce" />
                <span>فَزّاع يكتب...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="border-t border-white/10 bg-white/[0.02] p-2.5">
            <p className="mb-1.5 text-[10px] text-muted-foreground/80 px-1 font-medium">
              أسئلة شائعة وسريعة:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none [scrollbar-width:none]">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendMessage(q)}
                  className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Action */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="border-t border-white/10 bg-[#0B1120] p-3 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="اكتب استفسارك هنا لفَزّاع..."
              className="flex-1 rounded-xl border border-white/15 bg-white/[0.05] px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              aria-label="إرسال"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30 transition-all hover:bg-primary/90 disabled:opacity-40 disabled:pointer-events-none active:scale-95"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Escalation to WhatsApp footer */}
          <div className="border-t border-white/5 bg-white/[0.02] px-3 py-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>تحتاج رداً بشرياً فورياً؟</span>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#25D366] hover:underline"
            >
              <span>واتساب</span>
              <ArrowLeft className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
