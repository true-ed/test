import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, new_users) {
      state.users = new_users;
    },
    createUser(state, new_user) {
      state.users.push(new_user);
    },
    updateUser(state, updated_user) {
      Object.assign(
        state.users.find((user) => user.id == updated_user.id),
        updated_user
      );
    },
    deleteUser(state, user) {
      state.users.splice(
        state.users.findIndex((_user) => _user.id == user.id),
        1
      );
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://5fb3b9fcb6601200168f7c69.mockapi.io/users/")
        .then(function(response) {
          context.commit("setUsers", response.data);
        });
    },
    createUser(context, new_user) {
      axios
        .post("https://5fb3b9fcb6601200168f7c69.mockapi.io/users", {
          id: new_user.id,
          username: new_user.username,
          email: new_user.email,
          address: new_user.address,
        })
        .then(function(response) {
          context.commit("createUser", response.data);
        });
    },
    editUser(context, updated_user) {
      axios
        .put(
          "https://5fb3b9fcb6601200168f7c69.mockapi.io/users/" +
            updated_user.id,
          {
            id: updated_user.id,
            username: updated_user.username,
            email: updated_user.email,
            address: updated_user.address,
          }
        )
        .then(function(response) {
          context.commit("updateUser", response.data);
        });
    },
    deleteUser(context, user) {
      axios
        .delete("https://5fb3b9fcb6601200168f7c69.mockapi.io/users/" + user.id)
        .then(function(response) {
          context.commit("deleteUser", response.data);
        });
    },
  },
  modules: {},
  getters: {
    users: (state) => (search) =>{
      if(search){
        let result = [];

        for(let i in state.users){
          if(state.users[i].username.search(search) != -1){
            result.push(state.users[i])
          }
        }

        return result;
      }else {
        return state.users;
      }
    }
  },
});
