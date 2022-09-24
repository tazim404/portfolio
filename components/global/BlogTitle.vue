<template>
  <div class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content is-medium">
          <p class="subtitle is-6">{{ date }}</p>
          <p class="subtitle is-2">{{ title }}</p>
          <p class="subtitle is-5">
            This is a starter template for creating a beautiful, customizable
            blog with minimal effort. You’ll only have to change a few settings
            and you’re ready to go. As with all Jigsaw sites, configuration
            settings can be found in config
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogTitle',
  props: {
    date: {
      type: String,
    },
    title: {
      type: String,
    },
  },
}
</script>

<style>
.subtitle {
  color: #fff;
}
</style>
