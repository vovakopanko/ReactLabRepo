import reducer, {
  isShowDeleteNotification,
  setUniqueIdCurrentCard,
  updateCurrentState,
} from ".";

describe("productReducer unit test", () => {
  it("should return the initial state", () => {
    const expectedState = {
      card: [],
      isShowNotification: false,
      uniqueCardId: "",
      nameSelectedCard: "",
    };
    const result = reducer(undefined, { type: null });
    expect(result).toEqual(expectedState);
  });

  it("should create new card for game store", () => {
    const prevState = {
      card: [],
      isShowNotification: false,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const expectedState = {
      card: [
        {
          age: "12",
          alt: "test",
          amountStars: 0,
          description: "test description",
          genres: "test genres",
          imagePlatforms: [],
          price: 23,
          title: "test title",
          url: "test url",
        },
      ],
      isShowNotification: false,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const result = reducer(
      prevState,
      updateCurrentState([
        {
          age: "12",
          alt: "test",
          amountStars: 0,
          description: "test description",
          genres: "test genres",
          imagePlatforms: [],
          price: 23,
          title: "test title",
          url: "test url",
        },
      ])
    );
    expect(result).toEqual(expectedState);
  });

  it("should show notification about delete selected card", () => {
    const prevState = {
      card: [],
      isShowNotification: false,
      uniqueCardId: "",
      nameSelectedCard: "",
    };
    const expectedState = {
      card: [],
      isShowNotification: true,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const result = reducer(prevState, isShowDeleteNotification(true));

    expect(result).toEqual(expectedState);
  });

  it("should hide notification about delete selected card", () => {
    const prevState = {
      card: [],
      isShowNotification: true,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const expectedState = {
      card: [],
      isShowNotification: false,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const result = reducer(prevState, isShowDeleteNotification(false));

    expect(result).toEqual(expectedState);
  });

  it("should return uniqId selected card", () => {
    const prevState = {
      card: [],
      isShowNotification: true,
      uniqueCardId: "",
      nameSelectedCard: "",
    };

    const expectedState = {
      card: [],
      isShowNotification: true,
      uniqueCardId: "1gfd-sj32-3324-32df-fds4",
      nameSelectedCard: "",
    };

    const result = reducer(
      prevState,
      setUniqueIdCurrentCard("1gfd-sj32-3324-32df-fds4")
    );

    expect(result).toEqual(expectedState);
  });
});
