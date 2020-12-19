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
        title: `Экспорт Образования - ${this.posts[0].attributes[1].value}`,
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
  async asyncData({ $axios, params }, { pageSize = 5, pageNumber = 1 } = {}) {
    var attrs_filter = params.filter;

    var response = await axios.get(`https://edu.itlifehack.ru/public/papers`, {
      params: {
        page_size: pageSize,
        page_number: pageNumber,
        attrs_filter: JSON.stringify([{ value: attrs_filter, index: 1 }])
      }
    });
    var posts = response.data.data;
    var tags =
      response &&
      response.data &&
      response.data.data.map((n, i) => {
        return n.attributes[2].value;
      });
    var meta_tags = tags.join();

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
