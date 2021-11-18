import React from "react";
import { limitText } from "../../utils/string-utils";
import { GameCardArticle, GameCardMedia, GameCardContent } from "./Card.styles";
import { Image } from "../Image/Image";

export const Card = ({ item, onClick }) => {
  return (
    <GameCardArticle onClick={onClick}>
      <GameCardMedia>
        <Image src={item.thumbnail} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
        </div>
      </GameCardMedia>
      <GameCardContent>{limitText(item.short_description, 160)}</GameCardContent>
    </GameCardArticle>
  );
};
