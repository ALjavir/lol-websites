const UNIVERSE_BASE_URL = 'https://universe-meeps.leagueoflegends.com/v1/en_us';
const CLOUDFRONT_VIDEO_URL = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities';
let cachedAllRegions: any[] | null = null;

export const RUNETERRA_REGION_SLUGS = [
  'bandle-city',
  'bilgewater', 'demacia', 'freljord',
  'ionia', 'ixtal', 'noxus', 'piltover',
  'shadow-isles', 'shurima', 'void', 'zaun'
];


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





export async function getUniverseRegionData(slug: string) {
  try {
    const res = await fetch(`${UNIVERSE_BASE_URL}/factions/${slug.toLowerCase()}/index.json`);
    if (!res.ok) throw new Error(`Failed to fetch region data for [${slug}]`);

    return await res.json();
  } catch (error) {
    console.error(`Error fetching region details for [${slug}]:`, error);
    throw error;
  }
}


export async function getAllRegionsData() {
  if (cachedAllRegions) return cachedAllRegions;

  try {
    const regionPromises = RUNETERRA_REGION_SLUGS.map((slug) => getUniverseRegionData(slug));
    const results = await Promise.all(regionPromises);
    cachedAllRegions = results
    // cachedAllRegions = results.map((data: { faction: any; }) => data.faction);
    return cachedAllRegions;
  } catch (error) {
    console.error('Error fetching all regions:', error);
    throw error;
  }
}

export function getAbilityVideoUrl(key:string, spellKey:string) {
  // CloudFront requires 4-digit zero-padded IDs (e.g., 99 -> '0099')
  const paddedKey = String(key).padStart(4, '0');
  return `${CLOUDFRONT_VIDEO_URL}/${paddedKey}/ability_${paddedKey}_${spellKey.toUpperCase()}.webm`;
}



