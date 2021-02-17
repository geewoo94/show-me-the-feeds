<template>
  <div class="controller">
    <div class="sort-buttons">
      <div class="sort-button">
        <i v-bind:class="'dot ' + (isAscending ? 'dot__active' : '')"></i>
        <span
          v-bind:class="(isAscending ? 'text__active' : 'text__inactive')"
          @click="setOrderAscending"
        >
          오름차순
        </span>
      </div>
      <div class="sort-button">
        <i v-bind:class="'dot ' + (isAscending ? '' : 'dot__active')"></i>
        <span
          v-bind:class="(isAscending ? 'text__inactive' : 'text__active')"
          @click="setOrderDescending"
        >
          내림차순
        </span>
      </div>
    </div>
    <button class="filter-button">
      필터
    </button>
  </div>
</template>

<script>
import FeedQuery from '../shapes/FeedQuery'
import store, { GET_FEEDS } from '../store'

export default {
  name: "Controller",
  computed: {
    isAscending: () => store.getters.isAscending
  },
  methods: {
    setOrderDescending() {
      const query = new FeedQuery({ ord: "desc" })
      store.dispatch(GET_FEEDS, query)
    },
    setOrderAscending() {
      const query = new FeedQuery({ ord: "asc" })
      store.dispatch(GET_FEEDS, query)
    },
  }
}
</script>

<style scoped>
.controller {
  width: 865px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.sort-buttons {
  display: flex;
  gap: 13px;
}

.sort-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #e1e4e7;
  margin-bottom: 2px;
}

.dot__active {
  background-color: #00c854;
}

.text__inactive {
  color: #adb5bd;
}

.filter-button {
  width: 48px;
  height: 24px;
  border-radius: 3px;
  border: solid 1px #e1e4e7;
  font-size: 13px;
  background: white;
  color: #adb5bd;
}
</style>
