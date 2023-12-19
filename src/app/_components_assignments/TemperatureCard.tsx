/** @format */

"use client";
import { Card, Text, Flex, MarkerBar } from "@tremor/react";

export default function TemperatureCard({
    temperature,
}: {
    temperature: number;
}) {

    function celsiusToKelvin(celsius: number) {
        var kelvin = celsius + 273.15;
        return kelvin;
    }

    // Temperature for sure is not celsius but I did this just as a draft to have an idea
    const scaleFactor = 0.167;
    const valueOnScale = celsiusToKelvin(temperature) * scaleFactor;


    return (
        <Card className="max-w-sm">
            <Flex>
                <Text>Temperature (K)</Text>
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
