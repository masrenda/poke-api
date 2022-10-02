<template>
  <div class="flex flex-col p-8">
    <h1 class="p-2 text-xl border bg-slate-100 border-slate-100">
      {{ pokeItems.name }}'s Data
    </h1>
    <div class="text-xl">
      <div class="p-4 border border-slate-100">
        <div
          class="w-20 px-2 pb-1 mb-2 text-center text-white bg-red-500 shadow-sm shadow-black"
        >
          Name
        </div>
        <p>{{ pokeItems.name }}</p>
      </div>

      <div class="p-4 border border-slate-100">
        <div
          class="w-20 px-2 pb-1 mb-2 text-center text-white bg-red-500 shadow-sm shadow-black"
        >
          AB1
        </div>
        <p>{{ pokeItems.abilities?.[0].ability.name }}</p>
      </div>

      <div class="p-4 border border-slate-100">
        <div
          class="w-20 px-2 pb-1 mb-2 text-center text-white bg-red-500 shadow-sm shadow-black"
        >
          AB2
        </div>
        <p>{{ pokeItems.abilities?.[1].ability.name }}</p>
      </div>

      <div class="p-4 border border-slate-100">
        <div
          class="w-20 px-2 pb-1 mb-2 text-center text-white bg-red-500 shadow-sm shadow-black"
        >
          Forms
        </div>
        <p>{{ pokeItems.forms?.[0].name }}</p>
        <p>{{ pokeItems.forms?.[0].url }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["pokeItems"]),
  //kita taruh parameter store biar kita bisa panggil dispatch method-nya
  async fetch({ store, params }) {
    //dispatch method ini adalah method yang sudah otomatis ada
    //load_items adalah nama method-nya
    //pokemon ialah url yang akan diterima
    await store.dispatch("load_items", "pokemon/" + params.name || +params.id);
  },
};
</script>

<style lang="scss" scoped></style>
