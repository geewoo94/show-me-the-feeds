<template>
  <div class="feed">
    <div class="head">
      <span class="category-name">{{ categoryName }}</span>
      <span class="contents-id">{{ contentsId }}</span>
    </div>
    <div class="body">
      <div>
        <span class="user-id">{{ userId }}</span>
        <span class="created-at">{{ createdAt }}</span>
      </div>
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    categoryName: String,
    contentsId: Number,
    userId: Number,
    createdAt: String,
    title: String,
    description: String,
  },
}
</script>

<style scoped>
.feed {
  padding: 20px 30px;
  border: solid 1px #e1e4e7;
  border-radius: 5px;
  font-size: 13px;
}

.head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ebec;
}

.category-name {
  color: #7e848a;
}

.contents-id {
  color: #adb5bd;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
}

.user-id {
  color: #00c854;
  padding-right: 10px;
  border-right: 1px solid rgb(224, 224, 224);
}

.created-at {
  margin-left: 10px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 10px 10px 0;
}

.description {
  font-size: 16px;
}
</style>
