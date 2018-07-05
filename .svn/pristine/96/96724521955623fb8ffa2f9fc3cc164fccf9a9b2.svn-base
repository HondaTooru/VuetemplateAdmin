<template>
  <section class="app-main">
    <div class="app-container">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
           <router-view :key="key"></router-view>
        </keep-alive>
        <!-- <router-view></router-view> -->
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>
