<template>
  <paginated
    :posts="posts"
    :pagination="pagination"
    :pagination_data="pagination_data"
  />
</template>

<script>
import axios from "axios";
import Paginated from "../../../../components/Paginated.vue";

export default {
  head() {
    console.log(this.posts, this.meta_tags, "Posts");
    console.log(this.meta_tags.length, "Tags");
    if (this.posts.length != 0) {
      return {
        title: `Экспорт Образования - ${this.posts[0]}`,
        meta: [{ name: "Keywords", content: this.meta_tags }]
      };
    } else {
      return {
        title: "Экспорт Образования - Filtered",
        meta: [{ name: "Keywords", content: "Фильтр по категории" }]
      };
    }
  },
  components: { Paginated },
  async asyncData({ $axios, params }, { perPage = 2, page = 1 } = {}) {
    var attrs_filter = params.filter;
    var foo = encodeURI("PostSearch[category_id]");
    var response = await axios.get(
      `https://export.dmitxe.ru/api/posts?PostSearch%5Bcategory_id%5D=2`,
      {
        params: {
          "per-page": perPage,
          page: page,
          "PostSearch[category_id]": 2
        }
      }
    );

    console.log(foo, "foo");
    var posts = response.data.items;
    var tags =
      response &&
      response.data &&
      response.data.items.map((n, i) => {
        return n.keywords;
      });
    var meta_tags = tags.join();

    var pagination = [];
    for (let i = 1; i <= response.data.pageCount; i++) {
      pagination.push(i);
    }
    var pagination_data = response.data._meta;

    return { posts, pagination, pagination_data, meta_tags };
  },
  data() {
    return {
      posts: [],
      pagination: [],
      pagination_data: [],
      meta_tags: ""
    };
  }
};
</script>
