/** @format */

import { render, screen } from "@testing-library/react";
import VelocityCard from "../_components_assignments/VelocityCard";

describe("VelocityCard Component", () => {
    it("Checks component when is ascending and corresponding values", () => {
        render(<VelocityCard velocity={77.5} isAscending={true} altitude={10} />);
        screen.getByText(/Velocity km/i);
        screen.getByText("77.5");
        screen.getByText(/Altitude/i);
        screen.getByText(/Ascending/i);
    });
    it("Checks component when is descending and corresponding values", () => {
        render(
            <VelocityCard velocity={77767675} isAscending={false} altitude={10000} />
        );
        screen.getByText(/Velocity km/i);
        screen.getByText("77767675");
        screen.getByText(/Altitude/i);
        screen.getByText("10000");
        screen.getByText(/Descending/i);
    });
});
