import React, { useState } from "react";
import FloatingMessageIcon from "./FloatingMessageIcon";
import { FaRobot } from 'react-icons/fa';

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleMessageClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate a bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Sure! I’m here to help with any questions you have.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      <FloatingMessageIcon onClick={handleMessageClick} />

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "350px",
            height: "400px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 2px 15px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1001,
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>Chat Support</span>
                    <FaRobot size={20} />
                </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#e5e5ea" : "#007bff",
                  color: msg.sender === "user" ? "#000" : "#fff",
                  borderRadius: "15px",
                  padding: "10px 14px",
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input box */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #ddd",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                border: "1px solid #ccc",
                borderRadius: "20px",
                padding: "8px 12px",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "8px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "8px 14px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Floating;
