import { Title, Card, Text } from "@tremor/react";


interface VelocityCardProps {
    isAscending: boolean;
    velocity: number
}

export default function VelocityCard({ velocity, isAscending }: VelocityCardProps) {
    return (
        <Card className="flex-grow">
            <Title>Velocity</Title>
            <Text>{isAscending ? "Ascending" : "Descending"}</Text>
            <Text>{velocity ?? "77km/s"}</Text>
        </Card>
    )
}