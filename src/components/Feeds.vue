<template>
  <div class="feeds">
    <Controller />
    <Feed
      :categoryName="'11'"
      :contentsId="22"
      :userId="123"
      :createdAt="'2021-02-15'"
      :title="'Title!!!!'"
      :description="'ddescription'"
    />
  </div>
</template>

<script>
import Controller from './Controller.vue'
import Feed from './Feed.vue'

const data = fetch('https://problem.comento.kr/api/list?page=1&ord=asc&category%5B%5D=1&limit=10')
  .then(response => response.json())
  .then(json => console.log(json));

console.log(data);

export default {
  name: 'Feeds',
  components: {
    Controller,
    Feed,
  },
}
</script>

<style scoped>
.feeds {
  width: 865px;
}
</style>
