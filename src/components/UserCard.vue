<template>
  <div class="user-card">
    <div class="user-card__name">
      {{ username }}
    </div>
    <div class="user-card__email">
      {{ email }}
    </div>
    <div class="user-card__address" v-if="address.city && address.city != ''">
      City: {{ address.city }}
    </div>
    <div class="user-card__address" v-if="address.street && address.street != ''">
      Street: {{ address.street }}
    </div>
    <div class="user-card__address" v-if="address.bloc && address.bloc != ''">
      Bloc: {{ address.bloc }}
    </div>
    <button type="button" class="user-card__edit" @click="edit">
      <i class="far fa-edit"></i>
    </button>
    <button type="button" class="user-card__delete" @click="del">
      <i class="far fa-trash-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    email: String,
    address: Object,
    edit: Function,
    del: Function
  },
};
</script>
