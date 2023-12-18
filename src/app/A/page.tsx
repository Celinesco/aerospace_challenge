/** @format */

"use client";
import { useState } from "react";
import StatusTracker from "../_components_assignments/StatusTracker";
import { RocketData } from "../../../types";
import VelocityCard from "../_components_assignments/VelocityCard";
import TemperatureCard from "../_components_assignments/TemperatureCard";
import ActionRequired from "../_components_assignments/ActionRequired";

export default function PageA() {
    const [data, setData] = useState<RocketData | null>({
        velocity: 2,
        temperature: 60,
        statusMessage:
            "hola terricolas loren ispum hoal me llame celina tengo 33 aniso casi ya",
        isAscending: true,
        isActionRequired: true,
    });

    return (
        <div className="py-20">
            {data && (
                <div className="p-4 sm:ml-64">
                    <div className="rounded-lg">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-fit">
                                <StatusTracker
                                    name={"Rocket Id"}
                                    status={data?.statusMessage}
                                />
                            </div>
                            <div>
                                <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-full mb-2">
                                    <VelocityCard
                                        isAscending={data?.isAscending}
                                        velocity={data?.velocity}
                                    />
                                </div>
                                <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-full">
                                    {/* dont know the temperature values to be aware of. Maybe with some border values or temperature differences between data would be nice to show a difffent color  */}
                                    <TemperatureCard temperature={data?.temperature} />
                                </div>
                            </div>
                        </div>
                        <div className="h-max mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <ActionRequired action={data?.isActionRequired} />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    graphs
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    actions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
