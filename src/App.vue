<template>
  <div class="app">
    <div class="search">
        <button type="button" class="button button_error search__button" @click="search = ''">Clear</button>
        <input placeholder="Search" class="search__input" type="text" v-model="search">
    </div>
    <UserEditor
      v-if="active_user.id"
      :id="active_user.id"
      :username="active_user.username"
      :email="active_user.email"
      :address="active_user.address"
      :toCreate="user_editor.toCreate"
      :toEdit="user_editor.toEdit"
      :close="
        () => {
          active_user = {};
          user_editor.toEdit = false;
          user_editor.toCreate = false;
        }
      "
    />
    <UserCard
      class="app__user-card"
      v-for="user in $store.getters.users(search)"
      :key="user.id"
      :username="user.username"
      :email="user.email"
      :address="user.address"
      :edit="
        () => {
          user_editor.toEdit = true;
          active_user = user;
        }
      "
      :del="
        () => {
          $store.dispatch('deleteUser', { id: user.id });
        }
      "
    ></UserCard>
    <button
      type="button"
      class="button app__create-button"
      @click="
        () => {
          user_editor.toCreate = true;
          active_user = {
            id: ($store.state.users.length + 1).toString(),
            username: '',
            email: '',
            address: {
              city: '',
              street: '',
              bloc: '',
            },
          };
        }
      "
    >
      Create
    </button>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import UserEditor from "./components/UserEditor.vue";

export default {
  components: {
    UserCard,
    UserEditor,
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  data() {
    return {
      active_user: {},
      user_editor: {
        toCreate: false,
        toEdit: false,
      },
      search: "",
    };
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__user-card {
    display: inline-block;
    margin-top: 10px;
  }

  &__create-button {
    margin-top: 20px;
  }
}
</style>
