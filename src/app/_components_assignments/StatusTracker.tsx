'use client';
import { Card, Title, Tracker, Flex, Text, Color, Badge } from "@tremor/react";
import { useEffect } from "react";


type PrevData = {
    tooltip: string;
    color: any
}

type TrackerProps = {
    name: string,
    status: string,
    preData: PrevData[]
}

const StatusTracker = ({ name = "Rocket Name/id", status, preData }: TrackerProps) => {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const minutes = (min < 10 ? '0' : "") + min
    const sec = date.getSeconds();
    const seconds = (sec < 10 ? '0' : "") + sec
    // this is necesary for the first values if not, the length always should be 15
    const dataLength = preData?.length ?? 0;
    const amountOfNotRequiredActionsStates = preData.filter((x) => {
        return x.color === "emerald"
    })
    const uptime = dataLength > 0 ? amountOfNotRequiredActionsStates.length / dataLength : 0


    return (
        <Card className="w-96">
            <Title>{name}</Title>
            <Text>{`Last status at: ${hours}:${minutes}:${seconds}`}</Text>
            <p className="whitespace-normal py-1 bg-blue-200 text-blue-900 p-2 rounded mt-1 text-sm">{status}</p>
            <Flex justifyContent="end" className="mt-4">
                <Text>Uptime {uptime > 0 ? Math.ceil(uptime * 100) : 0} %</Text>
            </Flex>
            <Tracker data={preData} className="mt-2" />
        </Card>
    )

};


export default StatusTracker;