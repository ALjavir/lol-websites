import MediaPopup from "~/components/common/MediaViewer/MediaViewer";
import "./home-ytVideo-style.css"
import { useRef } from "react";
import { getYoutubeID } from "~/services/youTube";


interface HomeYTVideoSectionProps {
    ytVideo: any[];
}

export default function HomeYTVideoSection({
    ytVideo,
}: HomeYTVideoSectionProps) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -700,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 700,
            behavior: "smooth",
        });
    };



    return (
        <section id="home-yt-video-section">

            <button
                className="yt-arrow yt-left"
                onClick={scrollLeft}
            >
                ❮
            </button>

            <button
                className="yt-arrow yt-right"
                onClick={scrollRight}
            >
                ❯
            </button>

            <div className="yt-fade-left" />
            <div className="yt-fade-right" />

            <div
                className="yt-slider"
                ref={sliderRef}
            >
          {ytVideo.map((video) => {
    const id = getYoutubeID(video.link);

              return (
        <div className="yt-card">
        <MediaPopup
            name=""
            key={video.guid}
            popupContent={
                <iframe
                    width="1280"
                    height="720"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                />
            }
        >
            <img
                src={video.thumbnail}
                alt={video.title}
                className="yt-thumb"
            />
                      </MediaPopup>
                      </div>
    );
})}
            </div>

        </section>
    );
}