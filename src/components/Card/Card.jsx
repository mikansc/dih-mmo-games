import React from "react";
import { limitText } from "../../utils/string-utils";
import { GameCardArticle, GameCardMedia, GameCardContent } from "./Card.styles";

export const Card = ({ item, onClick }) => {
  return (
    <GameCardArticle onClick={onClick} style={{ maxWidth: "380px" }}>
      <GameCardMedia>
        <img src={item.thumbnail} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
        </div>
      </GameCardMedia>
      <GameCardContent>{limitText(item.short_description)}</GameCardContent>
    </GameCardArticle>
  );
};
