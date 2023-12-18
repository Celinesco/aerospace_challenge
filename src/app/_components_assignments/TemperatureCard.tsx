'use client';
import { Card, CategoryBar, Title } from "@tremor/react"

export default function TemperatureCard({ temperature }: { temperature: number }) {
    return (
        <Card>
            <Title>Temperature</Title>
            <CategoryBar
                values={[20, 30, 30, 20]}
                markerValue={temperature}
                colors={["emerald", "yellow", "orange", "rose"]}
            />
        </Card>
    )
}