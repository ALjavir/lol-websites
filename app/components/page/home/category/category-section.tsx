import chmpCatImg from '~/assets/image/cat/chamCat.jpg';
import newCatImg from "~/assets/image/cat/newsCat.jpg"
import ytCatImg from "~/assets/image/cat/ytVideoCat.jpg"
import regCatImg from "~/assets/image/cat/regionCat.jpg"
import comCatImg from "~/assets/image/cat/comicCat.jpg"
import catBg from "~/assets/image/cat/catBg.jpg"
import "./category-section-style.css"

export default function CategorySection() {
    const categoryData = [
        {
            name: "UPDATE",
            img: newCatImg,
            path: "",
        },
        {
            name: "CHAMPION",
            img: chmpCatImg,
            path: "",
        },
        {
            name: "REGION",
            img: regCatImg,
            path: "",
        }, {
            name: "SOUNDTRACK",
            img: ytCatImg,
            path: "",
        }, {
            name: "COMIC",
            img: comCatImg,
            path: "",
        }
    ]

    return (
        <section id='category-section'>
         
            <img className='cat-sec-bg-img' src={catBg} alt="" />
            <div className='cat-sec-content'>
                {
                    categoryData.map(
                        (data) =>
                            <div className='cat-sec-data-card'>
                                <img src={data.img} alt={data.name} />
                                <h1> {data.name}</h1>
                            </div>
                    )
                }
            </div>
        </section>
    )
}







{/* <div className='cat-sec-bg'>
                <h1 className='cat-sec-loop-text'>LEAGUE OR LEGENDS X JAVIR</h1>
            </div> */}