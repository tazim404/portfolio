<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': isActive == 'projects' }">
          <a @click="isActive = 'projects'">Projects</a>
        </li>
        <li :class="{ 'is-active': isActive == 'blogs' }">
          <a @click="isActive = 'blogs'">Blogs</a>
        </li>
      </ul>
    </div>
    <div class="tab-contents">
      <div class="tab-content" :class="{ 'is-active': isActive == 'projects' }">
        <!-- <p class="title is-4">Hello world this is project</p> -->
        <MyProjects />
      </div>
      <div class="tab-content" :class="{ 'is-active': isActive == 'blogs' }">
        <MyBlogs :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchTabs',
  data() {
    return {
      isActive: 'projects',
    }
  },
  props: ['articles'],
}
</script>

<style scoped>
.tab-contents .tab-content {
  display: none;
}
.tab-contents .tab-content.is-active {
  display: block;
}
</style>
