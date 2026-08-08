import MediaPopup from "~/components/common/MediaViewer/MediaViewer";
import "./home-ytvideo-style.css";
import { useEffect, useRef, useState } from "react";
import { getYoutubeID } from "~/services/youTube";
import "~/components/common/button/button-style.css"
import ytbg from '~/assets/image/canvas/ytbg.jpg';

interface HomeYTVideoSectionProps {
    ytVideo: any[];
}

export default function HomeYTVideoSection({
    ytVideo,
}: HomeYTVideoSectionProps) {
    const [currentVideo, setCurrentVideo] = useState(0);


    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollAmount = () => {
        if (!sliderRef.current) return 0;

        return sliderRef.current.clientWidth * 0.8;
    };
    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -scrollAmount(),
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: scrollAmount(),
            behavior: "smooth",
        });
    };

    return (
        <section id="home-yt-video-section">
         <img className="hm-yt-bg-img" src={ytbg} alt="" />
            <button
                className="gold-btn-arrow hm-yt-left-btn"
                onClick={scrollLeft}
            >
                ❮
            </button>

            <button
                className="gold-btn-arrow hm-yt-right-btn"
                onClick={scrollRight}
            >
                ❯
            </button>

            <div className="hm-yt-fade-left" />
            <div className="hm-yt-fade-right" />

            <div
                className="hm-yt-slider"
                ref={sliderRef}
            >
                {ytVideo.map((video, index) => {
                
                    const id = getYoutubeID(video.link);

                    return (

                        <div className="hm-yt-card">

                            <div className="hm-yt-show-index">
                                <h1 className="hm-yt-current-index">{index + 1}</h1>
                                <span>/</span>
                                <h1 className="hm-yt-total-index">{ytVideo.length}</h1>
                            </div>

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
                                    className="hm-yt-thumb"
                                />

                            </MediaPopup>
                            

                            <h1 className="hm-yt-video-nm">{video.title}</h1>

                        </div>



                        // <div className="yt-card">
                        //     <img className="yt-card-bg" src={video.thumbnail}
                        //         alt={video.title} />

                        //     <div className="yt-card-content">

                        //         <div className="hm-yt-show-index">
                        //             <h1 className="hm-yt-current-index">{index + 1}</h1>
                        //             <span>/</span>
                        //             <h1 className="hm-yt-total-index">{ytVideo.length}</h1>
                        //         </div>

                        //         <div className="yt-card-img">
                        //             <MediaPopup
                        //                 name=""
                        //                 key={video.guid}
                        //                 popupContent={
                        //                     <iframe
                        //                         width="1280"
                        //                         height="720"
                        //                         src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                        //                         title={video.title}
                        //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        //                         allowFullScreen
                        //                     />
                        //                 }
                        //             >
                        //                 <img
                        //                     src={video.thumbnail}
                        //                     alt={video.title}
                        //                     className="yt-thumb"
                        //                 />
                        //             </MediaPopup>
                        //         </div>
                        //         <div className="yt-video-nm-dt">
                        //             <p className="yt-video-dt"> {video.pubDate}</p>
                        //             <h1 className="yt-video-nm">{video.title}</h1>

                        //         </div>
                        //     </div>
                        // </div>

                    );
                })}

            </div>

        </section>
    );
}