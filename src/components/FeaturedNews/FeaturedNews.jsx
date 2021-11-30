import { parseQuoteCodes } from "../../utils/string-utils";

import { Button } from "../Button";
import { Hero, HeroContent, HeroHeading, HeroSub } from "./FeaturedNews.styles";
import { Image } from "../Image/Image";
import { useNewsContext } from "../../contexts/news-context";

export const FeaturedNews = ({ featured }) => {
  const { main_image, title } = featured;
    const { handleOpenNews } = useNewsContext();

  return (
    <Hero>
      <Image src={main_image} alt={title} />
      <HeroContent>
        <div>
          <HeroHeading>
            <span>{parseQuoteCodes(featured.title)}</span>
          </HeroHeading>
          <HeroSub>{parseQuoteCodes(featured.short_description)}</HeroSub>
        </div>
        <div style={{ color: "black" }}>
          <Button onClick={() => handleOpenNews(featured)} target="_blank" rel="noreferrer"
                  style={{ fontSize: "1.5rem" }}>
            Read more...
          </Button>
        </div>
      </HeroContent>
    </Hero>
  );
};


