/** @format */

"use client";
import { useState, useEffect } from "react";
import { RocketData } from "../../../types";
import { Button } from "@tremor/react";
import { RefreshIcon } from "@heroicons/react/outline";
import LayoutAB from "../_components_assignments/LayoutAB";
import styles from '../_styles/layoutAB.module.css'


export default function PageA() {
    const [lastValues, setLastValues] = useState<RocketData | null>({
        velocity: 0,
        altitude: 0,
        temperature: 0,
        statusMessage: "",
        isAscending: false,
        isActionRequired: true
    });
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
        <div className={styles.right_panel}>

            <div className="p-4 sm:ml-64 flex flex-col items-center justify-center">
                <div className="w-full justify-start" >
                    <Button
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
        </div>
    );
}
