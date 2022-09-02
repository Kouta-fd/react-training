import React from "react";

export const Square: React.FC<{ value: string; onClick: () => void }> = (
  props
) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};
