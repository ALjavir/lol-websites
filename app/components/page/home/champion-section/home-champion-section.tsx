import { ddragonAssets } from "~/services/ddragonService";
import "./home-champion-section-style.css";
import ButtonBlue from "~/components/common/button/button";
import { useEffect, useState } from "react";
import Loading from "~/components/common/loading/loading";

interface HomeChampionSectionProps {
    featuredChampions: any;
}
export default function HomeChampionSection({ featuredChampions }: HomeChampionSectionProps) {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const realSkins = featuredChampions.skins.filter(
        (skin: any) => skin.parentSkin === undefined
    );

    const currentSkin = realSkins[currentIndex];


    const [imageError, setImageError] = useState(false);
    const MAX_SKIN = 8;
    useEffect(() => {
        setLoading(true);
        setImageError(false);
    }, [featuredChampions.id, currentSkin]);




    const previousSkin = () => {
        try {
             setCurrentIndex(prev => (prev === 0 ? MAX_SKIN : prev - 1));
        } catch (error) {
           setCurrentIndex(0);
        }
       
    };

    const nextSkin = () => {
        try {
            setCurrentIndex(prev => (prev === MAX_SKIN ? 0 : prev + 1));
        } catch (error) {
            setCurrentIndex(MAX_SKIN);
        }
        
    };

    return (
        <section id="hm-champ-sec">

            <div className="hm-featured-champions-container">
                <div className="hm-champion-bg">
                    <img
                        className="hm-camp-bg-img"
                        src={ddragonAssets.getSplashArt(featuredChampions.id, 0)}
                        alt={featuredChampions.name}
                    />
                </div>

                <div className="hm-champion-overlay"></div>

                <div className="hm-champion-info">
                    <div className="hm-champion-info-txt">
                        <h1 className="hm-champion-name">{featuredChampions.name}</h1>

                        <p className="hm-champion-title">
                            {featuredChampions.title}
                        </p>

                        <p className="hm-champion-desc">
                            {featuredChampions.blurb}
                        </p>

                        <div className="hm-champion-info-diff-role">

                            <div className="hm-champion-diff">
                                <p className="hm-champion-role-label">
                                    DIFFICULTY
                                </p>

                                <div className="hm-difficulty-bars">
                                    {[...Array(10)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`hm-difficulty-bar ${index < featuredChampions.info.difficulty
                                                ? "active"
                                                : ""
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="hm-champion-role">
                                <p className="hm-champion-role-label">
                                    ROLE
                                </p>

                                <h3 className="hm-champion-role-value">
                                    {featuredChampions.tags.join(", ")}
                                </h3>
                            </div>

                        </div>
                        <ButtonBlue link='' text="LEARN MORE" />
                    </div>

                    <div className="hm-champion-img-wrapper">

                        <button
                            className="hm-img-btn hm-img-btn-left"
                            onClick={previousSkin}
                        >
                            ❮
                        </button>

                        <div className="hm-champion-img-border">
                            {loading && <Loading loading={true} />}
                            {imageError && (
                                <div className="hm-image-error">
                                    <h3>No Splash Art</h3>
                                    <p>This skin doesn't have a splash image.</p>
                                </div>
                            )}
                            <img
                                className="hm-champion-img"
                                src={ddragonAssets.getSplashArt(
                                    featuredChampions.id,
                                    currentSkin.num
                                )}

                                alt={featuredChampions.name}
                                onLoad={() => {

                                    setLoading(false);
                                }}
                                style={{ opacity: loading ? 0 : 1 }}
                            />
                            <h1 className="hm-champion-skin-name">{currentSkin.name}</h1>
                        </div>

                        <button
                            className="hm-img-btn hm-img-btn-right"
                            onClick={nextSkin}
                        >
                            ❯
                        </button>

                        <div className="hm-skin-indicators">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(index => (
                                <span
                                    key={index}
                                    className={
                                        currentIndex === index
                                            ? "indicator active"
                                            : "indicator"
                                    }
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}