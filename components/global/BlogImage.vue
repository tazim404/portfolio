<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <figure class="image is-16by9">
        <img :src="image" alt="Blog Image" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogImage',
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
