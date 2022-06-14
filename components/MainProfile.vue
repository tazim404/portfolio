<template>
  <div class="card">
    <div class="card-content">
      <div>
        <figure class="image is-128x128">
          <img :src="profile.profilePhoto" alt="Tazim Rahbar" />
        </figure>
        <h3 class="subtitle is-3 is-family-sans-serif">{{ profile.name }}</h3>
      </div>
      <div class="content is-code">
        {{ profile.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProfile',
  computed: {
    profile() {
      return this.$store.state.portfolio.profile
    },
  },
}
</script>
<style scoped>
img {
  border: 3px solid #00dc82;
  border-collapse: collapse;
  border-radius: 5px;
}
</style>
