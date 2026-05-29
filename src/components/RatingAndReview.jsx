import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StatsAndReviews() {
  const stats = [
    { id: 1, value: "50+", label: "ACTIVE COMPANIES" },
    { id: 2, value: "1,500+", label: "TOTAL HIRES" },
    { id: 3, value: "5,000+", label: "LIVE CANDIDATES" },
  ];

  const companies = [
    { name: "Spotify", logo: "/spotify.png" },
    { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Stripe", logo: "/stripe.png" },
    { name: "Canva", logo: "/canva.png" },
    { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "Qgenda", logo: "/qgenda.png" },
    { name: "Lufthansa", logo: "/lufthansa.png" },
  ];

  const reviewsData = [
    {
      id: 1,
      rating: 5,
      title: "JobVista reduces time-to-hire by 45%",
      desc: "\"We've been filling positions a lot faster because our whole team is now involved. Successfully hired 24 developers and slashed pipeline friction!\"",
      name: "Sarah Chen",
      role: "VP of Talent, TechCorp",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      rating: 4.5,
      title: "The simplest platform for modern teams",
      desc: "\"The applicant tracking system is incredibly smooth. Filter and screening workflows are well-optimized. Highly recommended for startups!\"",
      name: "Alex Rivera",
      role: "HR Lead, Appify",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      rating: 4,
      title: "Found our core engineering talent in weeks",
      desc: "\"Eliminated messy spreadsheets and manual interview booking. The candidate management and automated tracking system works flawlessly.\"",
      name: "Jessica Taylor",
      role: "Founder, Synapse Inc.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="relative w-full text-white pt-24 pb-16 px-6 md:px-12 font-body overflow-hidden bg-[#151B22]">

      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]" fill="#FFFFFF">
          <path d="M0,0V40c150,20,350,60,600,40s450-50,600-40V0Z"></path>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 mt-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/10 pb-12">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight">
              Connecting teams <br /> with top professionals
            </h2>
            <p className="text-sm text-workable-text-muted mt-3 max-w-sm mx-auto lg:mx-0">
              A streamlined workspace built for modern businesses to find, screen, and manage elite talent efficiently.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left sm:pl-8">
            {stats.map((stat) => (
              <div key={stat.id} className="space-y-1 border-l-2 border-workable-primary pl-4 sm:pl-6">
                <div className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-workable-primary uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full relative py-2">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#151B22] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#151B22] to-transparent z-10 pointer-events-none"></div>

          <Marquee gradient={true} gradientWidth={80} gradientColor="#151B22" speed={35} pauseOnHover={true}>
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="mx-4 w-[380px] md:w-[460px] bg-white text-workable-text-dark p-5 md:p-6 rounded-2xl shadow-lg border border-[#E5E4EA] text-left flex flex-col justify-between"
              >
                <div className="flex gap-0.5 mb-2.5 text-amber-500">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    if (review.rating >= starValue) {
                      return <FaStar key={i} className="text-base" />;
                    } else if (review.rating >= starValue - 0.5) {
                      return <FaStarHalfAlt key={i} className="text-base" />;
                    } else {
                      return <FaRegStar key={i} className="text-base text-gray-300" />;
                    }
                  })}
                </div>

                <div className="space-y-1.5 mb-4">
                  <h3 className="font-heading font-extrabold text-base md:text-17px text-workable-dark-green leading-tight">
                    {review.title}
                  </h3>
                  <p className="text-xs md:text-sm text-workable-text-muted italic leading-relaxed line-clamp-3">
                    {review.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#F3F2F7]">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-workable-bg flex-shrink-0 relative">
                    <Image
                      src={review.img}
                      alt={review.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-workable-text-dark">{review.name}</h4>
                    <p className="text-[10px] text-workable-text-muted font-medium">{review.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </Marquee>
        </div>

        <div className="pt-2 space-y-4">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-white/40">
            Trusted by modern software teams
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 py-2">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    width={32}
                    height={32}
                    className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="font-heading font-bold text-[11px] tracking-wider text-white/60 group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#FFFFFF">
          <path d="M0,120V80c200,30,400,30,600,0s400-30,600,0v40Z"></path>
        </svg>
      </div>
    </section>
  );
}