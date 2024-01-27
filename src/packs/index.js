import adults from "./adults";
import drink from "./drink";
import dares from "./dares";
import misc from "./misc";

const packs = {
  adults,
  drink,
  dares,
  misc,
};

export const getPack = (name) => {
  return packs[name];
};
