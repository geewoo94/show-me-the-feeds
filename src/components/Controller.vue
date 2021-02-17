<template>
  <div class="controller">
    <div class="sort-buttons">
      <div class="sort-button">
        <i class="dot dot__active"></i>
        <span class="text__active">
          오름차순
        </span>
      </div>
      <div class="sort-button">
        <i class="dot"></i>
        <span class="text__inactive">
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
export default {
  name: "Controller"
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
