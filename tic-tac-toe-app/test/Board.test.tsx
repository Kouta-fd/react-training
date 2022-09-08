/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect, it } from "@jest/globals";
import { Board } from "../src/modules/Board";

it("display squares with correct value", async () => {
  const mockCallback = jest.fn((i) => {});
  render(
    <Board
      squares={["X", "O", null, "X", null, "O", "X", null, null]}
      onClick={mockCallback}
    />
  );
  const squares = screen.queryAllByTestId("square");
  expect(squares.length).toBe(9);
  expect(squares[0].textContent).toBe("X");
  expect(squares[1].textContent).toBe("O");
  expect(squares[2].textContent).toBe("");
  expect(squares[3].textContent).toBe("X");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("O");
  expect(squares[6].textContent).toBe("X");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");
});

it("handle onClick event", async () => {
  const mockCallback = jest.fn((i) => {});
  render(
    <Board
      squares={["X", "O", null, "X", null, "O", "X", null, null]}
      onClick={mockCallback}
    />
  );
  fireEvent.click(screen.getAllByTestId("square")[2]);
  expect(mockCallback.mock.calls.length).toBe(1);
  expect(mockCallback.mock.calls[0][0]).toBe(2);

  fireEvent.click(screen.getAllByTestId("square")[3]);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[1][0]).toBe(3);
});
