<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <div class="single-blog-post featured-post mb-30">
        <div class="mb-3 mt-3">
          <div v-if="post.media != null" class="mb-5">
            <img
              :src="`http://export.mysite/uploads/thumbs/` + post.media"
              style="width:100%"
            />
          </div>
          <div v-else class="mb-5">
            <div class="empty mt-3 mb-3"></div>
          </div>

          <div class="post-data">
            <nuxt-link
              :to="`/filtered/${post.category_id}/1`"
              style="text-decoration: none !important"
              class="post-catagory"
            >
              {{ post.category_id }}
            </nuxt-link>
            <nuxt-link
              :to="`/article/${post.id}`"
              style="text-decoration: none !important"
              class="post-title"
            >
              <h6 class="post-title_h6">{{ post.title }}</h6>
            </nuxt-link>

            <div class="post-meta">
              <p class="post-author"></p>
              Автор: {{ post.author_id }}

              <div v-html="post.text" class="post-excerp">
                {{ post.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts", "full_path"]
};
</script>
