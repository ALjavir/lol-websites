import { Divider } from "~/components/common/divider/divider";
import mapDivider from '~/assets/image/divider/featured-battlefield.png';
import"./allRegions-style.css"


interface AllRegionsSectionProps {
    allRegionsData: any[];
}


export default function AllRegionsSection({ allRegionsData }: AllRegionsSectionProps) {
    return (
        <section id="all-regions-section">
            <Divider
                icon={mapDivider}
                text={`REGIONS | ${allRegionsData.length}`}
            />
            <div className="all-reg-data-grid" >


                {
                    allRegionsData.map(
                        (data) =>
                            <div className='reg-data-card'>
                                <img src={data.faction.image.uri} alt={data.faction.image.title} />
                                <h1> {data.faction.name}</h1>
                            </div>
                    )
                }

            </div>
        </section>
    )
}