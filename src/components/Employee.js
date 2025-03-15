import React from "react";

export default function Employee({ employees }) {
  return (
    <div>
      This is {employees.name} at position {employees.position}
    </div>
  );
}
