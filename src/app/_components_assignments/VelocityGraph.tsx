/** @format */

"use client";

import { Card, Title, LineChart } from "@tremor/react";

export interface VelocityAltitudeProps {
    data: { velocity: number }[];
}

export default function VelocityGraph({ data }: VelocityAltitudeProps) {
    return (
        <Card>
            <Title>Velocity</Title>
            <LineChart
                className="mt-6"
                data={data}
                index="500ms"
                categories={["velocity"]}
                colors={["emerald"]}
                // valueFormatter={valueFormatter}
                yAxisWidth={50}
            />
        </Card>
    );
}
