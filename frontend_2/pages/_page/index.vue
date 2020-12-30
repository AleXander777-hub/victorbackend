<template>
  <Paginated
    :posts="posts"
    :pagination="pagination"
    :pagination_data="pagination_data"
  />
</template>

<script>
import Paginated from "../../components/Paginated.vue";
export default {
  head() {
    return {
      title: "Экспорт Образования",
      meta: [{ name: "Keywords", content: this.meta_tags }]
    };
  },
  components: { Paginated },
  async asyncData({ $axios, params }, { perPage = 2, page = 1 } = {}) {
    var page = params.page;
    var response = await $axios.get(`https://export.dmitxe.ru/api/posts`, {
      params: {
        "per-page": perPage,
        page: page,
        expand: "author, category"
      }
    });

    var tags =
      response &&
      response.data &&
      response.data.items.map((n, i) => {
        return n.keywords;
      });
    var meta_tags = tags.join();

    var posts = response.data.items;
    console.log(posts, "POSTS");
    var pagination = [];
    for (let i = 1; i <= response.data._meta.pageCount; i++) {
      pagination.push(i);
    }
    console.log(pagination, "PAGG");
    var pagination_data = response.data._meta;
    console.log(pagination_data, "DDD");

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
