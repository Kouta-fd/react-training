import React from "react";

export const Square: React.FC<{ value: string | null; onClick: () => void }> = (
  props
) => {
  return (
    <button
      data-testid="square"
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
};
