import React from "react";
import { MightyWrapper } from "mighty-academy-widget";

export default function Root({ children }) {
  return (
      <MightyWrapper>{children}</MightyWrapper>
  );
}
