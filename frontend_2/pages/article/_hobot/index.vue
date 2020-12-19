<template>
  <Article :article="article" />
</template>

<script>
import axios from "axios";

import Article from "../../../components/Article.vue";

export default {
  head() {
    return {
      title: this.article.title,
      meta: [{ name: "Keywords", content: this.tags }]
    };
  },
  components: { Article },
  async asyncData({ $axios, params }) {
    console.log(params, "Params");
    var id = params.hobot;

    var response = await axios.get(`http://export.mysite/api/posts/${id}`);
    var article = response.data;
    var tags = response.data.keywords;

    return { article, tags };
  },
  data() {
    return {
      article: [],
      tags: ""
    };
  }
};
</script>
