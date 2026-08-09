
import { ButtonGold } from "~/components/common/button/button";
import "./hero-section.css"
import lolLogo from "~/assets/image/logo/lol-logo.png"
interface HomeHeroSectionProps {
  heroVideo: string;
}

export default function HomeHeroSection({

  heroVideo,
}: HomeHeroSectionProps) {
  const logInLink = "https://signup.na.leagueoflegends.com/en/?_gl=1*1jzcc9p*_gcl_au*MTQxNjExMzcwOS4xNzg0OTk0ODMz"
  return (
    <section id="home-hero-section">
      <video autoPlay loop muted className="home-hero-video">
        <source src={heroVideo} type="video/webm" />
      </video>

      <div className="home-hero-section-content">
        <img className="home-hero-section-content-image" src={lolLogo} alt="" />
        <h1 className="home-hero-section-content-txt">League of Legends — A 5v5 MOBA where teams battle to destroy the enemy Nexus</h1>
        <ButtonGold link={logInLink} text={"PLAY NOW"} ></ButtonGold>     </div>
    </section>
  );
}