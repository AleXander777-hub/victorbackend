import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  Image,
  Row,
} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      is_commentable: Number,
      is_enable: Number,
      slug: "",

      meta_title: "",
      keywords: "",
      text: "",
      file: "",
      category_id: Number,
      status: Number,
      created_at: "",

      annotation: "",
      imagePreviewUrl: "",
    };
    this.change = this.change.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.createNewsArticle = this.createNewsArticle.bind(this);
    this.changeLoadInput = this.changeLoadInput.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
  }

  async uploadPicture(e) {
    e.preventDefault();
    console.log(this.state.file, "File");

    await this.props.UserUploadPicture(this.state.file);
  }
  handleEditorChange(e) {
    this.setState({
      text: e.target.getContent({ format: "html" }),
    });
  }
  change(e) {
    e.preventDefault();
    console.log("INPUT", e);
    switch (e.target.name) {
      case "title":
        console.log("title", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "description":
        console.log("description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;

      case "category_id":
        console.log("category", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "is_commentable":
        console.log("experience", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "is_enable":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "slug":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "meta_title":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "keywords":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "status":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "created_at":
        console.log("created_at", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;
      case "annotation":
        console.log("meta_description", e.target.value);
        this.setState({
          [e.target.name]: e.target.value,
        });

        break;

      default:
        break;
    }
  }
  changeLoadInput(e) {
    console.log("here");
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  async createNewsArticle(e) {
    e.preventDefault();
    const category_id = this.state.category_id;
    const is_commentable = this.state.is_commentable;
    const is_enable = this.state.is_enable;
    const slug = this.state.slug;
    const title = this.state.title;
    const meta_title = this.state.meta_title;
    const keywords = this.state.keywords;
    const description = this.state.description;
    const status = this.state.status;
    const created_at = this.state.created_at;
    const media = this.props.user.file_upload.name;
    const text = this.state.text;
    const annotation = this.state.annotation;
    const author_id = localStorage.getItem("user_data");

    await this.props.Bung(
      category_id,
      is_commentable,
      is_enable,
      slug,
      title,
      meta_title,
      keywords,
      description,
      status,
      created_at,
      media,
      text,
      annotation,
      author_id
    );

    //console.log(this.props.user.file_upload, "Obj");
  }

  render() {
    console.log(localStorage.getItem("user_data"), "USER");
    console.log(this.state.file, "File");

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <Image src={imagePreviewUrl} />;
    } else {
      $imagePreview = <div className="previewText">Выберите картинку</div>;
    }

    return (
      <div className="container">
        <Editor
          initialValue={this.state.text}
          apiKey="40sxi5w5tk389gmpq9bd6eug5z8qhgsx1p9tkn8z5wj2be6w"
          name="text"
          init={{
            selector: "#editor",
            icons: "jam",
            skin: "fabric",
            content_css: "document",

            height: 500,
            menubar: true,
            /*plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],*/
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
          }}
          /*toolbar:
                    "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                }}*/
          onChange={this.handleEditorChange}
        />
        <Form onSubmit={(e) => this.createNewsArticle(e)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Название</Form.Label>

                <Form.Control
                  type="text"
                  name="title"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Краткое описание</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Алиас</Form.Label>

                <Form.Control
                  className="vacancy_input"
                  type="text"
                  name="slug"
                  onChange={(e) => this.change(e)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Мета заголовок</Form.Label>
                <Form.Control
                  type="text"
                  name="meta_title"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Статус</Form.Label>
                <Form.Control
                  type="number"
                  name="status"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Включено</Form.Label>
                <Form.Control
                  type="number"
                  name="is_enable"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group>
                <Form.Label>Разрешено комментировать</Form.Label>
                <Form.Control
                  type="number"
                  name="is_commentable"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Категория</Form.Label>
                <Form.Control
                  type="number"
                  name="category_id"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Мета теги</Form.Label>
                <Form.Control
                  type="text"
                  name="keywords"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Аннотация</Form.Label>
                <Form.Control
                  type="text"
                  name="annotation"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="created_at"
                  className="vacancy_input"
                  onChange={(e) => this.change(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Example file input"
                  onChange={(e) => this.changeLoadInput(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <button
            className="btn btn-primary"
            onClick={(e) => this.uploadPicture(e)}
          >
            Up
          </button>

          {this.state.imagePreviewUrl !== "" ? (
            <Card className="mb-3 " style={{ width: "50%" }}>
              <Image src={this.state.imagePreviewUrl} fluid />
            </Card>
          ) : null}

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    );
  }
}

export default CreatePost;
