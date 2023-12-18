/** @format */

import { Title, Card, Text, Flex } from "@tremor/react";

interface VelocityCardProps {
    isAscending: boolean;
    velocity: number;
    altitude: number
}

export default function VelocityCard({
    velocity,
    isAscending,
    altitude,
}: VelocityCardProps) {
    return (
        <Card className="flex-grow">
            <Flex>
                <Flex className="flex-col">
                    <Title>Velocity km/s</Title>
                    <Text>{velocity}</Text>
                </Flex>
                <Flex className="flex-col">
                    <Title>Altitude</Title>
                    <Text>{altitude}</Text>
                    <Text>{isAscending ? "Ascending" : "Descending"}</Text>
                </Flex>
            </Flex>
        </Card>
    );
}
