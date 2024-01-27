export default [
  {
    text: (g) =>
      `${g.current()} come up with a dare for the person on your right`,
    count: 2,
  },
  {
    text: (g) =>
      `${g.current()} come up with a dare for the person on your left`,
    count: 2,
  },
  {
    text: (g) =>
      `${g.current()} tell ${g.target()} a secret about you they don't know.`,
    count: 2,
  },
  {
    text: (g) => `Take a group selfie`,
    count: 1,
  },
  {
    text: (g) => `${g.current()} take a selfie with ${g.target()}`,
    count: 1,
  },
  {
    text: (g) => `${g.current()} talk super loud, like nobody can hear you.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk super loud.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk super quiet.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk super quiet.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk super fast.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk super fast.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk super slow.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk super slow.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk in a different accent.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk in a different accent.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk like a robot.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk like a robot.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk like a pirate.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk like a pirate.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk like a baby.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk like a baby`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk like you're drunk.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk like you're drunk`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} talk with owo's and uwu's.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk with owo's and uwu's.`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) => `${g.current()} speak with a German accent.`,
    count: 1,
    onPlay: (g) =>
      g.insert(
        `${g.current()} you don't have to talk with a German accent`,
        g.random(1, g.numPlayers * 2),
      ),
  },
  {
    text: (g) =>
      `${g.current()} use a brush like you’re talking into a microphone each time you speak.`,
    count: 1,
  },
  {
    text: (g) =>
      `${g.current()} fill your mouth with water, and each person in the group must tell the funniest joke they know. If you spit up the water, you have to eat a spoonful of dirt.`,
  },
  {
    text: (g) =>
      `${g.current()} hold hands with the person to your left for the rest of the game.`,
    count: 1,
  },
];
