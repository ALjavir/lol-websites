import { useState, type useEffect } from "react";

interface allComDataInt {
    allComdata: object[]
}


export default function AllComics({ allComdata }: allComDataInt) {
    
    const [sortBy, setSortBy] = useState("recent");

   const [displayedCom, setdisplayedCom] = useState<any[]>([]);

    var comDataMap = [
        {
            label: "Recently Added",
            cat: "recent"
        },
        {
            label: "One Shot",
            cat:"one-shots"
        },
        {
            label: "Comic Series",
           cat: "series"
        },
    ];
     
     

console.log(allComdata.every)


    return (
        <section id="all-com-sec">
              {/* <div className="all-news-filter-btn gold-sort-btn">
                {comDataMap.map((btnData) => (
                    <button
                        key={btnData.cat}
                        className={sortBy === btnData.cat ? "active" : ""}
                        onClick={() => { setSortBy(btnData.cat) }}
                    >
                        {btnData.label} | {displayedCom.length}

                    </button>
                ))}

            </div> */}
        </section>
    )


}