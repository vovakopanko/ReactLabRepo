import reducer, {
  clearCartList,
  decreaseAmount,
  increaseAmount,
  removeCurrentGames,
  setCartList,
  toggleChecked,
} from ".";

describe("cartReducer unit test", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: null })).toEqual({ cartList: [] });
  });

  test("should return increase value", () => {
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

    expect(reducer(prevState, increaseAmount({ name: "Terraria" }))).toEqual({
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
    });
  });

  test("should clear all state", () => {
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

    expect(reducer(prevState, clearCartList)).toEqual({
      cartList: [],
    });
  });

  test("should return decrease value", () => {
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

    expect(reducer(prevState, decreaseAmount({ name: "Terraria" }))).toEqual({
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
    });
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

  test("should be removed card from array cart", () => {
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

    expect(
      reducer(
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
      )
    ).toEqual({
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
    });
  });

  test("should be added checkbox for selected card in basket user", () => {
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

    expect(reducer(prevState, toggleChecked({ name: "Terraria" }))).toEqual({
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
    });
  });
});
