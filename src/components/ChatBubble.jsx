import React from "react";
import { motion } from "framer-motion";
const testimonialColumns = [
  [
    {
      type: "received",
      text: `Thank you so much! Hamari business ko digital duniya mein aise boost kiya ki ab leads double ho gayi. Bilkul jugadu strategy!`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    },
    {
      type: "sent",
      text: `Thanks Bhaiya 🙌 Bahut khushi hui yeh sunke. Hamari koshish hamesha rahegi aapka business aur aage badhane ki.`,
      time: "7:20",
      reactions: ["👍", "🔥", "💜"],
      status: "read",
    },
    {
      type: "received",
      text: `Phir se thank you! Professional approach, time pe reporting, aur creative ideas – sab kuch bilkul cost-effective mila.`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    },
  ],
  [
    {
      type: "received",
      text: `Aap ki strategy se hamari business ko sirf zyada leads nahi, balki high-quality leads milne lage. Perfect targeting, hats off!`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces",
    },
    {
      type: "sent",
      text: `That’s amazing 😊 Hum apna aur best denge, zyada qualified leads lane ke liye!`,
      time: "7:20",
      reactions: ["😍", "👏"],
      status: "read",
    },
    {
      type: "received",
      text: `Sach kahun, ab leads aise aate hain jaise perfect match mil gaya ho – relevant aur ready to buy.`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces",
    },
  ],
  [
    {
      type: "received",
      text: `Mujhe pata tha hamari brand ko ek strong identity chahiye... aur aap ne ekdum mast logo design karke diya!`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    },
    {
      type: "sent",
      text: `Glad you loved it 😊`,
      time: "7:20",
      reactions: ["💜", "👍"],
      status: "read",
    },
    {
      type: "received",
      text: `Bilkul! Ab branding kit bhi itni professional bani ki presentations aur social media par sab log compliment karte hain. Thank you so much!`,
      time: "7:20",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    },
  ],
];

const MessageStatus = ({ status }) => {
  if (status !== "read") return <span>✓</span>;

  return (
    <span className="flex items-center -space-x-1 text-[#BFF6FF]">
      <span>✓</span>
      <span>✓</span>
    </span>
  );
};

const Reactions = ({ reactions = [], type }) => {
  if (!reactions.length) return null;

  return (
    <div
      className={`absolute -bottom-3 ${
        type === "sent" ? "right-3" : "left-3"
      } flex items-center gap-1 rounded-full border border-white/60 bg-white px-2 py-1 shadow-md`}
    >
      {reactions.map((reaction, i) => (
        <span key={i} className="text-[12px] leading-none">
          {reaction}
        </span>
      ))}
    </div>
  );
};

const Bubble = ({ msg, index }) => {
  return (
    <div
      className={`flex w-full ${
        msg.type === "sent" ? "justify-end" : "justify-start"
      } animate-bubble`}
      style={{
        animationDelay: `${index * 0.22}s`,
      }}
    >
      <div className="relative max-w-[88%] sm:max-w-[82%]">
        <div
          className={`relative rounded-[20px] px-4 py-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            msg.type === "sent"
              ? "bg-[#39AEB9] text-white rounded-br-[6px]"
              : "bg-[#DEE2E6] text-gray-700 rounded-bl-[6px]"
          }`}
        >
          <span
            className={`absolute bottom-0 ${
              msg.type === "sent"
                ? "right-[-6px] border-l-[10px] border-l-[#39AEB9] border-t-[10px] border-t-transparent"
                : "left-[-6px] border-r-[10px] border-r-[#DEE2E6] border-t-[10px] border-t-transparent"
            } h-0 w-0`}
          />

          <p className="text-sm sm:text-[15px] leading-6 pr-2">{msg.text}</p>

          <div
            className={`mt-2 flex items-center gap-1 text-[11px] ${
              msg.type === "sent" ? "text-white/80" : "text-gray-400"
            }`}
          >
            <span>{msg.time}</span>
            {msg.type === "sent" ? (
              <MessageStatus status={msg.status} />
            ) : (
              <span>✓</span>
            )}
          </div>

          {msg.type === "received" && msg.avatar && (
            <img
              src={msg.avatar}
              alt="user"
              className="absolute -bottom-4 -right-3 h-10 w-10 rounded-full border-2 border-white object-cover shadow-lg"
            />
          )}
        </div>

        <Reactions reactions={msg.reactions} type={msg.type} />
      </div>
    </div>
  );
};

const ChatColumn = ({ messages, colIndex }) => {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gray-100 bg-[#F6F7F9] p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0))]" />

      {/* <div className="relative mb-5 flex items-center justify-between border-b border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-sm font-medium text-gray-600">Client Chat</p>
        </div>
        <p className="text-xs text-gray-400">online</p>
      </div> */}

      <div className="relative flex flex-col gap-6">
        {messages.map((msg, index) => (
          <Bubble
            key={`${colIndex}-${index}`}
            msg={msg}
            index={index + colIndex * 0.5}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const script = "About us";
  return (
    <section className="w-full bg-white px-4 pt-10 pb-20 sm:px-6 lg:px-4 overflow-hidden">
      <div className=" mx-auto flex flex-col">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none font-heading uppercase">
                WHAT
              </h2>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#FEC107] leading-none font-heading uppercase">
                THEY
              </h2>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mt-2 leading-none font-heading uppercase">
              SAY
            </h2>
          </motion.div>

          {/* Script Text with Writing Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-3 overflow-hidden flex"
          >
            {script.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transition: { delay: 0.8 + index * 0.05, duration: 0.3 },
                  },
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-script text-black inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {testimonialColumns.map((column, idx) => (
          <ChatColumn key={idx} messages={column} colIndex={idx} />
        ))}
      </div>

      <style>{`
        @keyframes bubbleFloat {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-bubble {
          animation: bubbleFloat 0.7s ease forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
