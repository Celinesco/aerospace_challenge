
'use client';

import { Card, Title, LineChart } from "@tremor/react"
import { RocketData } from "../../../types";

interface DataChart {
    velocity: number
}

interface VelocityAltitudeProps {
    data: DataChart[]
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
    )
}