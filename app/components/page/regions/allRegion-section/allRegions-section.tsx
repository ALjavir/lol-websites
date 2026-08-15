import { Divider } from "~/components/common/divider/divider";
import mapDivider from '~/assets/image/divider/featured-battlefield.png';
import"./allRegions-style.css"
import { getRegionUrl } from "~/services/getUrlService";


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
                            <a className='reg-data-card'
                               href={getRegionUrl(data.id)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                            >
                                <img src={data.faction.image.uri} alt={data.faction.image.title} />
                                <h1> {data.faction.name}</h1>
                            </a>
                    )
                }

            </div>
        </section>
    )
}