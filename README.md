# Hextech Codex

An interactive, high-performance League of Legends web application and lore portal designed to provide a seamless explore-and-read experience for champions, Runeterra factions, digital comics, patch updates, and official cinematics.

---

## 🛠 Tech Stack

* **Frontend Engine:** JavaScript (ES6+), Modern HTML5, CSS3 (Flexbox/Grid, CSS Variables)
* **Architecture:** Single Page Application (SPA) design pattern with ES6 Modules
* **Backend & CMS:** Firebase Realtime Database for dynamic content management and dynamic DOM string rendering
* **UI/UX Infrastructure:** Custom CSS animations, scroll-reveal transitions, responsive card components, and modal overlays

---

## 🌐 APIs & Endpoints

| Service / Provider | Resource / Action | Endpoint / URL Structure |
| :--- | :--- | :--- |
| **Data Dragon** | Latest Patch Version | `https://ddragon.leagueoflegends.com/api/versions.json` |
| **Data Dragon** | All Champions Roster | `https://ddragon.leagueoflegends.com/cdn/{version}/data/en_US/champion.json` |
| **Data Dragon** | Detailed Champion Info | `https://ddragon.leagueoflegends.com/cdn/{version}/data/en_US/champion/{championId}.json` |
| **Data Dragon** | Champion Splash Assets | `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{championId}_{skinNum}.jpg` |
| **Universe Meeps** | Featured Regions Index | `https://universe-meeps.leagueoflegends.com/v1/en_us/featured_regions/index.json` |
| **Universe Meeps** | Single Region & Lore Data | `https://universe-meeps.leagueoflegends.com/v1/en_us/regions/{region_slug}.json` |
| **Universe Meeps** | Digital Comics Index | `https://universe-meeps.leagueoflegends.com/v1/en_us/comics/index.json` |
| **RSS-to-JSON** | Patch Notes & News Feed | `https://api.rss2json.com/v1/api.json?rss_url={rss_feed_url}` |
| **YouTube Embed** | Video & Media Lightbox | `https://www.youtube.com/embed/{videoId}` |

---

## 📱 Page & Feature Overview

### 1. Home Page (Central Hub)
* **Hero Showcase:** Highlights featured game cinematics, major patch updates, and spotlight champions inside responsive media containers.
* **Quick-Access Cards:** Fast access to trending champions, newly added comic issues, and esports highlights.
* **Live Ticker:** Real-time status bar displaying server alerts, patch releases, and community announcements.

### 2. News & Patch Hub
* **Dynamic Feed:** Aggregates official patch notes, developer logs, and esports articles into a structured layout.
* **Sorting Controls:** Toggle options to order news items chronologically (Newest vs. Oldest) or filter by category.
* **Client-Side Search:** Real-time search engine to query articles by patch number, title, or keyword without page reloads.

### 3. Champion Codex
* **Interactive Roster:** Visual grid displaying splash art, role badges, and difficulty indicators powered by Data Dragon.
* **Class Filters:** One-click tabs to filter champions by primary playstyle (Assassin, Mage, Tank, Marksman, Support, Fighter).
* **Detailed Modal:** Deep-dive pop-up featuring full lore backstories, ability previews, base stat tables, and high-resolution skin carousels.

### 4. Runeterra Regions & Factions
* **Faction Directory:** Visual catalog of major regions (Demacia, Noxus, Zaun, Ionia, etc.) with custom crests and regional art.
* **Regional Mapping:** Filter system that groups and lists champions according to their canonical home region.
* **Interactive Lore Reader:** Reader layout detailing faction rivalries, territory backgrounds, and region histories loaded via Universe endpoints.

### 5. Digital Comic & Media Vault
* **Comic Gallery:** Series-based catalog allowing users to select graphic novels, inspect cover art, and read storyline synopses.
* **Lightbox Video Player:** Custom video overlay supporting embedded streaming links for champion theme songs, login screens, and cinematics.
