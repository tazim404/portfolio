<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-half" v-for="article of articles" :key="article">
        <nuxt-link :to="`/blog/${article.slug}`">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img :src="article.img" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <p class="subtitle is-5 mb-1">{{ article.title }}</p>
              <p class="subtitle is-7">12/05/2022</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  methods: {},
}
</script>

<style scoped>
.card {
  padding: 0.5rem;
}
.card:hover {
  cursor: pointer;
}
.title {
  color: #fff;
}
figure {
  border: 1px solid black;
}
</style>
