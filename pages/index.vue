<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-third">
        <MainProfile />
        <!-- <div class="box"><p>Stacks</p></div> -->
        <br />
        <ProfileDetails />
        <br />
        <TechStack />
        <br />
        <MyEducation />
      </div>
      <div class="column">
        <SwitchTabs :articles="articles" />
        <!-- <div class="box"><p>Projects</p></div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles }
  },
}
</script>
