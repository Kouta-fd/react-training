/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Square } from "../src/modules/Square";
import { expect, it } from "@jest/globals";

const mockCallback = jest.fn(() => {});
const value = "O";
it("display square with value", async () => {
  render(<Square value={value} onClick={mockCallback} />);

  expect(screen.getByTestId("square")).not.toBeNull();

  expect(screen.getByTestId("square").textContent).toBe("O");
});

it("verify onClick even", async () => {
  render(<Square value={value} onClick={mockCallback} />);

  fireEvent.click(screen.getByTestId("square"));

  expect(mockCallback.mock.calls.length).toBe(1);
});
