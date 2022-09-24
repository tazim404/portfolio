<template>
  <article>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <button class="delete is-large"></button>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <hr class="mt-0" />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <p class="subtitle is-3">{{ article.title }}</p>
              <p class="subtitle is-5">{{ article.description }}</p>
              <p class="subtitle is-7">{{ article.date }}</p>
              <figure class="image is-16by9">
                <img :src="article.img" alt="" />
              </figure>
            </div>
          </div>
          <section class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div>
                  <div class="content">
                    <nuxt-content :document="article"></nuxt-content>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { name: 'twitter:site', content: '@tazim_rahbar' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://tazim.netlify.app',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.img,
        },
      ],
    }
  },
}
</script>

<style>
.nuxt-content h1 {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.nuxt-content h2 {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.nuxt-content h3 {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
.nuxt-content p {
  color: #fff;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
}
.nuxt-content h1 > a {
  display: none;
}
.nuxt-content h2 > a {
  display: none;
}
.nuxt-content h3 > a {
  display: none;
}
</style>
