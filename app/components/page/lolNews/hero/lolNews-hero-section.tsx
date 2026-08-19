import { ButtonBlue } from "~/components/common/button/button"
import DateConverter from "~/components/common/converter/date"
import"./lolNews-style.css"
import { getOfficialLoLNewsUrl } from "~/services/getUrlService"

interface lolNewsSecPops {
    lolNewsData: any
}

export default function LolNewsHeroSec({ lolNewsData }: lolNewsSecPops) {
    return (
        <section id="lol-news-sec">
            <img className="lol-news-sec-bg-img" src={lolNewsData.imageMedia.url} alt="NO IMAGE FOUND" />
            <div className="lol-news-sec-card">
                <p className="let-add">LATEST ADDITION</p>
                <p className="lol-news-sec-header">
                    {lolNewsData.category.title} | {DateConverter(lolNewsData.publishedAt)}
                </p>
                <h1 className="lol-news-sec-card-subtitle">{lolNewsData.title}</h1>
                <p className="lol-news-sec-card-title">{lolNewsData.description.body}</p>
                <ButtonBlue link={getOfficialLoLNewsUrl(lolNewsData.action.payload.url)} text="READ MORE"  />
            </div>
        </section>
    )
}