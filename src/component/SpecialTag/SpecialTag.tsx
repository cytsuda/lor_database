import React from "react";

export default function SpecialTag(props: any) {
  const { type, value, children } = props;
  return <strong>{children}</strong>;
}
