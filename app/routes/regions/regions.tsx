import React, { useEffect, useState } from 'react';
import {
    cachedAllRegions,
    getAllRegionsData
} from "../../services/universeService";
import Loading from "~/components/common/loading/loading";
import RegionHeroSection from '~/components/page/regions/hero-section/hero-section';


export default function Regions() {



    const [regions, setRegions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function init() {
            try {
                setLoading(true);
                if (!cachedAllRegions || cachedAllRegions.length === 0) {
                    const data = await getAllRegionsData();
                    setRegions(data);
                } else {
                    setRegions(cachedAllRegions);
                }
            } catch (error) {
                console.error("Failed to load champions:", error);
            } finally {
                setLoading(false);
            }
        }
        init();
    }, []
    );
    if (loading) {
        return (
            <Loading loading={loading} fullScreen />
        );
    }

    return (
        <main>
            <RegionHeroSection/>
       </main>
   )


}