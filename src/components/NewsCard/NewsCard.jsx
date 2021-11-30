import { Button } from "../Button";
import { NewsArticle, NewsArticleContent, NewsArticleMedia } from "./NewsCard.styles";
import { Image } from "../Image/Image";
import { useNewsContext } from "../../contexts/news-context";

export const NewsCard = (props) => {

  const { handleOpenNews } = useNewsContext();

  return <NewsArticle>
    <NewsArticleMedia>
      <Image src={props.item.thumbnail} alt={props.item.title} />
    </NewsArticleMedia>
    <NewsArticleContent>
      <div>
        <h4>{props.item.title}</h4>
        <p>{props.item.short_description}</p>
      </div>
      <div style={{ color: "black" }}>
        <Button variant="button" onClick={()=> handleOpenNews(props.item)} style={{ fontSize: "1rem" }}>
          Read more...
        </Button>
      </div>
    </NewsArticleContent>
  </NewsArticle>;
};

