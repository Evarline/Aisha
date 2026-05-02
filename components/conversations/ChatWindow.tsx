"use client";

import { useState } from "react";
import type { Chat } from "./data";

interface ChatWindowProps {
  currentChat?: Chat;
  onBackClick?: () => void;
  isMobileOverlay?: boolean;
}

export function ChatWindow({ currentChat, onBackClick, isMobileOverlay }: ChatWindowProps) {
  const [isAiMode, setIsAiMode] = useState(true);

  return (
    <div className={`w-full flex flex-col ${isMobileOverlay ? "h-[100dvh]" : "h-full md:h-full"} bg-white overflow-hidden`}>
      {/* Top Header Group - flex-none */}
      <div className="flex-none w-full border-b border-gray-200/60 bg-white">
        {/* Top Info Header - With Back Button on Mobile */}
        <div className="w-full px-4 md:px-6 pt-4 md:pt-2 pb-3 flex items-center justify-between border-b border-gray-200/60 min-h-[56px]">
          <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
            {onBackClick && (
              <button
                onClick={onBackClick}
                className="md:hidden p-1 sm:p-1.5 -ml-1 text-[#001407] hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <span className="text-[16px] sm:text-[18px] leading-none">←</span>
              </button>
            )}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                <h2 className="text-[14px] sm:text-[16px] text-[#001407] font-['Inter'] font-medium truncate">
                  {currentChat ? currentChat.name : "Select Chat"}
                </h2>
                {currentChat && currentChat.status === "Urgent" && (
                  <div className="bg-[#E94235] flex items-center justify-center rounded-[6px] px-1.5 sm:px-2 py-0.5 shrink-0">
                    <span className="text-white text-[9px] sm:text-[10px] font-medium font-['Roboto']">URGENT</span>
                  </div>
                )}
              </div>
              <div className="flex gap-1 items-center min-w-0">
                {currentChat && (
                  <>
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8cc00]"></span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-500 font-['Inter'] truncate">
                      {isAiMode ? "AI handling" : "You replying"}
                    </span>
                  </>
                )}
                {!currentChat && (
                  <>
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-300"></span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-500 font-['Inter'] truncate">
                      Choose a chat
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Pill-shaped Toggle Button - Compact on Mobile */}
          {currentChat && (
            <div className="bg-transparent flex items-center gap-1 rounded-full ring-1 ring-gray-300 shadow-sm h-[32px] sm:h-[36px] p-0.5 sm:p-1 shrink-0 ml-2 sm:ml-4">
              <button
                onClick={() => setIsAiMode(true)}
                className={`flex items-center justify-center gap-1 rounded-full px-2 sm:px-3 h-full shadow-sm cursor-pointer transition-all duration-200 ${
                  isAiMode
                    ? "bg-[#001407]"
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-3 sm:w-4 h-3 sm:h-4 transition-colors duration-200 ${
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
                <span className={`font-['Inter'] text-[10px] sm:text-[12px] font-medium transition-colors duration-200 ${
                  isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                }`}>
                  AI
                </span>
              </button>
              <button
                onClick={() => setIsAiMode(false)}
                className={`flex items-center justify-center gap-1 rounded-full px-2 sm:px-3 h-full cursor-pointer transition-all duration-200 ${
                  !isAiMode
                    ? "bg-[#001407]"
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <svg
                  className={`w-3 sm:w-4 h-3 sm:h-4 transition-colors duration-200 ${
                    !isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className={`font-['Inter'] text-[10px] sm:text-[12px] font-medium transition-colors duration-200 hidden sm:inline ${
                  !isAiMode ? "text-[#D2FF00]" : "text-[#001407]"
                }`}>
                  Take Over
                </span>
              </button>
            </div>
          )}
        </div>

        {/* AI Banner - Fixed Text Wrapping */}
        {currentChat && (
          <div className="w-full flex justify-center bg-white py-2 px-4 md:px-6">
            <div className="bg-gray-50 border border-gray-200/60 shadow-sm rounded-[12px] flex items-center justify-center px-3 py-2 w-full">
              <div className="bg-white shadow-sm rounded-[6px] px-2 py-1 flex items-center justify-center shrink-0 mr-2">
                <span className="text-[#001407] font-['Inter'] text-[10px] font-semibold tracking-wide whitespace-nowrap">
                  {isAiMode ? "AI" : "Human"}
                </span>
              </div>
              <span className="text-gray-600 font-['Inter'] text-xs sm:text-sm font-medium whitespace-normal text-center">
                {isAiMode ? "AI handling automatically" : "You handling this"}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Message List Area - flex-1 with scroll */}
      {!currentChat ? (
        <div className="flex-1 w-full overflow-y-auto flex items-center justify-center bg-white px-4 md:px-6 py-4">
          <div className="bg-gray-100 border border-gray-200 rounded-2xl w-full max-w-2xl flex items-center justify-center p-4 md:p-6 shadow-sm">
            <span className="text-xs sm:text-[12px] text-gray-600 font-['Roboto'] text-center leading-relaxed">
              Select a conversation to start messaging
            </span>
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full overflow-y-auto flex flex-col bg-white px-4 md:px-6 py-4 gap-4 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          {currentChat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 max-w-[75%] sm:max-w-[70%] md:max-w-[60%] shadow-sm ${
                  message.sender === "user"
                    ? "bg-gray-100"
                    : "bg-[#001407] text-white"
                }`}
                style={message.sender === "user" ? { color: '#001407' } : {}}
              >
                <p className="text-xs sm:text-[13px] font-['Roboto'] leading-relaxed">{message.text}</p>
                <span className={`text-[10px] mt-1 block ${
                  message.sender === "user" ? "text-gray-500" : "text-gray-300"
                }`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Input Area - flex-none (Always at bottom) */}
      {currentChat && (
        <div className="flex-none w-full bg-white border-t border-gray-200/60 shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.05)]">
          {isAiMode ? (
            // AI Mode Banner
            <div className="w-full px-4 md:px-6 py-3 pb-6">
              <div className="bg-gray-50 border border-gray-200/60 rounded-[10px] p-3 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mb-2">
                  <div
                    className="w-5 sm:w-6 h-5 sm:h-6 bg-[#001407]"
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
                </div>
                <p className="text-xs sm:text-sm text-center text-gray-700 font-['Roboto'] font-medium whitespace-normal">
                  Aisha AI managing this conversation
                </p>
                <p className="text-[10px] sm:text-xs text-center text-gray-500 font-['Roboto'] mt-1">
                  Click Take Over to reply
                </p>
              </div>
            </div>
          ) : (
            // Human Mode Input - Compact Pill-Shaped
            <div className="w-full px-4 md:px-6 py-3 pb-6">
              <div className="flex items-end gap-2 w-full">
                {/* Paperclip Icon */}
                <button className="flex-shrink-0 flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 hover:opacity-70 transition-opacity">
                  <img
                    src="/Icons/Plus.svg"
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(8%) sepia(75%) saturate(1222%) hue-rotate(116deg) brightness(98%) contrast(107%)",
                    }}
                  />
                </button>

                {/* Compact Input Pill */}
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center focus-within:ring-2 focus-within:ring-[#001407] focus-within:bg-white transition-all min-w-0">
                  <input
                    type="text"
                    className="text-xs sm:text-[13px] text-[#001407] font-['Roboto'] w-full bg-transparent outline-none placeholder:text-gray-500 placeholder:font-normal"
                    placeholder="Message..."
                  />
                  <img
                    src="/Icons/SmileyWink.svg"
                    className="w-4 sm:w-[18px] h-4 sm:h-[18px] cursor-pointer hover:opacity-70 transition-opacity ml-2 flex-shrink-0"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(95%)",
                    }}
                  />
                </div>

                {/* Microphone Icon */}
                <button className="flex-shrink-0 flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 hover:opacity-70 transition-opacity">
                  <img
                    src="/Icons/Microphone.svg"
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(8%) sepia(75%) saturate(1222%) hue-rotate(116deg) brightness(98%) contrast(107%)",
                    }}
                  />
                </button>

                {/* Send Button */}
                <button className="flex-shrink-0 w-8 sm:w-9 h-8 sm:h-9 bg-[#001407] rounded-full shadow-sm flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src="/Icons/ArrowCircleUp.svg"
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(98%) sepia(85%) saturate(3018%) hue-rotate(342deg) brightness(98%) contrast(97%)",
                    }}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
