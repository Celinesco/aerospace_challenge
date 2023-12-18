/** @format */

"use client";
import { useState, useEffect } from "react";
import StatusTracker from "../_components_assignments/StatusTracker";
import { RocketData } from "../../../types";
import VelocityCard from "../_components_assignments/VelocityCard";
import TemperatureCard from "../_components_assignments/TemperatureCard";
import ActionRequired from "../_components_assignments/ActionRequired";
import { Button } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";
import VelocityGraph from "../_components_assignments/VelocityGraph";
import TemperatueAltitude from "../_components_assignments/TemperatureAltitude";

export default function PageA() {
    const [lastValues, setLastValues] = useState<RocketData | null>({
        velocity: 0,
        altitude: 0,
        temperature: 0,
        statusMessage: "ss",
        isAscending: false,
        isActionRequired: true,
    });
    const [history, setHistory] = useState<RocketData[]>([])

    async function fetchRocket() {
        try {
            const res = await fetch(
                `${process.env.API_URL}${process.env.A_ENDPOINT}`
            );
            const resJson = await res.json();
            setLastValues(resJson);
            setHistory((prev) => {
                const prevElements = [...prev, resJson].slice(-15);
                return prevElements;
            })
            return;
        } catch (error) {
            console.error("Database Error:", error);
            throw new Error("Failed to fetch data.");
        }
    }

    useEffect(() => {
        fetchRocket();
    }, []);

    const tempVsAltitude = history.map((data) => {
        return {
            temperature: data.temperature,
            altitude: data.altitude / 1000
        }
    })

    const dataGraphVelocity = history.map((data) => {
        return {
            velocity: data.velocity
        }
    })

    const dataStatus = history.map((data) => {
        return {
            tooltip: data.statusMessage,
            color: data.isActionRequired ? "red" : "emerald"
        }
    })

    return (
        <div className="py-10">
            {lastValues && (
                <div className="p-4 sm:ml-64">
                    <Button
                        icon={RefreshIcon}
                        onClick={() => {
                            fetchRocket();
                        }}
                    >
                        Refresh data
                    </Button>
                    <div className="rounded-lg mt-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-fit">
                                <StatusTracker
                                    name={"Rocket Id"}
                                    status={lastValues?.statusMessage}
                                    preData={dataStatus}
                                />
                            </div>
                            <div>
                                <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-full mb-2">
                                    <VelocityCard
                                        isAscending={lastValues?.isAscending}
                                        velocity={lastValues?.velocity}
                                    />
                                </div>
                                <div className="rounded bg-gray-50 dark:bg-gray-800 h-max p-2 w-full">
                                    {/* dont know the temperature values to be aware of. Maybe with some border values or temperature differences between data would be nice to show a warning  */}
                                    <TemperatureCard temperature={lastValues?.temperature} />
                                </div>
                            </div>
                        </div>
                        <div className="h-max mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <ActionRequired action={lastValues?.isActionRequired} />
                        </div>
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                                <TemperatueAltitude data={tempVsAltitude} />
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                                <VelocityGraph data={dataGraphVelocity} />
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
