
'use client';

import { Card, Title, LineChart } from "@tremor/react"

interface TemAltitudeData {
    altitude: number;
    temperature: number
}

interface TemperatureAltitudeProps {
    data: TemAltitudeData[]
}

export default function TemperatueAltitude({ data }: TemperatureAltitudeProps) {

    return (
        <Card>
            <Title>Temperature vs Altitude</Title>
            <LineChart
                className="mt-6"
                data={data}
                index="500ms"
                categories={["temperature", "altitude"]}
                colors={["orange", "gray"]}
                // valueFormatter={valueFormatter}
                yAxisWidth={50}
            />
        </Card>
    )
}