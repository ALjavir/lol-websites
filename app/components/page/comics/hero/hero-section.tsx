import { useState } from "react"
import { ButtonBlue } from "~/components/common/button/button"
import "./hero-style.css"

interface comicsHeroInt {
    allComicsData: any
}

export default function ComicHeroSec({ allComicsData }: comicsHeroInt) {
   
    return (
        <section id="comic-hero-sec">
            <img src={allComicsData.data.background.uri} alt={allComicsData.data.background.title} />
            <div className="com-hero-contant">
                <h1 className="com-hero-title">
                    {allComicsData.data.title}
                </h1>
                <p className="com-hero-dis">
                    {allComicsData.data.description}
                </p>
                <ButtonBlue link={allComicsData.title} text="READ MORE" />
            </div>
        </section>
    )

}