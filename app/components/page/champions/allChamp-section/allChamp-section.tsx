import champDivider from '~/assets/image/divider/icon_champion.png';
import fighterDivider from '~/assets/image/divider/role_icon_fighter.png';
import mageDivider from '~/assets/image/divider/role_icon_mage.png';
import assassinDivider from '~/assets/image/divider/role_icon_assassin.png';
import supportDivider from '~/assets/image/divider/role_icon_support.png';
import tankDivider from '~/assets/image/divider/role_icon_tank.png';
import marksmanDivider from '~/assets/image/divider/role_icon_marksman.png';
import { ddragonAssets } from "~/services/ddragonService";
import "./allChamp-style.css";



interface ALlChampSectionProps {
    allChampData: any[];
}


import { useMemo, useState } from "react";
import { Divider } from '~/components/common/divider/divider';

export default function ALlChampSection({
    allChampData
}: ALlChampSectionProps) {

    const [sortBy, setSortBy] = useState<"all" | "role">("all");

    const roleDataMap = [
        {
            role: "Fighter",
            image: fighterDivider
        },
        {
            role: "Mage",
            image: mageDivider
        },
        {
            role: "Marksman",
            image: marksmanDivider
        },
        {
            role: "Assassin",
            image: assassinDivider
        },
        {
            role: "Support",
            image: supportDivider
        },
        {
            role: "Tank",
            image: tankDivider
        }
    ];

    const roleChampData = useMemo(() => {

        return roleDataMap.map((role) => {

            const champions = allChampData.filter((champion) =>
                champion.tags?.includes(role.role)
            );

            return {
                ...role,
                data: champions
            };

        });

    }, [allChampData]);


    return (
        <section id="all-champ-section">

            <div className="all-champ-sort">

                <button
                    className={sortBy === "all" ? "active" : ""}
                    onClick={() => setSortBy("all")}
                >
                    A-Z | {allChampData.length}
                </button>

                <button
                    className={sortBy === "role" ? "active" : ""}
                    onClick={() => setSortBy("role")}
                >
                    ROLE | {roleDataMap.length}
                </button>

            </div>


            {sortBy === "all" && (
                <div className='all-chm-continer'>
                    <Divider
                        icon={champDivider}
                        text={`CHAMPIONS | ${allChampData.length}`}
                    />


                    <div className="all-champ-grid">

                        {allChampData.map((champion) => (
                            <div
                                className="all-champ-card"
                                key={champion.id}
                            >
                                <img
                                    src={ddragonAssets.getSplashArt(champion.id)}
                                    alt={champion.name}
                                />
                                <div className='all-ch-info-card'>
                                    <h1>{champion.name}</h1>
                                    <div className='all-ch-role-card'>
                                        <p>
                                            {champion.tags.join(" // ")}
                                        </p>
                                        <p>❯</p>

                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>

            )}

            {sortBy === "role" && (

                <div className="all-champ-role-container">

                    {roleChampData.map((role) => (

                        <div
                            className="all-champ-role"
                            key={role.role}
                        >
                            <Divider
                                icon={role.image}
                                text={`${role.role} | ${role.data.length}`}
                            />

                            <div className="all-champ-grid">

                                {role.data.map((champion) => (

                                    <div
                                        className="all-champ-card"
                                        key={champion.id}
                                    >


                                        <img
                                            src={ddragonAssets.getSplashArt(champion.id)}
                                            alt={champion.name}
                                        />

                                        <div className='all-ch-info-card'>
                                            <h1>{champion.name}</h1>
                                            <div className='all-ch-role-card'>
                                                <p>
                                                    {champion.tags.join(" // ")}
                                                </p>
                                                <p>❯</p>

                                            </div>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </section>
    );
}