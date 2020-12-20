import { Component } from "react";
import { connect } from "react-redux";
import UpdatePost from "../components/UpdatePost/UpdatePost";
import {
  GetAllPosts,
  GetOnePost,
  PostDelete,
  PostUpdate,
  UserUploadPicture,
} from "../redux/actions/userActions";

class UpdatePostContainer extends Component {
  render() {
    console.log(this.props, "Пропсы в UserNewsContainer");

    return (
      <UpdatePost
        match={this.props.match}
        posts={this.props.user.posts}
        history={this.props.history}
        GetOne={this.props.GetOnePostAction}
        Update={this.props.UpdatePostAction}
        user={this.props.user}
        Upload={this.props.UploadAction}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetOnePostAction: (id) => dispatch(GetOnePost(id)),
    UpdatePostAction: (
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
      author_id,
      id
    ) =>
      dispatch(
        PostUpdate(
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
          author_id,
          id
        )
      ),
    UploadAction: (file) => dispatch(UserUploadPicture(file)),
  };
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePostContainer);
