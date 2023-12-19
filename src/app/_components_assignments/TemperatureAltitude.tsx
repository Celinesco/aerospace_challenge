
'use client';

import { Card, Title, LineChart } from "@tremor/react"
import { TemperatureAltitudeProps } from "../../../types";


export default function TemperatueAltitude({ data }: TemperatureAltitudeProps) {

    return (
        <Card>
            <Title>Temperature vs Altitude</Title>
            <LineChart
                className="mt-6"
                data={data}
                index="500ms"
                categories={["temperature", "altitude"]}
                colors={["orange", "pink"]}
                // valueFormatter={valueFormatter}
                yAxisWidth={50}
            />
        </Card>
    )
}