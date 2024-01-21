import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import ArticlesFetch from "../models/ArticlesFetch";
import { SPACEFLIGHTNEWSAPI_URL, options } from "../assets/ts";

const ArticlePage = () => {
  const [articles, setArticles] = useState<ArticlesFetch | null>(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const res = await fetch(SPACEFLIGHTNEWSAPI_URL, options);

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      setArticles(data);
      //console.log("articles ", articles);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="container-fluid">
      <h1 className="my-4">Spaceflight News</h1>
      <Row>
        {articles &&
          articles.results.map((article, i) => {
            return <SingleArticle key={i} article={article} />;
          })}
      </Row>
    </Container>
  );
};

export default ArticlePage;
