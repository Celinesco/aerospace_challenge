/** @format */

import ActionRequired from "./ActionRequired";
import TemperatueAltitude from "./TemperatureAltitude";
import TemperatureCard from "./TemperatureCard";
import StatusTracker from "./StatusTracker";
import VelocityCard from "./VelocityCard";
import VelocityGraph from "./VelocityGraph";
import { LayoutABProps } from "../_utils/types";

const layoutABClasses = {
    backgroundBoxes: "rounded bg-gray-50 dark:bg-gray-800 p-2 h-max",
};

export default function LayoutAB({
    statusMessage,
    isAscending,
    velocity,
    altitude,
    temperature,
    tempVsAltitude,
    isActionRequired,
    dataGraphVelocity,
    preData,
}: LayoutABProps) {
    return (
        <div>
            <div className="rounded-lg mt-4">
                <div className="grid sm:gap-2 mb-4 sm:grid-cols-1 lg:grid-cols-2 md:gap-4">
                    <div className={`${layoutABClasses.backgroundBoxes} w-fit`}>
                        <StatusTracker
                            name={"Rocket Id"}
                            status={statusMessage}
                            preData={preData}
                        />
                    </div>
                    <div>
                        <div className={`${layoutABClasses.backgroundBoxes} w-full mb-2`}>
                            <VelocityCard
                                altitude={altitude}
                                isAscending={isAscending}
                                velocity={velocity}
                            />
                        </div>
                        <div className={`${layoutABClasses.backgroundBoxes} w-full`}>
                            {/* Don't know the temperature values to be aware of. 
                                        Maybe it would be helpful to include some boundary values or temperature differences
                                        between data to display a warning. */}
                            <TemperatureCard temperature={temperature} />
                        </div>
                    </div>
                </div>
                <div className={layoutABClasses.backgroundBoxes}>
                    <ActionRequired action={isActionRequired} />
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 mt-2">
                    {tempVsAltitude && (
                        <div className={layoutABClasses.backgroundBoxes}>
                            <TemperatueAltitude data={tempVsAltitude} />
                        </div>
                    )}
                    {dataGraphVelocity && (
                        <div className={layoutABClasses.backgroundBoxes}>
                            <VelocityGraph data={dataGraphVelocity} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
