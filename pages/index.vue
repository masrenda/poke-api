<template>
  <div>
    <Items :page="'Pokemon'" />
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
    await store.dispatch("load_items", "pokemon");
  },
};

/**
 * kita hanya butuh state-nya saja dari vuex
 */

// import { mapState } from "vuex";

// export default {

/**
 * memakai computed properti untuk me-load datanya
 */

//   computed: mapState(["pokeSkuy"]),
// };

/**
 * Ketika belum menggunakan store
 */

// import axios from "~/plugins/axios"; export default { asyncData() { return
// axios.get("pokemon").then((res) => ({ pokemons: res.data.results,
//     }));
//   },
// };
</script>

<style lang="scss" scoped></style>
