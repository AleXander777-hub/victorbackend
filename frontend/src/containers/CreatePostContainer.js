import React, { Component } from "react";
import { connect } from "react-redux";
import CreatePost from "../components/CreatePost/CreatePost";
import {
  BungNewPostPlog,
  UserUploadPicture,
} from "../redux/actions/userActions";

class CreatePostContainer extends Component {
  render() {
    return (
      <CreatePost
        user={this.props.user}
        Bung={this.props.BungNewPostPlogAction}
        UserUploadPicture={this.props.UploadAction}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    BungNewPostPlogAction: (
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
    ) =>
      dispatch(
        BungNewPostPlog(
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
)(CreatePostContainer);
