import React from "react";
import CharItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharItem key={item.char_id} item={item}></CharItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
