<template>
  <div class="box">
    <button class="login-button">로그인</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
.box {
  align-self: flex-start;
}

.login-button {
  width: 235px;
  height: 60px;
  border-radius: 5px;
  background-color: #00c854;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
</style>
