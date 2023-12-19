import { render, screen } from "@testing-library/react";
import TemperatureCard from "../_components_assignments/TemperatureCard";

describe("TemperatureCard Component", () => {
    it("Checks component when is ascending", () => {
        render(<TemperatureCard temperature={30} />);
        screen.getByText(/Temperature:/i);
        // temperature in Celsius
        screen.getByText("30 C");
        // temperature in Kelvin
        screen.getByText("303 K");
    });
});
