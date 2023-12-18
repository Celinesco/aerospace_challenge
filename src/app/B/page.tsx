/** @format */

"use client";
import LayoutAB from "../_components_assignments/LayoutAB";
import useWebSocket from "react-use-websocket";
import { useState } from "react";
import { Button } from "@tremor/react";
import { RocketDataWS } from "../../../types";

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

    const dataStatus = history.map((data) => {
        return {
            tooltip: data.StatusMessage,
            color: data.IsActionRequired ? "red" : "emerald",
        };
    });

    const tempVsAltitude = history.map((data) => {
        return {
            temperature: data.Temperature,
            altitude: data.Altitude / 1000,
        };
    });

    const dataGraphVelocity = history.map((data) => {
        return {
            velocity: data.Velocity,
        };
    });



    return (
        <div className="p-4 sm:ml-64">
            <div className="flex justify-between">
                <Button onClick={() => setWSAddress(`${process.env.WS_ENDPOINT}`)}>
                    Start transmition
                </Button>
                <Button onClick={() => setWSAddress("wss//:")}>Stop transmition</Button>
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
