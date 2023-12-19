/** @format */

import { RocketData, RocketDataWS } from "../../_utils/types";

export function formatTimeUnit(unit: number) {
  return unit < 10 ? "0" + unit : unit.toString();
}

// divided altitude to have the values closer. I guess the altitude is negative once certain point
// outside the earth is reached
export function createsTemVsAltitudeProp(
  list: RocketData[] | RocketDataWS[],
  temperatureKey: "temperature" | "Temperature",
  altitudeKey: "Altitude" | "altitude",
  divisor: number
) {
  // data is type RocketData
  const newList = list.map((data: any) => {
    return {
      temperature: data[temperatureKey],
      altitude: data[altitudeKey] / divisor,
    };
  });
  return newList;
}

export function createsdataGraphVelocityProp(
  list: RocketData[] | RocketDataWS[],
  velocityKey: "velocity" | "Velocity"
) {
  const newList = list.map((data: any) => {
    return {
      velocity: data[velocityKey],
    };
  });
  return newList;
}

export function createsDataStatus(
  list: RocketData[] | RocketDataWS[],
  statusMessageKey: "statusMessage" | "StatusMessage",
  isActionKey: "isActionRequired" | "IsActionRequired"
) {
  const newList = list.map((data: any) => {
    return {
      tooltip: data[statusMessageKey],
      color: data[isActionKey] ? "red" : "emerald",
    };
  });
  return newList;
}

export function celsiusToKelvin(celsius: number) {
  const kelvin = celsius + 273.15;
  return kelvin;
}
