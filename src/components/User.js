import React from "react";

export default function User({ user }) {
  return (
    <h2>
      this is {user.name}, he has {user.age} year old.
    </h2>
  );
}
