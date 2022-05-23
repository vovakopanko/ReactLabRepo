const enum Pages {
  DEFAULT = "/",
  ABOUT = "about",
  PRODUCT_PLATFORM = "product/:platform",
  PROFILE = "profile",
  BASKET = "basket",
  REDIRECT = "*",
  EDIT_MODAL = "games/:name",
  FOUND_NAME = "found/:name",
  CREATE_MODAL = "/createCard",
}

export default Pages;
