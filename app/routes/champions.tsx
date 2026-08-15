import React, { useEffect, useState } from 'react';
import {
    cachedChampions,
    getAllChampions
} from "../services/ddragonService";
import Loading from "~/components/common/loading/loading";
import ChampHeroSection from "~/components/page/champions/hero-section/hero-section";
import ALlChampSection from '~/components/page/champions/allChamp-section/allChamp-section';



export default function Champion() {

    const [champions, setChampions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
            try {
                setLoading(true);
                if (!cachedChampions || cachedChampions.length === 0) {
                    const data = await getAllChampions();
                    setChampions(data);
                } else {
                    setChampions(cachedChampions);
                }
            } catch (error) {
                console.error("Failed to load champions:", error);
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
            <ChampHeroSection />
            <ALlChampSection allChampData={champions} />
        </main>
    );
}