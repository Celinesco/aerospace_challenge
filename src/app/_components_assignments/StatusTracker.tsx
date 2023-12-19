/** @format */

"use client";
import { Card, Title, Tracker, Flex, Text } from "@tremor/react";
import { TrackerProps } from "../_utils/types";
import { formatTimeUnit } from "./utils/functions";

const StatusTracker = ({
    name = "Spectrum",
    status,
    preData,
}: TrackerProps) => {
    const date = new Date();
    const hours = date.getHours();
    // min and sec are declare twice to properly format them
    const min = date.getMinutes();
    const minutes = formatTimeUnit(min);
    const sec = date.getSeconds();
    const seconds = formatTimeUnit(sec);

    // this is necesary for the first values otherwise the length always should be 15
    const dataLength = preData?.length ?? 0;
    const amountOfNotRequiredActionsStates = preData.filter((x) => {
        return x.color === "emerald";
    });
    // percentage of how many times action was not required
    const uptime =
        dataLength > 0 ? amountOfNotRequiredActionsStates.length / dataLength : 0;

    return (
        <Card className="w-96">
            <Title>{name}</Title>
            <Text>{`Last status at: ${hours}:${minutes}:${seconds}`}</Text>
            <p className="whitespace-normal py-1 bg-blue-200 text-blue-900 p-2 rounded mt-1 text-sm dark:bg-blue-800 dark:text-white">
                {status}
            </p>
            <Flex justifyContent="end" className="mt-4">
                <Text>Uptime {uptime > 0 ? Math.ceil(uptime * 100) : 0} %</Text>
            </Flex>
            <Tracker data={preData} className="mt-2" />
        </Card>
    );
};

export default StatusTracker;
