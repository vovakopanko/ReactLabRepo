import { totalAmount } from "./totalAmounTest";

const selectedGame = [
  {
    amount: 1,
    checked: true,
    name: "Terraria",
    orderDate: "9/5/2022",
    platforms: [
      {
        alt: "Xbox",
        id: 0,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png",
      },
    ],
    price: 4.87,
  },
];

const selectedGames = [
  {
    amount: 1,
    checked: true,
    name: "Terraria",
    orderDate: "9/5/2022",
    platforms: [
      {
        alt: "Xbox",
        id: 0,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png",
      },
    ],
    price: 4.87,
  },
  {
    amount: 2,
    checked: true,
    name: "SIMS 4",
    orderDate: "9/5/2022",
    platforms: [
      {
        alt: "Xbox",
        id: 0,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png",
      },
    ],
    price: 5.01,
  },
];

describe("totalAmount unit test", () => {
  it("should return correct value", () => {
    const prevState = selectedGames;
    const expectedState = 14.89;

    expect(totalAmount(prevState)).toBe(expectedState);
  });
  it("should return correct value", () => {
    const prevState = selectedGame;
    const expectedState = 4.87;
    expect(totalAmount(prevState)).toBe(expectedState);
  });
  it("should return invalid value", () => {
    const prevState = selectedGames;
    const expectedState = 14.88;
    expect(totalAmount(prevState)).not.toBe(expectedState);
  });
  it("should return invalid value", () => {
    const prevState = selectedGame;
    const expectedState = 4.89;
    expect(totalAmount(prevState)).not.toBe(expectedState);
  });
});
