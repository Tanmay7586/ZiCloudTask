import React, { useState } from "react";
import { Search, Mic } from "lucide-react";
import CopyIcon from "../icons/copy.svg";
import RetryIcon from "../icons/retry.svg";

const ChatSection = () => {
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, text: "Hello I’m Oslo. Tell me what’s on your mind", sender: "bot" },
    { id: 2, text: "Create leads on Tech targets.", sender: "user" },
    {
      id: 3,
      text: "ICP updated to target Tech Companies. If you want to specify roles, locations, or other criteria for decision-makers, please let me know",
      sender: "bot",
    },
  ];

  return (
    <section className="flex-1 p-8 bg-white flex flex-col">
      <div className="flex-1 space-y-6 mb-6 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" ? (
              <div className="flex flex-col items-start gap-2">
                <div className="px-4 py-3 rounded-2xl shadow-sm max-w-xl text-sm bg-gray-50 text-gray-700">
                  {msg.text}
                </div>
                <div className="flex items-center gap-3 pl-1">
                  <img src={CopyIcon} alt="Copy" className="w-4 h-4 cursor-pointer opacity-60 hover:opacity-100 transition" />
                  <img src={RetryIcon} alt="Retry" className="w-4 h-4 cursor-pointer opacity-60 hover:opacity-100 transition" />
                </div>
              </div>
            ) : (
              <div className="px-4 py-3 rounded-2xl shadow-sm max-w-xl text-sm bg-purple-50 text-black ">
                {msg.text}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="w-full bg-gray-50 rounded-full px-4 py-3 shadow-inner flex items-center gap-3 sticky bottom-6 left-0">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center cursor-pointer">
            <Mic className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
