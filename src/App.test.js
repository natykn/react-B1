import { render } from "@testing-library/react"
import App from "./App"
import React from "react"

test("render an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello Naty testing Library/);
    expect(h1).toHaveTextContent(
        "Hello Naty testing Library"
    );
});