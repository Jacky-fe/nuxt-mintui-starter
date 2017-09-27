<template>
  <section class="container">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="$store.state.loading"
      infinite-scroll-distance="10">
      <li v-for="item in $store.state.list">{{ item }}</li>
    </ul>
  </section>
</template>
<style></style>
<script>
import { InfiniteScroll } from 'mint-ui';
export default {
  fetch({store}) {
    store.commit('setList', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    store.commit('setLoading', false)
  },
  methods: {
    loadMore() {
      const store = this.$store;
      store.commit('setLoading', true)
      setTimeout(function (){
        const list = store.state.list
        let last = list[list.length - 1]
        for (let i = 1; i <= 10; i++) {
          list.push(last + i)
        }
       store.commit('setLoading', false)
       store.commit('setList', list)
      }, 2500)
    }
  },
  directives: {
    InfiniteScroll
  }
}
</script>