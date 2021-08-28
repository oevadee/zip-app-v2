import React from "react";

interface Props {
  chats?: string[];
}

export const Sidebar = ({ chats = ["test"] }: Props) => {
  return (
    <div>
      {chats.map((el) => (
        <h4>{el}</h4>
      ))}
    </div>
  );
};
