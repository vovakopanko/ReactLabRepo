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
  it("Test counter work correct", () => {
    expect(totalAmount(selectedGames)).toBe(14.89);
  });
  it("Test how work amount counter", () => {
    expect(totalAmount(selectedGame)).toBe(4.87);
  });
  it("The test counter is not working properly", () => {
    expect(totalAmount(selectedGames)).not.toBe(14.88);
  });
  it("The test counter is not working properly", () => {
    expect(totalAmount(selectedGame)).not.toBe(4.89);
  });
});
