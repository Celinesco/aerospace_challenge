/** @format */

"use client";
import { Card, Text, Flex, MarkerBar } from "@tremor/react";

export default function TemperatureCard({
    temperature,
}: {
    temperature: number;
}) {
    const scaleFactor = 0.334;
    const valueOnScale = temperature * scaleFactor;

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
                {/* the value falls out of the range, this is why I added the conditional
         this could be avoid by knowing aprox the range of temperature */}
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
