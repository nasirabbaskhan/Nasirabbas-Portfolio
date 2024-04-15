import React, { PropsWithChildren } from "react";

export default function Wrapper({ children }: PropsWithChildren) {
  return <div className="max-w-[1180px] bg-amber-500 mx-auto">{children}</div>;
}
