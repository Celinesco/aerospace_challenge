/** @format */

"use client";
import LayoutAB from "../_components_assignments/LayoutAB";
import useWebSocket from "react-use-websocket";
import { useState } from "react";
import { Button } from "@tremor/react";
import { RocketDataWS } from "../_utils/types";
import {
    createsDataStatus,
    createsdataGraphVelocityProp,
    createsTemVsAltitudeProp,
} from "../_components_assignments/utils/functions";

export default function AssignmentB() {
    const [lastValues, setLastValues] = useState<RocketDataWS | null>();
    const [history, setHistory] = useState<RocketDataWS[]>([]);
    const [wSAddress, setWSAddress] = useState<string>("");

    useWebSocket(`${wSAddress}`, {
        onOpen: () => {
            console.log("Websocket conection started");
        },
        onMessage: (message) => {
            const resJson: RocketDataWS = JSON.parse(message.data);
            setLastValues(resJson);
            setHistory((prevData) => {
                const latestElements = [...prevData, resJson].slice(-20);
                return latestElements;
            });
        },
        onError: (err) => {
            console.error(err);
        },
        onClose: () => {
            console.log("Websocket conection is closed");
        },
    });

    const tempVsAltitude = createsTemVsAltitudeProp(
        history,
        "Temperature",
        "Altitude",
        1000
    );
    const dataGraphVelocity = createsdataGraphVelocityProp(history, "Velocity");
    const dataStatus = createsDataStatus(
        history,
        "StatusMessage",
        "IsActionRequired"
    );

    return (
        <div className="p-24 md:p-4 sm:ml-64 flex flex-col items-center justify-center">
            <div className="sm:w-full flex justify-between lg:w-1/2 ">
                <Button
                    className="dark:bg-blue-600 dark:text-white"
                    onClick={() => setWSAddress(`${process.env.WS_ENDPOINT}`)}
                >
                    Start transmition
                </Button>
                <Button
                    className="dark:bg-blue-600 dark:text-white ml-1"
                    onClick={() => setWSAddress("wss//:")}
                >
                    Stop transmition
                </Button>
            </div>
            <LayoutAB
                statusMessage={lastValues?.StatusMessage ?? ""}
                velocity={lastValues?.Velocity ?? 0}
                altitude={lastValues?.Altitude ?? 0}
                temperature={lastValues?.Temperature ?? 0}
                isActionRequired={lastValues?.IsActionRequired ?? false}
                isAscending={lastValues?.IsAscending ?? false}
                preData={dataStatus}
                tempVsAltitude={tempVsAltitude}
                dataGraphVelocity={dataGraphVelocity}
            />
        </div>
    );
}
