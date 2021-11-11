import { Button } from "../Button";
import { NewsArticle, NewsArticleContent, NewsArticleMedia } from "./NewsCard.styles";

export const NewsCard = (props) => {
  return <NewsArticle>
    <NewsArticleMedia>
      <img src={props.item.thumbnail} alt={props.item.title} />
    </NewsArticleMedia>
    <NewsArticleContent>
      <div>
        <h4>{props.item.title}</h4>
        <p>{props.item.short_description}</p>
      </div>
      <div style={{ color: "black" }}>
        <Button href={props.item.url} target="_blank" rel="noreferrer" style={{ fontSize: "1rem" }}>
          Read more...
        </Button>
      </div>
    </NewsArticleContent>
  </NewsArticle>;
};

