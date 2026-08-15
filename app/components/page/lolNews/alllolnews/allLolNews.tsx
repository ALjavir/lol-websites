import { useMemo, useState } from "react";
import "../../../common/button/button-style.css"
import DateConverter from "~/components/common/converter/date";
import "./allLolNews-style.css"
import { ButtonBlue } from "~/components/common/button/button";
import { getOfficialLoLNewsUrl } from "../../../../services/getUrlService";

interface AllLolNewsProps {
    alllolNewsdata: any[]
}


export default function AllLolNews({ alllolNewsdata }: AllLolNewsProps) {


    const [sortBy, setSortBy] = useState("all"); 
    const [displayedNews, setdisplayedNews] = useState<any[]>(alllolNewsdata);


    var lolnewsDataMap = [
        {
            cat: "all",
            label: "ALL",
            dataList: [] as any[]
        },
        {
            cat: "game-updates",
            label: "GAME UPDATES",
            dataList: [] as any[]
        },
        {
            cat: "dev",
            label: "DEV",
            dataList: [] as any[]
        },
        {
            cat: "esports",
            label: "ESPORTS",
            dataList: [] as any[]
        },
        {
            cat: "community",
            label: "COMMUNITY",
            dataList: [] as any[]
        },
        {
            cat: "media",
            label: "MEDIA",
            dataList: [] as any[]
        },
          {
            cat: "merch",
            label: "MERCH",
            dataList: [] as any[]
        },
       
    ];


    lolnewsDataMap.slice(0).map((data) => {

        const newsData = alllolNewsdata.filter((news) =>

            news.category.machineName
                ?.toLowerCase()
                .includes(data.cat.toLowerCase()),


        );
        data.dataList = newsData
    });


    // const lolnewsdata = useMemo(() => {
    //     return lolnewsDataMap.slice(0).map((data) => {
    //         const newsData = alllolNewsdata.filter((news) =>
    //             news.category.title
    //                 ?.toLowerCase()
    //                 .includes(data.cat.toLowerCase())
    //         );

    //         return {
    //             ...data,
    //             data: newsData,
    //         };
    //     });
    // }, [alllolNewsdata]);
    // const displayedNews = useMemo(() => {
    //     if (sortBy === "all") {
    //         return alllolNewsdata;
    //     }
    //     return (
    //         lolnewsDataMap.find((data) => data.cat === sortBy)?.dataList ?? []
    //     );
    // }, [sortBy, alllolNewsdata, lolnewsdata]);

    return (
        <section id="all-lol-news">


            <div className="all-news-filter-btn gold-sort-btn">
                {lolnewsDataMap.map((btnData) => (
                    <button
                        key={btnData.cat}
                        className={sortBy === btnData.cat ? "active" : ""}
                        onClick={() => { setSortBy(btnData.cat), btnData.cat === "all" ? setdisplayedNews(alllolNewsdata) : setdisplayedNews(btnData.dataList) }}
                    >
                        {btnData.label} | {btnData.cat === "all" ? alllolNewsdata.length : btnData.dataList.length}

                    </button>
                ))}

            </div>
            <div className="all-news-data-grid">
                {displayedNews.map((news) => (
                    <article
                        className="all-news-card"
                        key={news.id}
                    >
                        <div className="all-news-image">
                            <img
                                src={news.imageMedia.url}
                                alt={news.title}
                            />

                            <span className="all-news-category">
                                {news.category.title}
                            </span>
                        </div>

                        <div className="all-news-info">

                            <p className="all-news-date">
                                {DateConverter(news.publishedAt)}
                            </p>

                            <h2>
                                {news.title}
                            </h2>

                            <p className="all-news-description">
                                {news.description?.body}
                            </p>

                            <ButtonBlue
                                fontSize={0.8}
                                link={getOfficialLoLNewsUrl( news.action.payload.url)}
                                text="READ MORE"

                            />

                        </div>
                    </article>
                ))}

            </div>

        </section>
    );
}