import { defineStore } from "pinia";

export const usePlayers = defineStore("players", {
  state: () => ({
    players: [],
  }),
  actions: {
    addPlayer(name) {
      this.players.push(name);
    },
    removePlayer(name) {
      this.players = this.players.filter((player) => player !== name);
    },
    clearPlayers() {
      this.players = [];
    },
  },
});
