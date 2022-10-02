import axios from "~/plugins/axios";

export const state = () => ({
  pokeItems: [],
});

export const mutations = {
  setPokeItems(state, pokeItems) {
    state.pokeItems = pokeItems;
  },
};

export const actions = {
  async load_items({ commit }, url) {
    const { data } = await axios.get(url);
    //.results dihapus agar lebih dinamis
    commit("setPokeItems", data);
  },

  /**
   * nuxtServerInit akan selalu me-load (otomatis) apapun method-nya
   */

  //   async nuxtServerInit({ commit }) {
  //     const { data } = await axios.get("pokemon");
  //     commit("setPokeItems", data.results);
  //   },
};
