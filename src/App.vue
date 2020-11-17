<template>
  <div>
    <UserCard v-for="user in $store.state.users" :key="user.id" name="Some Name"></UserCard>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue"
export default {
  components: {
    UserCard
  }
}
</script>