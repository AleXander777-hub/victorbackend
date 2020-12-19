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
  async asyncData({ $axios, params }, { pageSize = 5 } = {}) {
    var page = params.page;
    var response = await $axios.get(`/public/papers`, {
      params: {
        page_size: pageSize,
        page_number: page
      }
    });

    var tags =
      response &&
      response.data &&
      response.data.data.map((n, i) => {
        return n.attributes[2].value;
      });
    var meta_tags = tags.join();

    var posts = response.data.data;
    var pagination = [];
    for (let i = 1; i <= response.data.num_pages; i++) {
      pagination.push(i);
    }
    var pagination_data = response.data;

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
