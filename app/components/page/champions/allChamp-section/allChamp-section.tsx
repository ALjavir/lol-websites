import champDivider from '~/assets/image/divider/icon_champion.png';
import fighterDivider from '~/assets/image/divider/role_icon_fighter.png';
import mageDivider from '~/assets/image/divider/role_icon_mage.png';
import assassinDivider from '~/assets/image/divider/role_icon_assassin.png';
import supportDivider from '~/assets/image/divider/role_icon_support.png';
import tankDivider from '~/assets/image/divider/role_icon_tank.png';
import marksmanDivider from '~/assets/image/divider/role_icon_marksman.png';


interface ALlChampSectionProps {
    allChampData: any[];
}


import { useMemo, useState } from "react";

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

            {/* SORT BUTTONS */}

            <div className="champ-sort">

                <button
                    className={sortBy === "all" ? "active" : ""}
                    onClick={() => setSortBy("all")}
                >
                    ALL
                </button>

                <button
                    className={sortBy === "role" ? "active" : ""}
                    onClick={() => setSortBy("role")}
                >
                    ROLE
                </button>

            </div>


            {/* =========================
                ALL CHAMPIONS
            ========================= */}

            {sortBy === "all" && (

                <div className="champ-grid">

                    {allChampData.map((champion) => (

                        <div
                            className="champ-card"
                            key={champion.id}
                        >

                            <img
                                src={champion.image.full}
                                alt={champion.name}
                            />

                            <h2>{champion.name}</h2>

                        </div>

                    ))}

                </div>

            )}


            {/* =========================
                CHAMPIONS BY ROLE
            ========================= */}

            {sortBy === "role" && (

                <div className="champ-role-container">

                    {roleChampData.map((role) => (

                        <section
                            className="champ-role-section"
                            key={role.role}
                        >

                            <img
                                className="role-divider"
                                src={role.image}
                                alt={role.role}
                            />

                            <h2>{role.role}</h2>

                            <div className="champ-grid">

                                {role.data.map((champion) => (

                                    <div
                                        className="champ-card"
                                        key={champion.id}
                                    >

                                        <img
                                            src={champion.image.full}
                                            alt={champion.name}
                                        />

                                        <h2>{champion.name}</h2>

                                    </div>

                                ))}

                            </div>

                        </section>

                    ))}

                </div>

            )}

        </section>
    );
}