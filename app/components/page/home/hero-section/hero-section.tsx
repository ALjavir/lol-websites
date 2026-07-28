import "./hero-section.css"
interface HomeHeroSectionProps {
  heroVideo: string;
}

export default function HomeHeroSection({
  heroVideo,
}: HomeHeroSectionProps) {
  return (
    <section id="home-hero-section">
      <video autoPlay loop muted className="home-hero-video">
        <source src={heroVideo} type="video/webm" />
          </video>
       
    </section>
  );
}