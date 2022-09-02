import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "../src/modules/Square";
import { test, expect, it } from "@jest/globals";

test("Todoコンポーネントテスト", () => {
  it("初期状態でdisabledになっているか", () => {
    render(<Square />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
