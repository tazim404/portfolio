<template>
  <div class="card">
    <div class="card-content">
      <p class="subtitle">Tech Stack</p>
      <div class="field is-grouped-multiline">
        <div class="control">
          <div class="tags">
            <div
              v-for="stack in stacks"
              :key="stack.name"
              class="tag is-link is-light"
            >
              <span class="icon-text">
                <span class="icon is-small">
                  <!-- <HtmlIcon /> -->
                  <img :src="stack.icon" :alt="stack.name" />
                </span>
                <span>{{ stack.name }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  computed: {
    stacks() {
      return this.$store.state.portfolio.stacks
    },
  },
}
</script>

<style scoped>
.icon-text {
  /* padding: 4px; */
  /* border: 1px solid yellow; */
  /* background-color: aqua; */
  /* border-radius: 5px; */
  align-items: center;
}
</style>
