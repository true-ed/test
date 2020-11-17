<template>
  <div class="user-editor">
    <div class="user-editor__close" @click="close">
      <i class="fas fa-times"></i>
    </div>
    <label class="user-editor__item">
      Username: <br />
      <input class="user-editor__input" type="text" v-model="cusername" />
    </label>
    <label class="user-editor__item">
      Email: <br />
      <input class="user-editor__input" type="text" v-model="cemail" />
    </label>
    <label class="user-editor__item">
      City: <br />
      <input
        class="user-editor__input"
        type="text"
        v-model="caddress.city"
      />
    </label>
    <label class="user-editor__item">
      Street: <br />
      <input
        class="user-editor__input"
        type="text"
        v-model="caddress.street"
      />
    </label>
    <label class="user-editor__item">
      Bloc: <br />
      <input
        class="user-editor__input"
        type="text"
        v-model="caddress.bloc"
      />
    </label>
    <button type="button" class="button user-editor__button" v-if="toCreate" @click="() => {
        if(create()){
          close()
        }
      }">
      Create
    </button>
    <button type="button" class="button user-editor__button" v-if="toEdit" @click="() => {
        if(edit()){
          close()
        }
      }">
      Change
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    username: String,
    email: String,
    address: Object,
    toCreate: Boolean,
    toEdit: Boolean,
    close: Function
  },
  data() {
    return {
      cusername: "",
      cemail: "",
      caddress: {
        city: "",
        street: "",
        bloc: "",
      },
    };
  },
  mounted() {
    this.cusername = this.username;
    this.cemail = this.email;
    console.log(this.address)
    this.caddress = Object.assign({}, this.address);
  },
  methods: {
    create() {
      if (this.cusername == "") {
        alert("Введите имя");
      } else if (this.cusername == "") {
        alert("Введите почту");
      } else {
        this.$store.dispatch("createUser", {
          id: this.id,
          username: this.cusername,
          email: this.cemail,
          address: this.caddress,
        });
        return true;
      }
    },
    edit() {
      if (this.cusername == "") {
        alert("Введите имя");
      } else if (this.cusername == "") {
        alert("Введите почту");
      } else {
        this.$store.dispatch("editUser", {
          id: this.id,
          username: this.cusername,
          email: this.cemail,
          address: this.caddress,
        });
        return true;
      }
    }
  },
};
</script>
