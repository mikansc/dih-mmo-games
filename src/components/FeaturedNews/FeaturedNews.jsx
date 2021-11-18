import { parseQuoteCodes } from "../../utils/string-utils";

import { Button } from "../Button";
import { Hero, HeroContent, HeroHeading, HeroSub } from "./FeaturedNews.styles";
import { Image } from "../Image/Image";

export const FeaturedNews = ({ image, url, title, description }) => {
  return (
    <Hero>
      <Image src={image} alt={title} />
      <HeroContent>
        <div>
          <HeroHeading>
            <span>{parseQuoteCodes(title)}</span>
          </HeroHeading>
          <HeroSub>{parseQuoteCodes(description)}</HeroSub>
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


