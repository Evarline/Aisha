import Image from 'next/image';

const testimonials = [
  {
    avatar: '/Images/Client.png',
    name: 'Eve Mipata',
    role: 'CEO,Tech Company',
    rating: 4.5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
  {
    avatar: '/Images/Client.png', // Update this path for the second image when ready
    name: 'John Doe',
    role: 'Product Engineer',
    rating: 5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
  {
    avatar: '/Images/Client.png', // Update this path for the third image when ready
    name: 'Sarah Chen',
    role: 'Product Manager',
    rating: 4.5,
    quote:
      "As an Independent Product Engineer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity",
  },
];

function StarRating({ rating = 5 }: { rating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 11,
        flexShrink: 0,
      }}
    >
      {[...Array(fullStars)].map((_, i) => (
        <Image
          key={`full-${i}`}
          src="/Icons/StarFull.svg"
          alt="full star"
          width={15}
          height={15}
        />
      ))}
      {hasHalfStar && (
        <Image
          key="half"
          src="/Icons/StarHalf.svg"
          alt="half star"
          width={15}
          height={15}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Image
          key={`empty-${i}`}
          src="/Icons/StarFull.svg" // Replace with an empty star if you have one, or just omit if out of 5 isn't needed
          alt="empty star"
          style={{ opacity: 0.3 }}
          width={15}
          height={15}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  avatar,
  name,
  role,
  rating,
  quote,
}: {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}) {
  return (
    <div
      style={{
        width: 332,
        minHeight: 494,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 24,
        outline: '1.5px rgba(4, 52, 14, 0.15) solid',
        outlineOffset: '-1.5px',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 24,
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Avatar */}
      <Image
        src={avatar}
        alt={name}
        width={100}
        height={103}
        style={{ flexShrink: 0 }}
      />

      {/* Name & role */}
      <div
        style={{
          width: 272,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 7,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            color: '#001407',
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 600,
            wordWrap: 'break-word',
          }}
        >
          {name}
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            color: '#001407',
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 600,
            wordWrap: 'break-word',
          }}
        >
          {role}
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={rating} />

      {/* Quote */}
      <div
        style={{
          alignSelf: 'stretch',
          color: '#001407',
          fontSize: 16,
          fontFamily: 'Roboto',
          fontWeight: 400,
          wordWrap: 'break-word',
        }}
      >
        {quote}
      </div>

      {/* Badge */}
      <div
        style={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          background: '#001407',
          overflow: 'hidden',
          borderRadius: 7,
          outline: '2px rgba(210, 255, 0, 0.20) solid',
          outlineOffset: '-2px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span
          style={{
            color: '#D2FF00',
            fontSize: 11,
            fontFamily: 'Roboto',
            fontWeight: 600,
            wordWrap: 'break-word',
          }}
        >
          SYSTEM VERIFIED
        </span>
      </div>
    </div>
  );
}

export default function PerformanceProof() {
  return (
    <section
      id="about"
      style={{
        width: '100%',
        paddingLeft: 44,
        paddingRight: 44,
        paddingTop: 88,
        paddingBottom: 88,
        overflow: 'hidden',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 40,
      }}
    >
      {/* Header */}
      <div
        style={{
          width: 1106,
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
            textAlign: 'center',
            color: '#001407',
            fontSize: 36,
            fontFamily: 'Inter',
            fontWeight: 700,
            letterSpacing: 1.8,
            wordWrap: 'break-word',
            margin: 0,
          }}
        >
          Performance Proof
        </h2>
        <p
          style={{
            width: 800,
            textAlign: 'center',
            color: 'rgba(0, 20, 7, 0.70)',
            fontSize: 16,
            fontFamily: 'Roboto',
            fontWeight: 400,
            wordWrap: 'break-word',
            margin: 0,
          }}
        >
          Analyze the impact: Real narratives from partners who have unlocked operational and surgical
          efficiency through our solution
        </p>
      </div>

      {/* Cards frame: horizontal, width 1352 fill, height 500 fixed, gap 88, padding 40h / 20v */}
      <div
        style={{
          alignSelf: 'stretch',
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 20,
          paddingBottom: 20,
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 88,
          flexWrap: 'wrap',
        }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard 
            key={i} 
            avatar={t.avatar} 
            name={t.name} 
            role={t.role}
            rating={t.rating}
            quote={t.quote} 
          />
        ))}
      </div>
    </section>
  );
}
