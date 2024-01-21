import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ArticleDetail from "../models/ArticleDetail";
import { SPACEFLIGHTNEWSAPI_URL, convertISOTime, options } from "../assets/ts";

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
        `${SPACEFLIGHTNEWSAPI_URL}/${params.articleId}`,
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
    <Container className="container-fluid  p-5 mt-1">
      {articleDetail && <h1>{articleDetail.title}</h1>}
      {articleDetail && (
        <Container className="d-flex align-items-center justify-content-center gap-3 mt-2">
          <div className="article-detail-container-img">
            <img
              className="article-detail-img"
              src={articleDetail.image_url}
              alt={articleDetail.title}
            />
          </div>
          <div>
            <a href={articleDetail.url}>
              Read full article at {articleDetail.news_site}
            </a>
            <p className="my-3">{articleDetail.summary}</p>

            <p>Last updated at: {convertISOTime(articleDetail.updated_at)}</p>
          </div>
        </Container>
      )}
      <Link to={"/"} className="btn btn-warning mt-5 d-block">
        Back to Homepage
      </Link>
    </Container>
  );
};

export default ArticleDetailPage;
