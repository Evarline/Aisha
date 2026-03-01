import Image from 'next/image';

const steps = [
  {
    image: '/Images/Register Business.png',
    imageWidth: 100,
    imageHeight: 117,
    number: '01',
    title: 'Register Business',
    description: 'Full legal registration ensures you can focus on growing your business',
    titleStyle: {} as React.CSSProperties,
    descStyle: { fontFamily: 'Roboto Slab', fontWeight: 500, color: '#001407', fontSize: 16, alignSelf: 'stretch' } as React.CSSProperties,
  },
  {
    image: '/Images/Connect.png',
    imageWidth: 176,
    imageHeight: 117,
    number: '02',
    title: 'Connect and customize',
    description: "Link your WhatsApp Business & customize Aisha's features",
    titleStyle: { alignSelf: 'stretch' } as React.CSSProperties,
    descStyle: { fontFamily: 'Roboto Slab', fontWeight: 500, color: '#001407', fontSize: 16, width: 189 } as React.CSSProperties,
  },
  {
    image: '/Images/Automate(1).png',
    imageWidth: 108,
    imageHeight: 117,
    number: '03',
    title: 'Automate',
    description: 'Let Aisha do the heavy lifting. It manages logistics while you create',
    titleStyle: { whiteSpace: 'nowrap' } as React.CSSProperties,
    descStyle: { fontFamily: 'Roboto Slab', fontWeight: 500, color: '#001407', fontSize: 16, alignSelf: 'stretch' } as React.CSSProperties,
  },
  {
    image: '/Images/Focus and grow.png',
    imageWidth: 150,
    imageHeight: 117,
    number: '04',
    title: 'Focus and grow',
    description:
      'Reclaim 10+ hours/week to focus on your craft. Scale your revenue with data-driven surgical insights.',
    titleStyle: {} as React.CSSProperties,
    descStyle: { fontFamily: 'Roboto Slab', fontWeight: 500, color: '#001407', fontSize: 16, alignSelf: 'stretch' } as React.CSSProperties,
  },
];

export default function Setup() {
  return (
    <section
      style={{
        width: '100%',
        paddingLeft: 44,
        paddingRight: 44,
        paddingTop: 88,
        paddingBottom: 88,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 10,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 25,
        }}
      >
        <h2
          style={{
            alignSelf: 'stretch',
            textAlign: 'right',
            color: '#04340E',
            fontSize: 36,
            fontFamily: 'Inter',
            fontWeight: 700,
            wordWrap: 'break-word',
            margin: 0,
          }}
        >
          From Setup to Scale in 4 Precise Steps
        </h2>
        <p
          style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            color: 'rgba(4, 52, 14, 0.60)',
            fontSize: 15,
            fontFamily: 'Roboto',
            fontWeight: 500,
            wordWrap: 'break-word',
            margin: 0,
          }}
        >
          See how AISHA is built, trained, and unleashed—all in a process that&apos;s as smart as she is
        </p>
      </div>

      {/* Steps container */}
      <div
        style={{
          alignSelf: 'stretch',
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Top connector line */}
        <div
          style={{
            height: 40,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: '#D2FF00',
              borderRadius: 9999,
              border: '3px #001407 solid',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: 787,
              height: 1,
              background:
                'repeating-linear-gradient(to right, rgba(0,20,7,0.50) 0px, rgba(0,20,7,0.50) 8px, transparent 8px, transparent 13px)',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              background: '#D2FF00',
              borderRadius: 9999,
              border: '3px #001407 solid',
              flexShrink: 0,
            }}
          />
        </div>

        {/* Step cards */}
        <div
          style={{
            width: 1440,
            height: 490,
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                width: 250,
                height: 450,
                padding: 30,
                overflow: 'hidden',
                borderRadius: 24,
                outline: '1px rgba(4, 52, 14, 0.10) solid',
                outlineOffset: '-1px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 30,
              }}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={step.imageWidth}
                height={step.imageHeight}
                style={{ objectFit: 'contain' }}
              />
              <div
                style={{
                  width: 91,
                  height: 30,
                  padding: 20,
                  background: '#001407',
                  overflow: 'hidden',
                  borderRadius: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    color: '#D2FF00',
                    fontSize: 16,
                    fontFamily: 'Roboto Slab',
                    fontWeight: 600,
                    wordWrap: 'break-word',
                  }}
                >
                  {step.number}
                </span>
              </div>
              <div
                style={{
                  color: '#001407',
                  fontSize: 24,
                  fontFamily: 'Roboto Slab',
                  fontWeight: 700,
                  wordWrap: 'break-word',
                  ...step.titleStyle,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  color: '#001407',
                  fontSize: 16,
                  fontWeight: 500,
                  wordWrap: 'break-word',
                  ...step.descStyle,
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/*Bottom connector line*/}
        <div
          style={{
            height: 40,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: '#D2FF00',
              borderRadius: 9999,
              border: '3px #001407 solid',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: 787,
              height: 1,
              background:
                'repeating-linear-gradient(to right, rgba(0,20,7,0.50) 0px, rgba(0,20,7,0.50) 8px, transparent 8px, transparent 13px)',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              background: '#D2FF00',
              borderRadius: 9999,
              border: '3px #001407 solid',
              flexShrink: 0,
            }}
          />
        </div>

        {/* CTA Button */}
        <button
          style={{
            width: 230,
            height: 60,
            paddingLeft: 38.53,
            paddingRight: 38.53,
            paddingTop: 15.65,
            paddingBottom: 15.65,
            background: '#001407',
            overflow: 'hidden',
            borderRadius: 24.08,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 12.04,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              color: '#D2FF00',
              fontSize: 24.08,
              fontFamily: 'Roboto',
              fontWeight: 500,
              wordWrap: 'break-word',
            }}
          >
            Start free trial
          </span>
        </button>
      </div>
    </section>
  );
}
