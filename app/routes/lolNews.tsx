import { useEffect, useState } from "react";
import { getLoLNews} from "../services/ddragonService";

import LolNewsHeroSec from "~/components/page/lolNews/hero/lolNews-hero-section";
import Loading from "~/components/common/loading/loading";
import AllLolNews from "~/components/page/lolNews/alllolnews/allLolNews";

export default function LolNews() {
    
    const [lolNews, setlolNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        async function init() {
           
            try {
                setLoading(true)
                
                const lolNewsData = await getLoLNews()
                setlolNews(lolNewsData)

          } catch (error) {
        console.error('Failed to load initial Home data:', error);
      } finally {
        setLoading(false);
      }
        }
        init()
    }, []
    )

  if (loading) {
    return (
      <Loading loading={loading} fullScreen />
    );
  }

    return (
        <main>
        <LolNewsHeroSec lolNewsData={lolNews[0]} />
        <AllLolNews alllolNewsdata={lolNews}/>
        </main>
    )
}