import React from "react";
import CharItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharItem key={item.char_id} item={item}></CharItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
