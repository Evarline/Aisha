const features = [
  {
    icon: "/Icons/ChatCircleDots.svg",
    title: "WhatsApp Automation",
    description:
      "Auto-respond to inquiries, calculate totals, and send payment links directly through WhatsApp",
  },
  {
    icon: "/Icons/Shield.svg",
    title: "Ghosting Prevention",
    description:
      "Detect when client go silent and send gentle follow-ups to recover lost sales",
  },
  {
    icon: "/Icons/CashRegister.svg",
    title: "Transactional Support",
    description:
      "Automated order calculations, payment processing, and shipping coordination - so you can focus on your business, not paperwork",
  },
  {
    icon: "/Icons/Heart.svg",
    title: "Local personality",
    description:
      "Warm, authentic communication with local phrases that build trust with your customers",
  },
  {
    icon: "/Icons/ChartLineUp.svg",
    title: "Smart Analytics",
    description:
      "Track conversions, response times, and customer engagement all in one dashboard",
  },
  {
    icon: "/Icons/ClockClockwise.svg",
    title: "24/7 Availability",
    description:
      "Never miss a customer inquiry, even when you&apos;re sleeping or taking personal time",
  },
];

export default function Features() {
  return (
    <section
      style={{
        width: "100%",
        paddingLeft: 44,
        paddingRight: 44,
        paddingTop: 88,
        paddingBottom: 88,
        background: "#F5F5F5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 50,
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1190,
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
        }}
      >
        <h2
          style={{
            color: "#001407",
            fontSize: 24,
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            letterSpacing: 2.4,
            wordWrap: "break-word",
            textAlign: "center",
            margin: 0,
          }}
        >
          Aisha: Designed for creators like you, since your vision deserves
          precision
        </h2>
        <p
          style={{
            color: "rgba(0, 19, 7, 0.70)",
            fontSize: 15,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            letterSpacing: 3.2,
            wordWrap: "break-word",
            textAlign: "center",
            margin: 0,
          }}
        >
          Experience the power of Aisha surgical features
        </p>
      </div>

      {/* Cards Grid — 3 columns × 2 rows */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 419px)",
          justifyContent: "center",
          columnGap: 20,
          rowGap: 40,
        }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        width: 419,
        height: 235,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 72,
        paddingBottom: 72,
        background: "#001407",
        boxShadow: "0px 4px 0.5px 1px white inset",
        overflow: "hidden",
        borderRadius: 30,
        outline: "2px solid white",
        outlineOffset: "-2px",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 21,
      }}
    >
      {/* Icon Box */}
      <div
        style={{
          width: 40,
          height: 40,
          position: "relative",
          background: "#D2FF00",
          overflow: "hidden",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt={title}
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          textAlign: "left",
          color: "white",
          fontSize: 24,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          wordWrap: "break-word",
          margin: 0,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          alignSelf: "stretch",
          color: "white",
          fontSize: 16,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          wordWrap: "break-word",
          margin: 0,
          lineHeight: 1.5,
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
