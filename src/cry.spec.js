import React, { useState } from "react";
import "whatwg-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

async function apiCall(state) {
  const headers = {};
  const options = Object.assign(
    {},
    { headers, method: "GET", credentials: "same-origin" }
  );

  const response = await fetch(`/states/${state}`, options);
  const data = await response.json();
  return data;
}

export default function Cry() {
  const [selectedState, setSelectedState] = useState("");

  const onStateSelect = async () => {
    const selectedState = "MI";
    const result = await apiCall(selectedState);
    setSelectedState(selectedState);
  };

return  (
    <div>
      <button onClick={onStateSelect}>click this button</button>
      {selectedState && <p>state was selected: {selectedState}</p>}
    </div>
    );
}

const server = setupServer(
  rest.get("/states/:stateid", (req, res, ctx) => {
    const { stateid } = req.params;
    // respond using a mocked JSON body
    return res(
      ctx.json({
        whatever: "whatever",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("makes me cry", async () => {
  render(<Cry/>);
  userEvent.click(screen.getByRole("button"));
  await waitFor(() => {
    expect(
      screen.getByText("state was selected:", { exact: false })
    ).toBeInTheDocument();
  });
});
