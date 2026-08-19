import DateConverter from "~/components/common/converter/date";
import "./leatestUpdate-section.css"
import { ButtonBlue } from "~/components/common/button/button";
import { getOfficialLoLNewsUrl } from "../../../../services/getUrlService";

interface LeatestUpdateSectionProps {
    //leatestPatch: any;
    leatestNews: any[];
}
export default function HomeLeatestUpdateSection({ leatestNews }: LeatestUpdateSectionProps) {

   
    return (
        <section id="hm-let-upd-sec">

            <div className="hm-news-card hm-news-hero-card">
                <img className="hm-news-card-img hm-news-hero-card-img" src={leatestNews[0].media.url} alt="NO IMAGE FOUND" />
                <div className="hm-news-card-overlay">
                    <p className="hm-let-upd-pth-ver">
                        {leatestNews[0].category.title} | {DateConverter(leatestNews[0].publishedAt)}
                    </p>

                    <h1 className="hm-news-card-title">{leatestNews[0].title}</h1>
                    <p className="hm-news-card-subtitle">{leatestNews[0].description.body}</p>
                    <ButtonBlue link={getOfficialLoLNewsUrl( leatestNews[0].action.payload.url)} text="READ MORE"  />
                </div>
            </div>


            <div className="hm-news-grid-container">
                {leatestNews.slice(1).map((item, index) => (
                    <div key={index} className="hm-news-card hm-news-grid-card">
                        <img className="hm-news-card-img" src={item.imageMedia.url} alt={item.title || ""} />
                        <div className="hm-news-card-overlay">
                            <p className="hm-let-upd-pth-ver">
                                {item.category.title} | {DateConverter(item.publishedAt)}
                            </p>
                            <h1 className="hm-news-card-title"> {item.title}</h1>
                            <p className="hm-news-card-subtitle">{item.description.body}</p>
                    
                            <ButtonBlue fontSize={0.8} link={getOfficialLoLNewsUrl( item.action.payload.url)} text="READ MORE" />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
