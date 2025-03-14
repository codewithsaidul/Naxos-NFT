import React from 'react';
import Image from "next/image";

const CollectionCard = ({card}: {
    card: {
        name: string,
        username: string,
        avatar: string,
        category: string,
        nfts: {
            bg: string,
            image: string,
        }[]
    }
}) => {
    return (
        //
        <div className={"flex w-full flex-col gap-2.5 rounded-[10px] bg-white/10 p-[10px] lg:gap-5 lg:w-[380px] lg:flex-1 lg:p-5"}>
            {/*==================== Header =============*/}
            <div className="flex items-start justify-between">
                {/*======= User Info =========*/}
                <div className={"flex items-center gap-3"}>
                    {/*user image  */}
                    <div className={"relative h-[26px] w-[26px] lg:w-[47px] lg:h-[47px]"}>
                        <Image src={card.avatar} alt={card.name} fill className={"rounded-full object-cover"}/>
                    </div>

                    {/* name & username*/}
                    <div className={"flex flex-col"}>
                        {/*name*/}
                        <h3 className={"text-[12px] lg:text-lg"}>{card.name}</h3>

                        {/*user username*/}
                        <span className={"text-10 text-white/50 lg:text-14"}>{card.username}</span>
                    </div>
                </div>

                {/*======= Like Count ===========*/}
                <div className={"flex items-center gap-2"}>
                    <div className={"relative h-[18px] w-[18px] lg:w-5 lg:h-5"}>
                        <Image src={"/images/heart.png "} alt={card.name} fill className={"object-contain"}/>
                    </div>

                    <span className={"text-[11px] lg:text-lg"}>63</span>
                </div>
            </div>


            {/*==================== Collection Container =============*/}
            <div className="grid grid-cols-2 gap-4">
                {/*====== First Column ==============*/}
                <div className={"relative w-full flex-1 h-[257px] overflow-hidden rounded-lg"}
                     style={{backgroundColor: card.nfts[0].bg}}
                >
                    <Image src={card.nfts[0].image} alt={"Collection Element"} fill className={"object-cover"}/>
                </div>

                {/*============ Second Column ==============*/}
                <div className={"flex flex-col gap-4"}>
                    <div className={"relative flex-1 w-full overflow-hidden rounded-lg"}
                         style={{backgroundColor: card.nfts[1].bg}}
                    >
                        <Image src={card.nfts[1].image} alt={"Collection Image"} fill className={"object-cover"}/>
                    </div>
                    <div className={"relative flex-1 w-full overflow-hidden rounded-lg"}
                         style={{backgroundColor: card.nfts[2].bg}}
                    >
                        <Image src={card.nfts[2].image} alt={"Collection Image"} fill className={"object-cover"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;