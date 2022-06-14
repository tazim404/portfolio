<template>
  <div class="card">
    <div class="card-content">
      <p class="subtitle">Education</p>
      <div class="timeline">
        <div
          v-for="(education, index) in educations"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="time">{{ education.starting }} -{{ education.till }}</p>
            <p class="degree">{{ education.degree }}</p>
            <p class="from">{{ education.from }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyEducation',
  computed: {
    educations() {
      return this.$store.state.portfolio.educations
    },
  },
}
</script>

<style scoped>
.time {
  font-size: 0.75rem;
  line-height: 1rem;
}
.degree {
  font-size: 0.875rem;
  font-weight: 600;
}
.from {
  font-size: 0.875rem;
}
</style>
