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
        <SwitchTabs />
        <!-- <div class="box"><p>Projects</p></div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
