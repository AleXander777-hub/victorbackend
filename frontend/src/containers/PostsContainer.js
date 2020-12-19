import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts/Posts";
import { GetAllPosts, PostDelete } from "../redux/actions/userActions";

class PostsContainer extends Component {
  render() {
    console.log(this.props, "Пропсы в UserNewsContainer");

    return (
      <Posts
        match={this.props.match}
        GetAllPosts={this.props.GetAllPostsAction}
        posts={this.props.user.posts}
        history={this.props.history}
        PostDelete={this.props.PostDeleteAction}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetAllPostsAction: () => dispatch(GetAllPosts()),
    PostDeleteAction: (id) => dispatch(PostDelete(id)),
  };
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
