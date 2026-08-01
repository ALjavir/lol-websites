import DateConverter from "~/components/common/converter/date";
import "./leatestUpdate-section.css"
import ButtonBlue from "~/components/common/button/button";

interface LeatestUpdateSectionProps {
    //leatestPatch: any;
    leatestNews: any[];
}
export default function HomeLeatestUpdateSection({ leatestNews }: LeatestUpdateSectionProps) {
    console.log(leatestNews)
    return (
        <section id="hm-let-upd-sec">

            <div className="hm-news-card hm-news-hero-card">
                <img className="hm-news-card-img hm-news-hero-card-img" src={leatestNews[0].imageMedia.url} alt="NO IMAGE FOUND" />
                <div className="hm-news-card-overlay">
                     <p className="hm-let-upd-pth-ver">
                        {leatestNews[0].category.title} | {DateConverter(leatestNews[0].publishedAt)}
                    </p>
                    <h1 className="hm-news-card-subtitle">{leatestNews[0].title}</h1>
                    <p className="hm-news-card-title">{leatestNews[0].description.body}</p>
                     <ButtonBlue link="{item.url}" text="READ MORE" />
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
                            <h1 className="hm-news-card-subtitle">{item.title}</h1>
                            <p className="hm-news-card-title"> {item.description.body}</p>
                            <ButtonBlue link={item.url} text="READ MORE" />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
