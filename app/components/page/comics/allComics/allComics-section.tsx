import { useState, type useEffect } from "react";
import "./allComics-style.css"
import { ButtonBlue } from "~/components/common/button/button";


interface allComDataInt {
    allComdata: any
}
export default function AllComics({ allComdata }: allComDataInt) {
    const [sortBy, setSortBy] = useState("recent");
    const [displayedCom, setdisplayedCom] = useState<any[]>(allComdata[sortBy].data);
    var comDataMap = [

        {
            label: "Recently Added",
            cat: "recent"
        },
        {
            label: "One Shot",
            cat: "one-shots"
        },
        {
            label: "Comic Series",
            cat: "series"
        },
    ];

    console.log(allComdata)

    return (
        <section id="all-com-sec">
            <div className="all-news-filter-btn gold-sort-btn">
                {comDataMap.map((btnData) => (
                    <button
                        key={btnData.cat}
                        className={sortBy === btnData.cat ? "active" : ""}
                        onClick={() => {
                            setSortBy(btnData.cat);
                            setdisplayedCom(allComdata[btnData.cat].data);

                        }}
                    >
                        {btnData.label} | {allComdata[btnData.cat].data.length}
                    </button>
                ))}

            </div>

            <div className="all-com-grid">
                {displayedCom.map((com, index) => (
                    <div className="all-com-card" key={index} >
                        <img src={com.background.uri} alt={com.background.title} />
                        <div className="all-com-card-info">
                            <h1>{com.title}</h1>
                            <div className="all-com-sub-card">
                                <p>{com.subtitle ?? com.id}</p>
                              
                              <p className="">❯</p>
                            </div>
                    

                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}