import React, { useEffect, useState } from 'react';
import {
  getLatestPatchVersion,
  // getAllPatchNote,
  getLoLNews,
  getAllChampions,
  ddragonAssets
} from "../services/ddragonService";

import {
  getUniverseChampionData,
  getAbilityVideoUrl
} from "../services/universeService";

import HomeHeroSection from '~/components/page/home/hero-section/hero-section';
import HomeLeatestUpdateSection from '~/components/page/home/leatestUpdate-section/leatestUpdate-section';

export default function Home() {
  const [patch, setPatch] = useState('');
  const heroVideo = 'https://assetcdn.rgpub.io/public/live/bundle-offload/8f6933b3-5b5c-4c1a-ad1a-c402ddd124b1/6a0cc3d3560da70008d3221f/gameplay-landing.webm'
  const [lolNews, setlolNews] = useState<any[]>([]);
  const [champions, setChampions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function init() {
      try {
        setLoading(true);


        const [latestPatch, lolNewsData, allChamps] = await Promise.all([
          getLatestPatchVersion(),
          getLoLNews(),
          getAllChampions()
        ]);

        setPatch(latestPatch);
        setlolNews([lolNewsData[0], lolNewsData[1], lolNewsData[2]]);

        const championSelected = Math.floor(Math.random() * (allChamps.length + 1));
        console.log(championSelected);
        console.log(allChamps[championSelected]);
        setChampions([allChamps[103]]);

        console.log(champions);
       

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
      <div style={{ padding: '50px', color: '#fff', textAlign: 'center' }}>
        Loading League Universe...
      </div>
    );
  }
  return (
    <main>
      <HomeHeroSection heroVideo={heroVideo} />
      <HomeLeatestUpdateSection leatestNews={lolNews} />
    </main>
  );
}