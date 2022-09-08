/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { expect, it } from "@jest/globals";
import { Game } from "../src/modules/Game";

it("display squares with initial state", async () => {
  render(<Game />);
  const squares = screen.queryAllByTestId("square");
  expect(squares.length).toBe(9);
  expect(squares[0].textContent).toBe("");
  expect(squares[1].textContent).toBe("");
  expect(squares[2].textContent).toBe("");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");
  expect(screen.getByTestId("status").textContent).toBe("Next player: X");
  expect(screen.queryAllByTestId("move").length).toBe(1);
  expect(screen.queryAllByTestId("move")[0].textContent).toBe(
    "Go to game start"
  );
});

it("X is winner", async () => {
  render(<Game />);
  const squares = screen.queryAllByTestId("square");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[5]);
  fireEvent.click(squares[6]);

  await waitFor(() => {
    expect(screen.getByTestId("status").textContent).toBe("Winner: X");
  });
});

it("O is winner", async () => {
  render(<Game />);
  const squares = screen.queryAllByTestId("square");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[2]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[6]);
  fireEvent.click(squares[7]);

  await waitFor(() => {
    expect(screen.getByTestId("status").textContent).toBe("Winner: O");
  });
});

it("display history of moves", async () => {
  render(<Game />);
  const squares = screen.queryAllByTestId("square");
  expect(screen.queryAllByTestId("move").length).toBe(1);
  expect(screen.queryAllByTestId("move")[0].textContent).toBe(
    "Go to game start"
  );
  fireEvent.click(squares[0]);
  await waitFor(() => {
    expect(screen.queryAllByTestId("move").length).toBe(2);
  });
  expect(screen.queryAllByTestId("move")[1].textContent).toBe("Go to move #1");
});

it("jump to history move", async () => {
  render(<Game />);
  const squares = screen.queryAllByTestId("square");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[2]);

  expect(screen.queryAllByTestId("move").length).toBe(4);

  expect(squares[0].textContent).toBe("X");
  expect(squares[1].textContent).toBe("O");
  expect(squares[2].textContent).toBe("X");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");

  fireEvent.click(screen.queryAllByTestId("move")[0]);
  expect(squares[0].textContent).toBe("");
  expect(squares[1].textContent).toBe("");
  expect(squares[2].textContent).toBe("");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");

  fireEvent.click(screen.queryAllByTestId("move")[1]);
  expect(squares[0].textContent).toBe("X");
  expect(squares[1].textContent).toBe("");
  expect(squares[2].textContent).toBe("");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");

  fireEvent.click(screen.queryAllByTestId("move")[2]);
  expect(squares[0].textContent).toBe("X");
  expect(squares[1].textContent).toBe("O");
  expect(squares[2].textContent).toBe("");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");

  fireEvent.click(screen.queryAllByTestId("move")[3]);
  expect(squares[0].textContent).toBe("X");
  expect(squares[1].textContent).toBe("O");
  expect(squares[2].textContent).toBe("X");
  expect(squares[3].textContent).toBe("");
  expect(squares[4].textContent).toBe("");
  expect(squares[5].textContent).toBe("");
  expect(squares[6].textContent).toBe("");
  expect(squares[7].textContent).toBe("");
  expect(squares[8].textContent).toBe("");
});
