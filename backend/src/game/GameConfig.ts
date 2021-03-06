const COLORS = [
  { id: "r", color: "red" },
  { id: "g", color: "green" },
  { id: "b", color: "blue" },
  { id: "o", color: "orange" },
];

const DIMENSION = 10;

const GAMES_LIMIT = 10;

// simple check to avoid using duplicate ids by mistake
(function validateUniqueIds() {
  const set = new Set();
  COLORS.forEach(({ id }) => set.add(id));

  if (set.size !== COLORS.length) {
    throw new Error("Invalid color Ids. Ids must be unique");
  }
})();

export type ColorId = string;

export interface IColor {
  id: ColorId;
  color: string;
}

export const GameConfig = Object.freeze({
  getColors(): Array<IColor> {
    return COLORS.map((val) => ({ ...val }));
  },
  getDimension() {
    return DIMENSION;
  },
  gamesLimit() {
    return GAMES_LIMIT;
  },
});
