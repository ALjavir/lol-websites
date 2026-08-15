import React, { useEffect, useState } from 'react';
import {
   
    getAllRegionsData
} from "../services/universeService";
import Loading from "~/components/common/loading/loading";
import RegionHeroSection from '~/components/page/regions/hero-section/hero-section';
import AllRegionsSection from '~/components/page/regions/allRegion-section/allRegions-section';


export default function Regions() {



    const [regions, setRegions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function init() {
            try {
                setLoading(true);
              
                    const data = await getAllRegionsData();
                    setRegions(data);
              
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
            <RegionHeroSection />
            <AllRegionsSection allRegionsData={regions}/>
       </main>
   )


}