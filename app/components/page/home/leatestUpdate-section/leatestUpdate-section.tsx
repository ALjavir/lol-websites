import DateConverter from "~/components/common/converter/date";

interface LeatestUpdateSectionProps {
    //leatestPatch: any;
    leatestNews: any[];
}
export default function HomeLeatestUpdateSection({ leatestNews }: LeatestUpdateSectionProps) {
    console.log(leatestNews)
    return (
        <section id="hm-let-upd-sec">
            <div className="hm-let-upd-sec-pth">
                <img src={leatestNews[0].imageMedia.url} alt="NO IMAGE FOUND" />
                <div className="hm-let-upd-pth-cnt">
                    <p className="hm-let-upd-pth-ver">
                        {leatestNews[0].category.title} | {DateConverter(leatestNews[0].publishedAt)}
                    </p>
                    <h1 className="hm-let-upd-pth-title">
                        {leatestNews[0].title}
                    </h1>
                    <p className="hm-let-upd-pth-subTitle">
                        {leatestNews[0].description.body}
                    </p>
                    <a className="hm-let-upd-pth-redMor-btn" href="">READ MORE</a>
                </div>
            </div>

            <div className="hm-let-upd-sec-new">
                {leatestNews.slice(1).map((item, index) => (
                    <div key={index} className="hm-let-upd-new-crd">
                        <p className="hm-let-upd-pth-ver">
                            {item.category.title}
                        </p>

                        <h1 className="hm-let-upd-news-title">
                            {item.title}
                        </h1>

                        <p className="hm-let-upd-news-subTitle">
                            {item.description.body}
                        </p>

                        <a className="hm-let-upd-pth-redMor-btn" href="">
                            READ MORE
                        </a>
                    </div>
                ))}
            </div>

        </section>
    )
}
