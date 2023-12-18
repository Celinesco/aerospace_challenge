/** @format */

"use client";
import { Card, Text, Flex, MarkerBar } from "@tremor/react";

export default function TemperatureCard({
    temperature,
}: {
    temperature: number;
}) {

    const scaleFactor = 0.334

    return (
        <Card className="max-w-sm">
            <Flex>
                <Text>Temperature (K)</Text>
            </Flex>
            <Card className="max-w-sm">
                <Flex>
                    <Text>1 </Text>
                    <Text>300 </Text>
                </Flex>
                <MarkerBar value={temperature * scaleFactor} minValue={0} maxValue={100} color="yellow" className="mt-4" />
            </Card>
        </Card>
    );
}
