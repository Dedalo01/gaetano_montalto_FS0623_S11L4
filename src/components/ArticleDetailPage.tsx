import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ArticleDetail from "../models/ArticleDetail";
import { SPACEFLIGHTNEWSAPI_URL, options } from "../assets/ts";

const ArticleDetailPage = () => {
  const [articleDetail, setArticleDetail] = useState<ArticleDetail | null>(
    null
  );
  const params = useParams();

  useEffect(() => {
    getArticleDetail();
  }, []);

  const getArticleDetail = async () => {
    try {
      const res = await fetch(
        `${SPACEFLIGHTNEWSAPI_URL}/${params!.articleId}`,
        options
      );
      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      setArticleDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="container-fluid">
      {articleDetail && (
        <Container className="d-flex gap-2">
          <img src={articleDetail.image_url} alt={articleDetail.title} />
          <div>
            <h1>{articleDetail.title}</h1>
            <a href={articleDetail.url}>
              Read full article at {articleDetail.news_site}
            </a>
            <p>{articleDetail.summary}</p>

            <p>{articleDetail.updated_at}</p>
          </div>
        </Container>
      )}
    </Container>
  );
};

export default ArticleDetailPage;
