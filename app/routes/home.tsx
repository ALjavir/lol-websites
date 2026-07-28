import React, { useEffect, useState } from 'react';
import {
  getLatestPatchVersion,
  getAllPatchNote,
  getAllChampions,
  ddragonAssets
} from "../services/ddragonService";

import {
  getUniverseChampionData,
  getAbilityVideoUrl
} from "../services/universeService";

import HomeHeroSection from '~/components/page/home/hero-section/hero-section';

export default function Home() {
  const [patch, setPatch] = useState('');
  const heroVideo = 'https://assetcdn.rgpub.io/public/live/bundle-offload/8f6933b3-5b5c-4c1a-ad1a-c402ddd124b1/6a0cc3d3560da70008d3221f/gameplay-landing.webm'
  // const heroVideo = "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm?accountingTag=LoL"
  const [patchFullInfo, setPatchFullInfo] = useState([]);
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        
        // Promise.all fetches all endpoints concurrently (much faster!)
        const [latestPatch, patchNotes, allChamps] = await Promise.all([
          getLatestPatchVersion(),
          getAllPatchNote(),
          getAllChampions() // Pre-warms the cache for the Champions page!
        ]);

        setPatch(latestPatch);
        setPatchFullInfo(patchNotes[0] || null);
        setChampions(allChamps[0] || null);
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
      {/* Pass whatever props each section needs */}
      <HomeHeroSection heroVideo={heroVideo} />
      
      {/* Example: Pass latest patch note to a patch section */}
      {/* <LatestPatchSection patchInfo={patchFullInfo} /> */}

      {/* Example: Pass champions preview array to a Hero of the Day section */}
      {/* <FeaturedChampionsSection champions={champions.slice(0, 5)} /> */}
    </main>
  );
}