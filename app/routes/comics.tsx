import { useEffect, useState } from "react";
import { getAllLoLComics } from "../services/universeService";
import Loading from "~/components/common/loading/loading";
import ComicHeroSec from "~/components/page/comics/hero/hero-section";
import AllComics from "~/components/page/comics/allComics/allComics-section";


export default function Comics() {
    const [allComics, setallComics] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
            try {
                const data = await getAllLoLComics()
                setallComics(data!)
            // console.log(data[1].recent)
            } catch (error) {
                console.error('Failed to load initial Home data:', error);
            } finally {
                setLoading(false);
            }
        }
        init()
    }, [])
    if (loading) {
        return (
            <Loading loading={loading} fullScreen />
        );
    }
    return (
        <main>
            <ComicHeroSec allComicsData={allComics[0]} />
            <AllComics allComdata={allComics[1]}/>
        </main>
    )
}