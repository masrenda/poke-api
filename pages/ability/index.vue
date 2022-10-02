<template>
  <div>
    <Items :page="'Ability'" />
  </div>
</template>

<script>
import Items from "~/components/Items.vue";

export default {
  components: {
    Items,
  },

  //kita taruh parameter store biar kita bisa panggil dispatch method-nya
  async fetch({ store }) {
    //dispatch method ini adalah method yang sudah otomatis ada
    //load_items adalah nama method-nya
    //pokemon ialah url yang akan diterima
    await store.dispatch("load_items", "ability");
  },
};
</script>

<style lang="scss" scoped></style>
