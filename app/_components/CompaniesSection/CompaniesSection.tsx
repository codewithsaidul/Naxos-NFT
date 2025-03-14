import React from 'react';
import Image from "next/image";

const CompaniesSection = () => {
    return (
        <div className={"relative w-full py-10 overflow-hidden"}>
            <div className={"whitespace-nowrap animate-scroll"}>

                {
                    [...Array(2)].map((_, containerIndex) => (
                        <div key={containerIndex} className={"inline-flex items-center gap-[78px] mr-[78px]"}>
                            {
                                Array.from({length: 7}).map((_, i) => (
                                    <div key={`${containerIndex} - ${i}`} className={"inline-block"}>
                                        <Image
                                            src={`/images/companies/com-${i + 1}.png`}
                                            alt={"companies logo"}
                                            width={150}
                                            height={150}
                                            className={"min-w-[100px] w-[150px] h-[150px] object-contain"}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default CompaniesSection;