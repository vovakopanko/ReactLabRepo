import reducer, {
  clearCartList,
  decreaseAmount,
  increaseAmount,
  removeCurrentGames,
  setCartList,
  toggleChecked,
} from ".";

describe("cartReducer unit test", () => {
  it("should return the initial state", () => {
    const expectedState = { cartList: [] };
    const result = reducer(undefined, { type: null });
    expect(result).toEqual(expectedState);
  });

  it("should return increase value", () => {
    const prevState = {
      cartList: [
        {
          amount: 2,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 4,
          checked: true,
          name: "SIMS",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const expectedState = {
      cartList: [
        {
          amount: 3,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 4,
          checked: true,
          name: "SIMS",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const result = reducer(prevState, increaseAmount({ name: "Terraria" }));

    expect(result).toEqual(expectedState);
  });

  it("should clear all state", () => {
    const prevState = {
      cartList: [
        {
          amount: 3,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 1,
          checked: true,
          name: "GTA",
          orderDate: "12/5/2022",
          platforms: [],
          price: 14.17,
        },
        {
          amount: 1,
          checked: true,
          name: "SIMS",
          orderDate: "11/5/2022",
          platforms: [],
          price: 24.11,
        },
      ],
    };

    const expectedState = {
      cartList: [],
    };

    const result = reducer(prevState, clearCartList);

    expect(result).toEqual(expectedState);
  });

  it("should return decrease value", () => {
    const prevState = {
      cartList: [
        {
          amount: 2,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const expectedState = {
      cartList: [
        {
          amount: 1,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const result = reducer(prevState, decreaseAmount({ name: "Terraria" }));

    expect(result).toEqual(expectedState);
  });

  it("should be added new card in array cart", () => {
    const prevState = {
      cartList: [
        {
          amount: 1,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const expectedState = {
      cartList: [
        {
          amount: 1,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 1,
          checked: true,
          name: "SIMS",
          orderDate: "11/5/2022",
          platforms: [],
          price: 24.11,
        },
      ],
    };

    const result = reducer(
      prevState,
      setCartList([
        {
          amount: 1,
          checked: true,
          name: "SIMS",
          orderDate: "11/5/2022",
          platforms: [],
          price: 24.11,
        },
      ])
    );

    expect(result).toEqual(expectedState);
  });

  it("should be removed card from array cart", () => {
    const prevState = {
      cartList: [
        {
          amount: 1,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 1,
          checked: true,
          name: "SIMS",
          orderDate: "11/5/2022",
          platforms: [],
          price: 24.11,
        },
      ],
    };

    const expectedState = {
      cartList: [
        {
          amount: 1,
          checked: false,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const result = reducer(
      prevState,
      removeCurrentGames([
        {
          amount: 1,
          checked: false,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
        {
          amount: 1,
          checked: true,
          name: "SIMS",
          orderDate: "11/5/2022",
          platforms: [],
          price: 24.11,
        },
      ])
    );

    expect(result).toEqual(expectedState);
  });

  it("should be added checkbox for selected card in basket user", () => {
    const prevState = {
      cartList: [
        {
          amount: 1,
          checked: true,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const expectedState = {
      cartList: [
        {
          amount: 1,
          checked: false,
          name: "Terraria",
          orderDate: "18/5/2022",
          platforms: [],
          price: 4.87,
        },
      ],
    };

    const result = reducer(prevState, toggleChecked({ name: "Terraria" }));

    expect(result).toEqual(expectedState);
  });
});
