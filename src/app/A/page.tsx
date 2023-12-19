/** @format */

"use client";
import { useState, useEffect } from "react";
import { RocketData } from "../../../types";
import { Button } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";
import LayoutAB from "../_components_assignments/LayoutAB";
import {
    createsDataStatus,
    createsTemVsAltitudeProp,
    createsdataGraphVelocityProp,
} from "../_components_assignments/utils/functions";

export default function PageA() {
    const [lastValues, setLastValues] = useState<RocketData | null>();
    // KEEPS record of 15 values
    const [history, setHistory] = useState<RocketData[]>([]);

    async function fetchRocket() {
        const amountOfValuesToBeSave = -15;
        try {
            const res = await fetch(
                `${process.env.API_URL}${process.env.A_ENDPOINT}`
            );
            const resJson = await res.json();
            setLastValues(resJson);
            setHistory((prev) => {
                const prevElements = [...prev, resJson].slice(amountOfValuesToBeSave);
                return prevElements;
            });
            return;
        } catch (error) {
            console.error("Database Error:", error);
            throw new Error("Failed to fetch data.");
        }
    }

    useEffect(() => {
        fetchRocket();
    }, []);

    const tempVsAltitude = createsTemVsAltitudeProp(
        history,
        "temperature",
        "altitude",
        1000
    );
    const dataGraphVelocity = createsdataGraphVelocityProp(history, "velocity");
    const dataStatus = createsDataStatus(
        history,
        "statusMessage",
        "isActionRequired"
    );

    return (
        <div className="p-24 md:p-4 sm:ml-64 flex flex-col items-center justify-center">
            <div>
                <Button
                    className="dark:bg-blue-600 dark:text-white"
                    icon={RefreshIcon}
                    onClick={() => {
                        fetchRocket();
                    }}
                >
                    Refresh data
                </Button>
            </div>

            {lastValues && (
                <>
                    <LayoutAB
                        // if both endpoints provide the same data, only 'lastValues' as value could be sent as prop
                        statusMessage={lastValues.statusMessage}
                        velocity={lastValues.velocity}
                        altitude={lastValues.altitude}
                        temperature={lastValues.temperature}
                        isActionRequired={lastValues.isActionRequired}
                        isAscending={lastValues.isAscending}
                        preData={dataStatus}
                        tempVsAltitude={tempVsAltitude}
                        dataGraphVelocity={dataGraphVelocity}
                    />
                </>
            )}
        </div>
    );
}
