<template>
  <div class="feeds">
    <Controller />
    <ul>
      <Feed
        v-bind:key="feed.id"
        v-for="feed in feeds"
        :categoryName="feed.category_name"
        :contentsId="feed.id"
        :userId="feed.user_id"
        :createdAt="'2021-02-15'"
        :title="feed.title"
        :contents="feed.contents"
      />
    </ul>
  </div>
</template>

<script>
import Controller from './Controller.vue'
import Feed from './Feed.vue'
import store, { INIT_FEEDS } from '../store'

store.commit(INIT_FEEDS)

export default {
  name: 'Feeds',
  components: {
    Controller,
    Feed,
  },
  computed: {
    feeds: () => {
      return store.state.feeds
    }
  }
}
</script>

<style scoped>
.feeds {
  width: 865px;
}
</style>
