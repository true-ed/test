<template>
  <div class="user-card">
    <div class="user-card__name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  width: 300px;
  height: auto;
  background-color: white;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.4);
}
</style>
