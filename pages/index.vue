<template>
  <section class="container">
    <div class="swipe">
      <swipe :auto="4000">
        <swipe-item>1</swipe-item>
        <swipe-item>2</swipe-item>
        <swipe-item>3</swipe-item>
      </swipe>
      <mt-button size="small" type="primary" @click="testToast()">Toast</mt-button>
    </div>
    <nuxt-link class="button" to="/infinitescroll">
      InfiniteScroll
    </nuxt-link>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
.swipe {
  height: 400px;
}
</style>
<script>
import { Swipe, SwipeItem, Button, Toast } from 'mint-ui'
export default {
  components: {
    Swipe,
    SwipeItem,
    MtButton: Button
  },
  methods: {
    testToast: () => {
      Toast('hello nuxt!')
    }
  }
}

</script>
