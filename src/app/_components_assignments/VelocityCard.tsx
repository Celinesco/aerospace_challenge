/** @format */

import { Title, Card, Text, Flex } from "@tremor/react";

interface VelocityCardProps {
    isAscending: boolean;
    velocity: number;
    altitude: number;
}

export default function VelocityCard({
    velocity,
    isAscending,
    altitude,
}: VelocityCardProps) {
    return (
        <Card className="flex-grow">
            <Flex className="flex-col md:flex-row">
                <Flex className="flex-col mb-1 md:mb-0">
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
