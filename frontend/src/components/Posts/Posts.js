import React, { Fragment } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Image,
  Modal,
  Pagination,
  Row,
} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { thumb_path } from "../utils";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      description: "",
      text: "",
      author: "",
      category: "",
      meta_tags: "",
      meta_description: "",
    };
    this.change = this.change.bind(this);
    this.createNewsArticle = this.createNewsArticle.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  change(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "title":
        console.log("title", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "description":
        console.log("decr", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "text":
        console.log("text", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;

      case "category":
        console.log("category", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "meta_tags":
        console.log("meta_tags", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });
        break;
      case "meta_description":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      default:
        break;
    }
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }
  async createNewsArticle(e) {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const text = this.state.text;
    const category = this.state.category;
    const meta_tags = this.state.meta_tags;
    const meta_description = this.state.meta_description;
    const { error } = await this.props.UserCreateNewsArticle(
      title,
      description,
      text,

      category,
      meta_tags,
      meta_description
    );
    if (error) {
      alert(error);
      return;
    } else {
      console.log("Here");
      await this.getAllPosts();
      window.location.href = "/newsList/pages/1";
    }
  }
  async getAllPosts() {
    await this.props.GetAllPosts();
  }
  async deleteArticle(id) {
    console.log("Hey");
    await this.props.PostDelete(id);
    window.location.href = "/Posts";
  }
  componentDidMount() {
    this.getAllPosts();
  }
  render() {
    console.log(this.props, "PROPS");
    this.props &&
      this.props.user &&
      this.props.user.news &&
      this.props.user.news.map((n, i) => console.log(n.created_at, "N"));
    let pages = [];
    if (this.props.paginate) {
      for (let i = 1; i <= this.props.paginate.num_pages; i++) {
        pages.push(i);
      }
    }

    return (
      <Fragment>
        <div className="container">
          <Button
            className="btn btn-primary mb-3"
            onClick={() => this.props.history.push("/create")}
          >
            Создаём новость
          </Button>
        </div>
        <div className="container">
          {this.props &&
            this.props.posts &&
            this.props.posts.map((n, i) => (
              <Card key={i} className="mb-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={thumb_path + n.media}
                    style={{ width: "18rem" }}
                  />
                  <Card.Title>{n.title}</Card.Title>

                  {ReactHtmlParser(n.text)}

                  <Row>
                    <Col>
                      <Button
                        variant="primary"
                        href={`/update/${n.id}`}
                        onClick={() =>
                          (this.props.history.push = `/update/${n.id}`)
                        }
                      >
                        Редактировать
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => this.deleteArticle(n.id)}
                      >
                        Удалить статью
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          <Pagination>
            {this.props.paginate && this.props.paginate.num_pages > 1
              ? pages.map((p, index) => (
                  <Pagination.Item
                    key={index}
                    active={p === this.props.paginate.page_number}
                    onClick={() =>
                      (window.location.href = `/newsList/pages/${p}`)
                    }
                  >
                    {p}
                  </Pagination.Item>
                ))
              : null}
          </Pagination>
        </div>
      </Fragment>
    );
  }
}

export default Posts;
