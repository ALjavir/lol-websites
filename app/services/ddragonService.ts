const DDRAGON_BASE_URL = 'https://ddragon.leagueoflegends.com';


let cachedVersion: string | null = null;
//let cachedPatchNotes: any[] | null = null;
let cachedNews: any[] | null = null;
let cachedChampions: any[] | null = null;
let cachedItems: any[] | null = null;
let lang: string = 'en_US';


export async function getLatestPatchVersion(): Promise<string> {
  if (cachedVersion) return cachedVersion;

  try {
    const res = await fetch(`${DDRAGON_BASE_URL}/api/versions.json`);
    if (!res.ok) throw new Error("Failed to fetch game versions");
    
    const versions: string[] = await res.json();
    cachedVersion = versions[0]; // Cache the latest version string
    return cachedVersion;
  } catch (error) {
    console.error("Error fetching patch version:", error);
    throw error;
  }
}




// export async function getAllPatchNote(): Promise<any[]> {
//   if (cachedPatchNotes) return cachedPatchNotes;

//   try {
//     const res = await fetch(`https://soraclee.github.io/riotgames-news-api/data/lol/patchNoteEn.json`);
//     if (!res.ok) throw new Error("Failed to fetch patch notes");
    
//     const data = await res.json();
//     // Handles array responses directly
//     cachedPatchNotes = Array.isArray(data) ? data : Object.values(data);
//     return cachedPatchNotes;
//   } catch (error) {
//     console.error("Error fetching patch notes:", error);
//     throw error;
//   }
// }




export async function getLoLNews(category = 'allNewsEn'): Promise<any[]> {
  if (cachedNews && category === 'allNewsEn') return cachedNews;

  try {
    const res = await fetch(`https://soraclee.github.io/riotgames-news-api/data/lol/${category}.json`);
    if (!res.ok) throw new Error("Failed to fetch League news");
    
    const data = await res.json();
    const newsArray = Array.isArray(data) ? data : Object.values(data);

    if (category === 'allNewsEn') {
      cachedNews = newsArray;
    }

    return newsArray;
  } catch (error) {
    console.error(`Error fetching news [${category}]:`, error);
    throw error;
  }
}

/**
 * 3. Get All Champions (Cached)
 */
export async function getAllChampions(): Promise<any[]> {
  if (cachedChampions) return cachedChampions;

  try {
    const activeVersion = await getLatestPatchVersion(); 
    const res = await fetch(`${DDRAGON_BASE_URL}/cdn/${activeVersion}/data/${lang}/champion.json`);
    if (!res.ok) throw new Error('Failed to fetch champions');
    
    const data = await res.json();
    cachedChampions = Object.values(data.data);
    return cachedChampions;
  } catch (error) {
    console.error('Error fetching champions:', error);
    throw error;
  }
}

/**
 * 4. Get Single Champion Details (Reuses activeVersion)
 */
export async function getChampionDetails(championId: string): Promise<any> {
  try {
    const activeVersion = await getLatestPatchVersion();
    const res = await fetch(`${DDRAGON_BASE_URL}/cdn/${activeVersion}/data/${lang}/champion/${championId}.json`);
    if (!res.ok) throw new Error(`Failed to fetch details for ${championId}`);
    
    const data = await res.json();
    return data.data[championId];
  } catch (error) {
    console.error(`Error fetching champion detail [${championId}]:`, error);
    throw error;
  }
}

/**
 * 5. Get All Items (Cached)
 */
export async function getAllItems():  Promise<any[]> {
  if (cachedItems) return cachedItems;

  try {
    const activeVersion = await getLatestPatchVersion();
    const res = await fetch(`${DDRAGON_BASE_URL}/cdn/${activeVersion}/data/${lang}/item.json`);
    if (!res.ok) throw new Error('Failed to fetch items');
    
    const data = await res.json();
    cachedItems = Object.values(data.data);
    return cachedItems;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
}

/**
 * Asset Helpers
 */
export const ddragonAssets = {
  getSquareIcon: (version: string, imageName: string) => `${DDRAGON_BASE_URL}/cdn/${version}/img/champion/${imageName}`,
  getItemIcon: (version: string, itemId: string) => `${DDRAGON_BASE_URL}/cdn/${version}/img/item/${itemId}.png`,
  getSpellIcon: (version: string, spellName: string) => `${DDRAGON_BASE_URL}/cdn/${version}/img/spell/${spellName}`,
  getSplashArt: (championId: string, skinNum = 0) => `${DDRAGON_BASE_URL}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`,
  getLoadingCard: (championId: string, skinNum = 0) => `${DDRAGON_BASE_URL}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`,
};