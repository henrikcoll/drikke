import { defineStore } from 'pinia';
import { getPack } from '@/packs';
import { usePlayers } from './player';

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizeArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = random(0, i);
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export const useDeck = defineStore('deck', {
	state: () => ({
		cards: [],
		cardCounter: 0,
	}),
	getters: {
		current: (state) => state.cards[state.cards.length - state.cardCounter - 1],
	},
	actions: {
		reset() {
			this.cardCounter = 0;
			this.turnCounter = 0;
			this.cards = [];
		},
		next() {
		  this.cardCounter++;
		},
		loadPacks(packs) {
			let cards = [];

			if (window.umami) {
				window.umami.track('loadPacks', { packs: packs.join(',') })
			}

			for (let pack of packs) {
				const newCards = getPack(pack);

				for (let card of newCards) {
					if (typeof card.count == 'number') {
						for (let i = 0; i < card.count; i++) {
							cards.push({
								text: card.text,
								onPlay: card.onPlay
							})
						}
					}
				}

				// Twice for more randomness...
				randomizeArray(cards)
				randomizeArray(cards)
			}

			const playerStore = usePlayers()

			let output = []
			let turnCounter = 0;
			for (let i = 0; i < cards.length; i++) {
				let card = cards[i]
				let current = null
				let targets = null

				function getCurrent() {
					if (!current) {
						turnCounter++;
						current = playerStore.players[turnCounter % playerStore.players.length]
					}
					return current
				}

				function getTarget(index = 0) {
					if (!targets) {
						targets = playerStore.players.filter(p => p !== getCurrent())
						randomizeArray(targets)
					}
					return targets[index]
				}

				output.push(card.text({
					current: getCurrent,
					target: getTarget,
					random,
					numPlayers: playerStore.players.length
				}))

				if (card.onPlay) {
					card.onPlay({
						current: getCurrent,
						target: getTarget,
						insert: (cardText, numTurns) => {
							cards.splice(i+numTurns, 0, { text: () => cardText });
						},
						random,
						numPlayers: playerStore.players.length
					})
				}
			}

			this.cards = output.reverse()
		}
	},
})
