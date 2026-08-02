import { useEffect, useState } from "react";
import Loading from "~/components/common/loading/loading";
import "./home-map-style.css";
import ButtonBlue from "~/components/common/button/blue-button";

interface HomeMapSectionProps {
    region: any[];
}
export default function HomeMapSection({ region }: HomeMapSectionProps) {
    const [loading, setLoading] = useState(true);
    console.log(region)
    const [currentIndex, setCurrentIndex] = useState(0);
    let indicatorList: number[] = []
    const shortDescription =
        region[currentIndex].faction.overview.short.match(/<p>(.*?)<\/p>/)?.[1]
            ?.replace(/<[^>]*>/g, "")
        ?? region[currentIndex].faction.overview.short.replace(/<[^>]*>/g, "");
    indicatorList = Array.from({ length: region.length }, (_, i) => i);
    useEffect(() => {
        setLoading(true);

    }, [region]);
    const previousSkin = () => {
        setCurrentIndex(prev => (prev === 0 ? region.length - 1 : prev - 1));
    };
    const nextSkin = () => {
        setCurrentIndex(prev => (prev === region.length - 1 ? 0 : prev + 1));
    };
    return (
        <section id="hm-map-sec">
            <div className="hm-map-bg">
                <img
                    src={region[currentIndex].faction.image.uri}
                    alt=""
                />
            </div>

            <button
                className="hm-map-arrow left"
                onClick={previousSkin}
            >
                ❮
            </button>
            <button
                className="hm-map-arrow right"
                onClick={nextSkin}
            >
                ❯
            </button>
            <div className="hm-map-container">
                <div className="hm-map-image-card">
                    {loading && <Loading loading={true} />}
                    <img
                        className="hm-map-img"
                        src={region[currentIndex].faction.image.uri}
                        alt={region[currentIndex].faction.name}
                        onLoad={() => setLoading(false)}
                        style={{ opacity: loading ? 0 : 1 }}
                    />



                </div>
                <div className="hm-map-info">
                    <span className="hm-region-tag">
                        CURRENT REGION
                    </span>

                    <h1>
                        {region[currentIndex].faction.name}
                    </h1>
                    <p className="hm-map-desc">
                        {shortDescription}
                    </p>
                   <ButtonBlue link={""} text={"LEARN MORE"}  showBig={true} />             </div>

            </div>

        </section>
    );
}