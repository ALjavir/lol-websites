const UNIVERSE_BASE_URL = 'https://universe-meeps.leagueoflegends.com/v1/en_us';
const CLOUDFRONT_VIDEO_URL = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities';


export async function getUniverseChampionData(slug:string) {
  try {
    const res = await fetch(`${UNIVERSE_BASE_URL}/champions/${slug.toLowerCase()}/index.json`);
    if (!res.ok) throw new Error(`Failed to fetch Universe lore for ${slug}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching universe champion [${slug}]:`, error);
    throw error;
  }
}

/**
 * 2. Fetch the complete Universe Explore Index (All regions, factions, and featured media)
 */
export async function getUniverseExploreIndex() {
  try {
    const res = await fetch(`${UNIVERSE_BASE_URL}/explore2/index.json`);
    if (!res.ok) throw new Error('Failed to fetch Universe explore index');
    return await res.json();
  } catch (error) {
    console.error('Error fetching Universe explore index:', error);
    throw error;
  }
}

/**
 * Helper Utility to construct Ability Preview Video Loops
 * @param {string|number} key - Champion key/numerical ID (e.g., 266 or '0266')
 * @param {string} spellKey - Skill identifier: 'Q1', 'W1', 'E1', 'R1', or 'P1'
 */
export function getAbilityVideoUrl(key:string, spellKey:string) {
  // CloudFront requires 4-digit zero-padded IDs (e.g., 99 -> '0099')
  const paddedKey = String(key).padStart(4, '0');
  return `${CLOUDFRONT_VIDEO_URL}/${paddedKey}/ability_${paddedKey}_${spellKey.toUpperCase()}.webm`;
}