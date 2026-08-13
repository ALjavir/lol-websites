import React, { useEffect, useState } from 'react';
import letDivider from '~/assets/image/divider/latest-divider-icon.png';
import champDivider from '~/assets/image/divider/icon_champion.png';
import mapDivider from '~/assets/image/divider/featured-battlefield.png';
import videoDivider from '~/assets/image/divider/video-icon.png';
import catDivider from '~/assets/image/divider/catdiv.png';

import {
  getLatestPatchVersion,
  getLoLNews,
  getAllChampions,
  getChampionDetails
} from "../../services/ddragonService";

import {
  getAllRegionsData
} from "../../services/universeService";

import { getLoLYouTubeVideos, type YouTubeVideo } from "../../services/youTube"

import HomeHeroSection from '~/components/page/home/hero-section/hero-section';
import HomeLeatestUpdateSection from '~/components/page/home/leatestUpdate-section/leatestUpdate-section';
import { Divider, EndDivider } from '~/components/common/divider/divider';
import HomeChampionSection from '~/components/page/home/champion-section/home-champion-section';
import Loading from '~/components/common/loading/loading';
import HomeMapSection from '~/components/page/home/map-section/home-map-section';
import HomeYTVideoSection from '~/components/page/home/ytVideo-section/home-ytVideo-section';
import CategorySection from '~/components/page/home/category/category-section';



export default function Home() {

  const heroVideo = 'https://assetcdn.rgpub.io/public/live/bundle-offload/8f6933b3-5b5c-4c1a-ad1a-c402ddd124b1/6a0cc3d3560da70008d3221f/gameplay-landing.webm'
  const [lolNews, setlolNews] = useState<any[]>([]);
  const [champions, setChampions] = useState<any>(null);
  const [regions, setRegions] = useState<any[]>([]);
  const [videoYT, setVideoYT] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function init() {
      try {
        setLoading(true);


        const [latestPatch, lolNewsData, allChamps, allRegions, videoDataYT] = await Promise.all([
          getLatestPatchVersion(),
          getLoLNews(),
          getAllChampions(),
          getAllRegionsData(),
          getLoLYouTubeVideos()
        ]);

        // const videoDataYT = await getLoLYouTubeVideos()

        setlolNews([lolNewsData[0], lolNewsData[1], lolNewsData[2]]);
        const bestChampions = [
          "Ahri",
          "Sivir",
          "Jinx",
          "Kai'Sa",
          "Miss Fortune",
          "Akali",
          "Katarina",
          "Ashe",
          "Seraphine",
          "Morgana"
        ];
        const championSelected = Math.floor(Math.random() * bestChampions.length);
        const champData = allChamps.find(
          (champ: any) => champ.name === bestChampions[championSelected]
        );
        if (champData) {
          const champion = await getChampionDetails(champData.id);
          setChampions(champion);
        }

        if (allRegions.length > 5) {
          setRegions(allRegions.slice(5));
        }
        else {
          setRegions(allRegions);
        }

       setVideoYT(videoDataYT)

      } catch (error) {
        console.error('Failed to load initial Home data:', error);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);
  if (loading) {
    return (
      <Loading loading={loading} fullScreen />
    );
  }
  return (
    <main>
      <HomeHeroSection heroVideo={heroVideo} />

      <Divider
        icon={letDivider}
        text="LATEST UPDATES"
      />
      <HomeLeatestUpdateSection leatestNews={lolNews} />
      <Divider
        icon={champDivider}
        text="FEATURED CHAMPIONS"
      />
      <HomeChampionSection featuredChampions={champions} />
      <Divider
        icon={mapDivider}
        text="FEATURED REGION"
      />
      <HomeMapSection region={regions} />
      <Divider
        icon={videoDivider}
        text="ICONIC SOUNDTRACK"
      />
      <HomeYTVideoSection ytVideo={videoYT} />
      <Divider
        icon={catDivider}
        text="CATEGORY"
      />
      <CategorySection />
   
    </main>
  );
}