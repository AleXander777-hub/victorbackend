<template>
  <div>
    <a
      id="back-to-top"
      href="#"
      class="btn btn-light btn-lg back-to-top"
      role="button"
      ><i class="fas fa-chevron-up">Вверх</i></a
    >
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="single-blog-post featured-post mb-30">
            <div class="mb-3 mt-3">
              <div v-if="article.media != null" class="mb-5">
                <img
                  :src="`http://export.mysite/uploads/full/` + article.media"
                  style="width:100%"
                />:
              </div>
              <div v-else class="mb-5">
                <div class="empty mt-3 mb-3"></div>
              </div>

              <div class="post-data">
                <nuxt-link
                  :to="`/filtered/${article.category_id}/1`"
                  style="text-decoration: none !important"
                  class="post-catagory"
                >
                  {{ article.category_id }}
                </nuxt-link>
                <nuxt-link
                  :to="`/article/${article.slug}`"
                  style="text-decoration: none !important"
                  class="post-title"
                >
                  <h6 class="post-title_h6">{{ article.title }}</h6>
                </nuxt-link>
                <div class="post-meta">
                  <p class="post-author"></p>
                  Автор: {{ article.author_id }}

                  <p class="post-excerp">
                    <span v-html="article.text"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 mt-5">
          <sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>
