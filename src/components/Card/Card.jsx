import React from "react";
import { limitText } from "../../utils/string-utils";
import { GameCardArticle, GameCardContent, GameCardMedia } from "./Card.styles";
import { Image } from "../Image/Image";
import { Pill } from "../Pill/Pill";

export const Card = ({ item, onClick }) => {
  return (
    <GameCardArticle onClick={onClick}>
      <GameCardMedia>
        <Image src={item.thumbnail} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
        </div>
      </GameCardMedia>
      <div style={{display: 'flex', justifyContent: 'flex-end', margin: '0.5rem 0'}}>
        <Pill text={item.genre} />
      </div>
      <GameCardContent>{limitText(item.short_description, 160)}</GameCardContent>
    </GameCardArticle>
  );
};
