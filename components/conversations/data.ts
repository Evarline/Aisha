export interface Chat {
  id: number;
  initial: string;
  name: string;
  sub: string;
  time: string;
  status?: "Active" | "Pending" | "Urgent";
  badge?: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export const DUMMY_CHATS: Chat[] = [
  {
    id: 1,
    initial: "SC",
    name: "Sarah Chen",
    sub: "My M-Pesa payment for KES 14,500 went through immediately",
    time: "2 min",
    status: "Active",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hi, I ordered a laptop yesterday. My M-Pesa payment for KES 14,500 went through immediately.",
        timestamp: "10:24 AM",
      },
      {
        id: 2,
        sender: "ai",
        text: "Thank you for reaching out. I can see your order #4827 was confirmed in our system. Your payment was processed successfully. Let me check the shipping status.",
        timestamp: "10:25 AM",
      },
      {
        id: 3,
        sender: "ai",
        text: "Great news! Your laptop is being packed right now and will be handed to our logistics partner Sandy within the next 2 hours. You'll receive a tracking link via SMS.",
        timestamp: "10:26 AM",
      },
      {
        id: 4,
        sender: "user",
        text: "Awesome! How long will it take? I'm in Nairobi.",
        timestamp: "10:27 AM",
      },
    ],
  },
  {
    id: 2,
    initial: "KN",
    name: "Kamau N.",
    sub: "Can I get a refund for the phone case I...",
    time: "15 min",
    status: "Pending",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Can I get a refund for the phone case I ordered last week? It doesn't fit my phone.",
        timestamp: "10:15 AM",
      },
      {
        id: 2,
        sender: "ai",
        text: "I can definitely help with that. Can you please provide your order number so I can look up the details?",
        timestamp: "10:16 AM",
      },
    ],
  },
  {
    id: 3,
    initial: "AH",
    name: "Amina Hassan",
    sub: "Thank you so much! The delivery arrived o...",
    time: "45 min",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Thank you so much! The delivery arrived on time and everything is perfect.",
        timestamp: "9:45 AM",
      },
      {
        id: 2,
        sender: "ai",
        text: "You're very welcome! We're so glad you're happy with your order. Thank you for shopping with us!",
        timestamp: "9:46 AM",
      },
    ],
  },
  {
    id: 4,
    initial: "DK",
    name: "David Kipchoge",
    sub: "Do you have the new laptop in stock? The...",
    time: "1h",
    status: "Urgent",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Do you have the new laptop in stock? The specs look amazing!",
        timestamp: "9:30 AM",
      },
      {
        id: 2,
        sender: "ai",
        text: "Yes, we have it in stock! It should be available for immediate shipping.",
        timestamp: "9:31 AM",
      },
      {
        id: 3,
        sender: "user",
        text: "Why hasn't my order been processed yet? I placed it 2 hours ago! This is frustrating. I need it urgently for an important meeting tomorrow.",
        timestamp: "10:30 AM",
      },
      {
        id: 4,
        sender: "ai",
        text: "I apologize for the delay. Let me check our system to see what's happening with your order.",
        timestamp: "10:31 AM",
      },
    ],
  },
  {
    id: 5,
    initial: "ZM",
    name: "Zainab Mohamed",
    sub: "I'm interested in mechanical or mechanical...",
    time: "2h",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "I'm interested in mechanical keyboards. Do you have any in stock?",
        timestamp: "8:30 AM",
      },
    ],
  },
  {
    id: 6,
    initial: "JD",
    name: "Jane Doe",
    sub: "Waiting for the delivery",
    time: "10 mins ago",
    status: "Active",
    badge: "VIP",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Why is my order still not here? I paid extra for express shipping! This is ridiculous. I've been a loyal customer for years and this is how you treat me?",
        timestamp: "11:20 AM",
      },
      {
        id: 2,
        sender: "ai",
        text: "I understand your frustration. Let me look into this immediately.",
        timestamp: "11:21 AM",
      },
      {
        id: 3,
        sender: "user",
        text: "Every time I order from you something goes wrong. I don't have time for this. I need my items today.",
        timestamp: "11:22 AM",
      },
      {
        id: 4,
        sender: "ai",
        text: "I apologize for the inconvenience. Our logistics team is currently unavailable. Please hold while I escalate this.",
        timestamp: "11:23 AM",
      },
    ],
  },
];

