# Hextech Codex

An interactive, high-performance League of Legends web application and lore portal designed to provide a seamless explore-and-read experience for champions, Runeterra factions, digital comics, patch updates, and official cinematics.

---

## 🛠 Tech Stack

* **Frontend Engine:** JavaScript (ES6+), Modern HTML5, CSS3 (Flexbox/Grid, CSS Variables)
* **Architecture:** Single Page Application (SPA) design pattern with ES6 Modules
* **Backend & CMS:** Firebase Realtime Database for dynamic content management and dynamic DOM string rendering
* **UI/UX Infrastructure:** Custom CSS animations, scroll-reveal transitions, responsive card components, and modal overlays

---

## 🌐 APIs Used

| API / Data Source | Service Purpose | Retrieved Data |
| :--- | :--- | :--- |
| **Data Dragon (Riot Games)** | Primary Champion Engine | Roster metadata, stats, ability breakdowns, splash art, and thumbnails |
| **Universe Meeps API** | Lore & Faction Explorer | Region histories, faction emblems, regional champion mappings, and artwork |
| **Comic Service API** | Graphic Novel Vault | Official LoL digital comic issues, cover assets, and issue synopses |
| **RSS-to-JSON Service** | News Aggregator | Real-time patch notes, dev logs, and esports news feeds |
| **YouTube Embed API** | Media Lightbox | Custom embedded streaming for champion themes, login loops, and cinematics |

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
