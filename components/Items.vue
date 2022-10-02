<template>
  <div class="flex flex-col p-8">
    <h1 class="p-2 text-xl border bg-slate-100 border-slate-100">
      {{ page }} data
    </h1>
    <section
      class="p-2 text-xl border border-slate-100"
      v-for="pokeItem in pokeItems.results"
      :key="pokeItem.name"
    >
      <div class="p-4">
        <nuxt-link
          class="px-2 pb-1 mx-auto text-white align-top bg-red-500 shadow-sm hover:shadow-md hover:shadow-black shadow-black hover:bg-red-600"
          :to="'/' + page + '/' + pokeItem.name"
        >
          <button class="mb-2">
            {{ pokeItem.name }}
          </button>
        </nuxt-link>
        <p>{{ pokeItem.url }}</p>
      </div>
    </section>
  </div>
</template>

<script>
//kita hanya butuh state-nya saja dari vuex
import { mapState } from "vuex";

export default {
  //memakai computed properti untul me-load semua datanya
  computed: mapState(["pokeItems"]),
  props: ["page"],
};
</script>

<style lang="scss" scoped></style>
