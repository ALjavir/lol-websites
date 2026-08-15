const LOL_BASE_URL = 'https://www.leagueoflegends.com';
const UNI_BASE_URL = 'https://universe.leagueoflegends.com';

export function getOfficialLoLNewsUrl(path: string): string {
  if (!path) return LOL_BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${LOL_BASE_URL}${cleanPath}`;
}

export function getChempionUrl(path: string): string{

    return `${UNI_BASE_URL}/champion/${path}/`;
   
}

export function getRegionUrl(path: string): string{

    return `${UNI_BASE_URL}/region/${path}/`;
   
}