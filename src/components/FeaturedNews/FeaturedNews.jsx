import { parseTitle } from "../../utils/string-utils";

import { Button } from "../Button";
import { Hero, HeroContent, HeroHeading, HeroImg, HeroSub } from "./FeaturedNews.styles";

export const FeaturedNews = ({ image, url, title, description }) => {
  return (
    <Hero>
      <HeroImg>
        <img src={image} alt={title} />
      </HeroImg>
      <HeroContent>
        <div>
          <HeroHeading>
            <span>{parseTitle(title)}</span>
          </HeroHeading>
          <HeroSub>{parseTitle(description)}</HeroSub>
        </div>
        <div style={{ color: "black" }}>
          <Button href={url} target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem" }}>
            Read more...
          </Button>
        </div>
      </HeroContent>
    </Hero>
  );
};


