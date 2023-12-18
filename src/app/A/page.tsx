'use client';
import { useState } from "react";
import StatusTracker from "../_components_assignments/StatusTracker";
import { RocketData } from "../../../types";

export default function PageA() {
    const [data, setData] = useState<RocketData | null>({
        velocity: 2,
        temperature: 0,
        statusMessage: "hola terricolas",
        isAscending: true,
        isActionRequired: false,
    });

    return (
        <div className="py-20">
            {data &&
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className=" rounded bg-gray-50 dark:bg-gray-800 h-max p-2 ">
                                <StatusTracker
                                    name={"Rocket name"}
                                    status={data?.statusMessage}
                                />
                            </div>
                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    velocity
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    temperature
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                action required
                            </p>
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
            }
        </div>
    )
}