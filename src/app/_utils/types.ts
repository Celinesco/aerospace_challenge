/** @format */

export interface RocketData {
  velocity: number;
  altitude: number;
  temperature: number;
  statusMessage: string;
  isAscending: boolean;
  isActionRequired: boolean;
}

export type PrevData = {
  tooltip: string;
  color: any;
};

export type TrackerProps = {
  name: string;
  status: string;
  preData: PrevData[];
};

export type velocityGraph = {
  velocity: number;
};

export interface TemAltitudeData {
  altitude: number;
  temperature: number;
}

export interface TemperatureAltitudeProps {
  data: TemAltitudeData[];
}

export interface LayoutABProps extends RocketData {
  preData: PrevData[];
  tempVsAltitude?: TemAltitudeData[];
  dataGraphVelocity?: velocityGraph[];
}

export interface RocketDataWS {
  Altitude: number;
  IsActionRequired: boolean;
  IsAscending: boolean;
  StatusMessage: string;
  Velocity: number;
  Temperature: number;
}
