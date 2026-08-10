const UNIVERSE_BASE_URL = 'https://universe-meeps.leagueoflegends.com/v1/en_us';
const CLOUDFRONT_VIDEO_URL = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities';
export let cachedAllRegions: any[] | null = null;
let cachedComicsIndex: any[] | null = null;
export const RUNETERRA_REGION_SLUGS = [
  'ixtal','bandle-city',
  'bilgewater', 'demacia', 'freljord',
  'ionia', 'noxus', 'piltover',
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



export async function getAllLoLComics() {
  if (cachedComicsIndex) return cachedComicsIndex;

  try {
    const res = await fetch(`${UNIVERSE_BASE_URL}/comics/index.json`);
    if (!res.ok) throw new Error('Failed to fetch comics list');

    const data = await res.json();
    cachedComicsIndex = data.comics || [];
    return cachedComicsIndex;
  } catch (error) {
    console.error('Error fetching comics:', error);
    throw error;
  }
}

/**
 * 2. Fetch specific comic series metadata
 * @param slug - e.g. 'zed', 'lux', 'ashe-warmother'
 */
export async function getComicDetails(slug: string) {
  try {
    const res = await fetch(`${UNIVERSE_BASE_URL}/comics/${slug.toLowerCase()}/index.json`);
    if (!res.ok) throw new Error(`Failed to fetch comic details for [${slug}]`);

    return await res.json();
  } catch (error) {
    console.error(`Error fetching comic [${slug}]:`, error);
    throw error;
  }
}

/**
 * 3. Fetch image pages for a specific comic issue
 * @param slug - e.g. 'zed'
 * @param issueNumber - e.g. 1
 */
export async function getComicIssuePages(slug: string, issueNumber = 1) {
  try {
    const res = await fetch(
      `${UNIVERSE_BASE_URL}/comics/${slug.toLowerCase()}/issue-${issueNumber}/index.json`
    );
    if (!res.ok) throw new Error(`Failed to fetch issue #${issueNumber} for [${slug}]`);

    return await res.json();
  } catch (error) {
    console.error(`Error fetching issue pages for [${slug} issue ${issueNumber}]:`, error);
    throw error;
  }
}


