import reducer, {
  isShowDeleteNotification,
  setUniqueIdCurrentCard,
  updateCurrentState,
} from ".";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: null })).toEqual({
    card: [],
    isShowNotification: false,
    uniqueCardId: "",
    nameSelectedCard: "",
  });
});

test("should create new card for game store", () => {
  const prevState = {
    card: [],
    isShowNotification: false,
    uniqueCardId: "",
    nameSelectedCard: "",
  };

  expect(
    reducer(
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
    )
  ).toEqual({
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
  });
});

test("should show notification about delete selected card", () => {
  const prevState = {
    card: [],
    isShowNotification: false,
    uniqueCardId: "",
    nameSelectedCard: "",
  };

  expect(reducer(prevState, isShowDeleteNotification(true))).toEqual({
    card: [],
    isShowNotification: true,
    uniqueCardId: "",
    nameSelectedCard: "",
  });
});

test("should hide notification about delete selected card", () => {
  const prevState = {
    card: [],
    isShowNotification: true,
    uniqueCardId: "",
    nameSelectedCard: "",
  };

  expect(reducer(prevState, isShowDeleteNotification(false))).toEqual({
    card: [],
    isShowNotification: false,
    uniqueCardId: "",
    nameSelectedCard: "",
  });
});

test("should return uniqId selected card", () => {
  const prevState = {
    card: [],
    isShowNotification: true,
    uniqueCardId: "",
    nameSelectedCard: "",
  };

  expect(
    reducer(prevState, setUniqueIdCurrentCard("1gfd-sj32-3324-32df-fds4"))
  ).toEqual({
    card: [],
    isShowNotification: true,
    uniqueCardId: "1gfd-sj32-3324-32df-fds4",
    nameSelectedCard: "",
  });
});
