<template>
  <div class="card">
    <div class="card-content">
      <p class="subtitle">Details</p>
      <div class="is-flex is-flex-direction-row">
        <div class="icon-text">
          <div class="icon is-small">
            <img src="../assets/icons/location.svg" alt="" />
          </div>
        </div>
        <p class="is-flex-grow-1 is-family-monospace">Based in:</p>
        <p class="is-family-monospace">{{ details.country }}</p>
      </div>
      <!-- Age -->
      <div class="is-flex is-flex-direction-row">
        <div class="icon-text">
          <div class="icon is-small">
            <img src="../assets/icons/age.svg" alt="" />
          </div>
        </div>
        <p class="is-flex-grow-1 is-family-monospace">Age:</p>
        <p class="is-family-monospace">{{ details.age }}</p>
      </div>
      <!-- Age Ends -->
      <!-- Socials -->
      <div
        v-for="social in details.socials"
        :key="social.name"
        class="is-flex is-flex-direction-row"
      >
        <div class="icon-text">
          <div class="icon is-small">
            <img :src="social.icon" alt="" />
          </div>
        </div>
        <p class="is-flex-grow-1 is-family-monospace">{{ social.name }}:</p>
        <a class="link is-family-monospace" :href="social.link">{{
          social.username
        }}</a>
      </div>
      <!-- Social Ends -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDetails',
  computed: {
    details() {
      return this.$store.state.portfolio.details
    },
  },
}
</script>

<style scoped>
.icon-text {
  align-items: center;
}
.is-flex {
  margin-top: 0.8rem;
}
.link {
  color: #fff;
  text-decoration: underline;
}
.link:hover {
  text-decoration: underline;
  color: #00dc82;
}
</style>
