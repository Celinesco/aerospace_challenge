/** @format */

"use client";
import { useState, useEffect } from "react";
import { RocketData } from "../../../types";
import { Button } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";
import LayoutAB from "../_components_assignments/LayoutAB";


export default function PageA() {
    const [lastValues, setLastValues] = useState<RocketData | null>();
    const [history, setHistory] = useState<RocketData[]>([]);

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
            });
            return;
        } catch (error) {
            console.error("Database Error:", error);
            throw new Error("Failed to fetch data.");
        }
    }

    useEffect(() => {
        // fetchRocket();
    }, []);

    const tempVsAltitude = history.map((data) => {
        return {
            temperature: data.temperature,
            altitude: data.altitude / 1000,
        };
    });

    const dataGraphVelocity = history.map((data) => {
        return {
            velocity: data.velocity,
        };
    });

    const dataStatus = history.map((data) => {
        return {
            tooltip: data.statusMessage,
            color: data.isActionRequired ? "red" : "emerald",
        };
    });

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
                    <LayoutAB
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
                </div>
            )}
        </div>
    );
}
