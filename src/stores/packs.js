import { defineStore } from "pinia";

export const usePacks = defineStore("packs", {
  state: () => ({
    packs: {
      adults: {
        id: "adults",
        enabled: false,
        name: "Adults",
      },
      drink: {
        id: "drink",
        enabled: false,
        name: "Drink!",
      },
      dares: {
        id: "dares",
        enabled: false,
        name: "Dares",
      },
      misc: {
        id: "misc",
        enabled: false,
        name: "Misc...",
      },
    },
  }),
  getters: {
    enabled: (state) =>
      Object.values(state.packs).filter((pack) => pack.enabled),
  },
  actions: {
    enable(name) {
      this.packs[name].enabled = true;
    },
    disable(name) {
      this.packs[name].enabled = false;
    },
    toggle(name) {
      this.packs[name].enabled = !this.packs[name].enabled;
    },
  },
});
