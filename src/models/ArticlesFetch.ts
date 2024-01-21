import SingleArticle from "./SingleArticle";

export default interface ArticlesFetch {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingleArticle[];
}
