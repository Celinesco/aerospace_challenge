/** @format */

export function formatTimeUnit(unit: number) {
  return unit < 10 ? "0" + unit : unit.toString();
}
