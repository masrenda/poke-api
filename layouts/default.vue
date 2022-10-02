<template>
  <div class="bg-gray-200">
    <section class="pt-8 pl-8">
      <nav class="flex flex-row gap-5">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/location">Location</nuxt-link>
        <nuxt-link to="/ability">Ability</nuxt-link>
      </nav>
    </section>
    <section class="flex flex-col gap-2 pt-8 pb-4 pl-8">
      <h1 class="text-4xl font-semibold">Poké API</h1>
      <h2 class="text-xl">
        All the Pokémon data you'll ever need in one place, easily accessible
        through a modern RESTful API.
      </h2>
    </section>
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
