import "./hero-section.css"
import chamHerVideo from '~/assets/video/championHerobg.webm';
import { HeroDivider } from '~/components/common/divider/divider';


export default function ChampHeroSection() {
    return (
        <section id='chmp-hero-section'>
            <video autoPlay loop muted className="champ-hero-video">
                <source src={chamHerVideo} type="video/webm" />
            </video>
            <div className='champ-hero-sec-cont'>
                <h1 className='champ-hero-sec-title'>
                    DISCOVER WHO YOU ARE
                </h1>
                <HeroDivider />
                <p className='champ-hero-sec-subTitle'>Every champion has a story. Find yours.</p>
            </div>
        </section>
    )


}