<template>
  <div class="container">
    <div v-for="project in projects" :key="project.name" class="card mb-4">
      <div class="card-content">
        <article class="media mb-1">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="project.logo" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="subtitle is-4 mb-0 is-family-code">
                {{ project.name }}
              </p>
              <span
                :class="{
                  'tag is-success': project.status == 'Done',
                  'tag is-warning': project.status == 'Under Dev',
                }"
                >{{ project.status }}</span
              >
            </div>
          </div>
        </article>
        <div class="content mb-1 mt-2 is-family-monospace">
          <div class="field is-grouped">
            <div class="control">
              <div class="tags">
                <div
                  v-for="stack in project.stacks"
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
          <p class="mt-2 mb-2">
            {{ project.description }}
          </p>
        </div>
        <div class="field is-grouped">
          <a
            v-if="project.projectLink"
            id="website"
            :href="project.projectLink"
            class="button is-primary is-outlined"
            >Visit</a
          >
          <a
            v-if="project.githubLink"
            id="github"
            :href="project.githubLink"
            class="button is-primary is-outlined"
            >Github</a
          >
          <a
            v-if="project.videoLink"
            id="video"
            :href="project.videoLink"
            class="button is-primary is-outlined"
            >Video</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',
  computed: {
    projects() {
      return this.$store.state.portfolio.projects
    },
  },
}
</script>

<style scoped>
.card {
  /* background-color: tomato; */
}
.field {
  display: inline;
}
.icon-text {
  align-items: center;
}
.image {
  padding: 0.4rem;
  background-color: rgba(37, 84, 97, 0.8);
  border-radius: 5px;
}
</style>
