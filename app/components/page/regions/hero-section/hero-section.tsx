import "./hero-section-style.css"
import regHerVideo from '~/assets/video/regionsHerobg.webm'


export default function RegionHeroSection() {
    return (
        <section id='reg-hero-section'>
            <video autoPlay loop muted className="reg-hero-video">
                <source src={regHerVideo} type="video/webm" />
            </video>

            <div className="reg-hero-main-cont">
                <div className="reg-hero-sec-cont">
                    <div className="reg-hero-left-cont"></div>

                    <h1 className="reg-hero-sec-title">
                        R E G I O N
                    </h1>

                    <div className="reg-hero-right-cont"></div>
                </div></div>
        </section>
    )
}