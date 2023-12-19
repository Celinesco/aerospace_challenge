/** @format */

"use client";
import { Card, Text, Flex, MarkerBar } from "@tremor/react";
import { celsiusToKelvin } from "./utils/functions";

export default function TemperatureCard({
    temperature,
}: {
    temperature: number;
}) {
    // Temperature for sure is not celsius but I did this just as a draft to have an idea
    const scaleFactor = 0.167;
    const valueOnScale = celsiusToKelvin(temperature) * scaleFactor;

    return (
        <Card className="w-full">
            <Flex>
                <Text>Temperature:</Text>
                <div className="text-center mt-1">
                    <Text>{Math.floor(celsiusToKelvin(temperature))} K</Text>
                    <Text>{Math.floor(temperature)} C</Text>
                </div>
            </Flex>
            <Card className="max-w-sm">
                <Flex>
                    <Text>1 </Text>
                    <Text>600 </Text>
                </Flex>
                {/* Since I don't know the limits, it can happen that the value might fall outside the card */}
                {/* I only added a limit for the left side */}
                <MarkerBar
                    value={valueOnScale > 0 ? valueOnScale : 0}
                    minValue={0}
                    maxValue={100}
                    color="yellow"
                    className="mt-4"
                />
            </Card>
        </Card>
    );
}
