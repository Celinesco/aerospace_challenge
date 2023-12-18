'use client';
import { Card, Title, Tracker, Flex, Text, Color, Badge } from "@tremor/react";

interface Tracker {
    color: Color;
    tooltip: string;
}

const data: Tracker[] = [
    //replace with tootletip: statusMessage
    //color:if action was required red else green
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "rose", tooltip: "Downtime" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "gray", tooltip: "Maintenance" },
];

type TrackerProps = {
    name: string,
    status: string
}

const StatusTracker = ({ name = "Rocket Name/id", status }: TrackerProps) => {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const minutes = (min < 10 ? '0' : "") + min
    const sec = date.getSeconds();
    const seconds = (sec < 10 ? '0' : "") + sec


    return (
        <Card className="w-96">
            <Title>{name}</Title>
            <Text>{`Last status at: ${hours}:${minutes}:${seconds}`}</Text>
            <p className="whitespace-normal py-1 bg-blue-200 text-blue-900 p-2 rounded mt-1 text-sm">{status}</p>
            <Flex justifyContent="end" className="mt-4">
                <Text>Uptime 92%</Text>
            </Flex>
            <Tracker data={data} className="mt-2" />
        </Card>
    )

};


export default StatusTracker;