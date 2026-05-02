/* ═══════════════════════════════════════════════════
   HELP & SUPPORT MOCK DATA — Production-grade fixtures
   Aisha AI FAQ & Support Resources
   ═══════════════════════════════════════════════════ */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SupportChannel {
  type: string;
  title: string;
  description: string;
}

export const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How do I change the AI greeting message?",
    answer:
      "You can customize the AI greeting by navigating to Settings > AI Configuration > Welcome Message. Edit the default greeting text and click Save. Your new greeting will be deployed within seconds. For WhatsApp integrations, the greeting appears when a customer first initiates a conversation. You can personalize it with your business name and any specific instructions you'd like to communicate.",
    category: "Configuration",
  },
  {
    id: "2",
    question: "How do I connect WhatsApp to Aisha?",
    answer:
      "Connecting WhatsApp is simple: Go to Settings > Integrations > WhatsApp. Click 'Connect WhatsApp Business Account'. You'll be prompted to authenticate with your Facebook Business Manager credentials. Follow the authorization flow, and once approved, your WhatsApp account will sync with Aisha. You can then route conversations directly to Aisha's AI handlers.",
    category: "Integration",
  },
  {
    id: "3",
    question: "How do I upload products to my catalog?",
    answer:
      "To upload products: Navigate to Dashboard > Products > Add Product. You can add products individually or use bulk import for CSV files. Each product requires: Name, Description, Price, Category, and optionally Images and SKU. Once uploaded, products are immediately available for the AI to reference during customer conversations. You can manage inventory levels and pricing directly from the Products dashboard.",
    category: "Products",
  },
  {
    id: "4",
    question: "What happens when I upgrade my plan?",
    answer:
      "Upgrading your plan takes effect immediately. You'll gain access to additional features, higher conversation limits, and priority support. There are no setup fees for upgrades. Your billing cycle will be adjusted, and any prorated credits will be applied to your account. You can downgrade anytime during your billing period with changes taking effect on your next renewal date.",
    category: "Billing",
  },
];

export const supportChannels: SupportChannel[] = [
  {
    type: "whatsapp",
    title: "Live Support",
    description: "Chat with our team instantly",
  },
  {
    type: "email",
    title: "Email Us",
    description: "Typical response in 1 hour",
  },
];

export const supportEmail = "support@aisha.ai";
export const supportPhoneWhatsApp = "+1 (555) 123-4567";
