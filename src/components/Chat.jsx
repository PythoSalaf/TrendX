import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdSend } from "react-icons/io";
const MessageBubble = ({ text, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`px-4 py-2 rounded-xl max-w-[80%] text-sm md:text-base shadow ${
          isUser
            ? "bg-[#FD6708] text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const mockReplies = [
        "Interesting! Tell me more.",
        "That's awesome 👏",
        "Got it. What's next?",
        "Cool! I'm listening...",
        "Sounds good to me.",
      ];

      const randomReply =
        mockReplies[Math.floor(Math.random() * mockReplies.length)];

      setMessages((prev) => [...prev, { text: randomReply, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto bg-transparent px-4">
      {/* Chat Messages */}
      <div className="  py-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="sticky bottom-5 bg-[#F7D2BA80] z-20 px-3  shadow py-1 md:py-3 rounded-4xl">
        <div className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask anything on crypto trend and analysis on X............."
            className="w-full pr-10 px-4 py-2 text-[#030F3966] focus:outline-none focus:ring-0"
          />
          <button
            onClick={sendMessage}
            className="absolute right-2 top-1/2 text-2xl md:text-3xl cursor-pointer -translate-y-1/2 text-[#FD6708]  transition"
          >
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
