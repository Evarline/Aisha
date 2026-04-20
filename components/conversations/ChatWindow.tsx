"use client";

import { useState } from "react";
import type { Chat } from "./data";

interface ChatWindowProps {
  currentChat?: Chat;
}

export function ChatWindow({ currentChat }: ChatWindowProps) {
  const [isAiMode, setIsAiMode] = useState(true);

  return (
    <div className="flex md:flex-1 min-w-0 h-full bg-[#FFFFFF] flex-col shrink-0 relative overflow-hidden transition-all duration-300 ease-in-out">
      {/* Top Header Group */}
      <div className="w-full flex flex-col shrink-0 border-b border-gray-200/60 bg-[#FFFFFF]">
        {/* Top Info Header */}
        <div className="bg-[#f7f6f2] w-full py-2 px-4 md:px-6 flex items-center justify-between border-b border-[#E5E5E5] h-[56px] min-w-0">
          <div className="flex flex-col justify-center min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-[16px] text-[#001407] font-['Inter'] font-medium truncate">
                {currentChat ? currentChat.name : "Select Chat"}
              </h2>
              {currentChat && currentChat.status === "Urgent" && (
                <div className="bg-[#E94235] flex items-center justify-center rounded-[6px] px-2 py-0.5 shrink-0">
                  <span className="text-white text-[10px] font-medium font-['Roboto']">URGENT</span>
                </div>
              )}
            </div>
            <div className="flex gap-1.5 items-center min-w-0">
              {currentChat && (
                <>
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8cc00]"></span>
                  </span>
                  <span className="text-[11px] text-gray-500 font-['Inter'] truncate">
                    {isAiMode ? "AI is handling the conversation automatically" : "You are replying"}
                  </span>
                </>
              )}
              {!currentChat && (
                <>
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-300"></span>
                  </span>
                  <span className="text-[11px] text-gray-500 font-['Inter'] truncate">
                    Choose a conversation from the left
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Pill-shaped Toggle Button */}
          {currentChat && (
            <div className="bg-transparent flex items-center gap-2 rounded-full ring-1 ring-gray-300 shadow-sm w-auto h-[36px] p-1 shrink-0 ml-4">
              <button
                onClick={() => setIsAiMode(true)}
                className={`flex items-center justify-center gap-2 rounded-full px-3 h-full shadow-sm cursor-pointer transition-all duration-200 ${
                  isAiMode
                    ? "bg-[#001407]"
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-4 h-4 transition-colors duration-200 ${
                    isAiMode ? "bg-[#D2FF00]" : "bg-[#001407]"
                  }`}
                  style={{
                    WebkitMaskImage: `url('/Icons/Robot.svg')`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url('/Icons/Robot.svg')`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
                <span className={`font-['Inter'] text-[12px] font-medium transition-colors duration-200 ${
                  isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                }`}>
                  AI Mode
                </span>
              </button>
              <button
                onClick={() => setIsAiMode(false)}
                className={`flex items-center justify-center gap-2 rounded-full px-3 h-full cursor-pointer transition-all duration-200 ${
                  !isAiMode
                    ? "bg-[#001407]"
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <svg
                  className={`w-[16px] h-[16px] transition-colors duration-200 ${
                    !isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className={`font-['Inter'] text-[12px] font-medium transition-colors duration-200 ${
                  !isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                }`}>
                  Take Over
                </span>
              </button>
            </div>
          )}
        </div>

        {/* AI Banner */}
        {currentChat && (
          <div className="w-full flex justify-center bg-[#FFFFFF] py-2 min-w-0">
            <div className="bg-[#f7f6f2] border border-gray-200/60 shadow-sm rounded-[16px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] mx-auto h-[48px] flex items-center gap-4 px-3 min-w-0">
              <div className="bg-[#FFFFFF] shadow-sm rounded-[12px] px-4 h-[36px] flex items-center justify-center shrink-0">
                <span className="text-[#001407] font-['Inter'] text-[12px] font-semibold tracking-wide">
                  {isAiMode ? "AI Mode" : "Human Mode"}
                </span>
              </div>
              <span className="text-gray-500 font-['Inter'] text-[12px] font-medium truncate">
                {isAiMode ? "AI is handling the conversation automatically" : "You are now handling this conversation"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Chat Area */}
      {!currentChat ? (
        <div className="flex-1 w-full overflow-y-auto flex items-center justify-center bg-[#FFFFFF] p-4 md:p-6">
          <div className="bg-[#f7f6f2] border border-gray-200/60 rounded-2xl w-full max-w-2xl h-[300px] flex items-center justify-center p-6 shadow-sm">
            <div className="bg-[#FFFFFF] shadow-sm rounded-xl py-4 px-6 flex justify-center items-center">
              <span className="text-[12px] text-gray-500 font-['Roboto'] text-center max-w-[300px] leading-relaxed">
                Start by selecting a conversation on the left. New WhatsApp chats will appear automatically when AI detects them.
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full overflow-y-auto flex flex-col bg-[#FFFFFF] p-4 md:p-6 space-y-4 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          {currentChat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-[16px] px-4 py-2.5 max-w-[70%] md:max-w-[60%] shadow-sm ${
                  message.sender === "user"
                    ? "bg-gray-100 text-black"
                    : "bg-[#001407] text-white"
                }`}
              >
                <p className="text-[13px] font-['Roboto'] leading-relaxed">{message.text}</p>
                <span className={`text-[11px] mt-1 block ${
                  message.sender === "user" ? "text-gray-500" : "text-gray-300"
                }`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Input Bottom - Conditional Rendering */}
      {currentChat && (
        <>
          {isAiMode ? (
            // AI Mode Banner
            <div className="w-full shrink-0 bg-white p-4 border-t border-gray-200/60 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="bg-gradient-to-r from-green-50 to-gray-50 border border-gray-200/60 rounded-[12px] p-6 flex flex-col items-center justify-center min-h-[90px]">
                  <p className="text-[16px] text-center text-gray-600 font-['Roboto'] font-medium">
                    Aisha AI is currently managing this conversation.
                  </p>
                  <p className="text-[12px] text-center text-gray-500 font-['Roboto'] mt-1">
                    Click 'Take Over' to reply manually.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Human Mode Input
            <div className="w-full shrink-0 bg-white p-4 border-t border-gray-200/60 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] flex justify-center">
              <div className="w-full max-w-2xl flex items-center">
                <div className="bg-[#FFFFFF] ring-1 ring-gray-200 shadow-sm rounded-[12px] w-full h-[90px] flex flex-col p-3 relative justify-between focus-within:ring-2 focus-within:ring-[#001407] transition-all">
                  <textarea
                    className="text-[13px] text-[#001407] font-medium font-['Roboto'] w-full bg-transparent resize-none outline-none placeholder:text-gray-400 placeholder:font-normal"
                    placeholder="Type your message..."
                    rows={2}
                  ></textarea>

                  <div className="flex w-full justify-between items-end">
                    <div className="flex gap-4 px-1 items-center">
                      <img
                        src="/Icons/Plus.svg"
                        className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)",
                        }}
                      />
                      <img
                        src="/Icons/SmileyWink.svg"
                        className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)",
                        }}
                      />
                    </div>

                    <div className="flex gap-4 items-center">
                      <img
                        src="/Icons/Microphone.svg"
                        className="w-[16px] h-[16px] cursor-pointer hover:opacity-70 transition-opacity"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(3%) sepia(34%) saturate(6007%) hue-rotate(130deg) brightness(84%) contrast(107%)",
                        }}
                      />
                      <div className="w-[32px] h-[32px] bg-[#001407] rounded-full shadow-sm flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                        <img
                          src="/Icons/ArrowCircleUp.svg"
                          className="w-[18px] h-[18px]"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(98%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
