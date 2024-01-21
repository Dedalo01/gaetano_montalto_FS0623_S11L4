import { Card, Col } from "react-bootstrap";
import Article from "../models/SingleArticle";
import { Link } from "react-router-dom";
import { convertISOTime } from "../assets/ts";

const SingleArticle = ({ article }: { article: Article }) => {
  return (
    <Col xs={12} md={4} lg={3} className="mb-4 d-flex justify-content-between">
      <Card>
        <Card.Img src={article.image_url} className="card-img" />
        <Card.Body className="d-flex flex-column align-items-center justify-content-between">
          <Card.Title>{article.title}</Card.Title>
          <Link
            to={`/articleId/${article.id}`}
            className="btn btn-warning mt-3"
          >
            Read Details
          </Link>
          <Card.Link href={article.url} target="_blank">
            Read full article at {article.news_site}
          </Card.Link>
        </Card.Body>

        <Card.Footer>
          <Card.Text>
            Last update: {convertISOTime(article.updated_at)}
          </Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleArticle;
