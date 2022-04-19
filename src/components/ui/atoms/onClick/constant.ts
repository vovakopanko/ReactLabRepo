import { colors } from "./../../../../styles/palette/index";

export const defaultButton = {
  color: colors.RED,
  style: {
    backgroundColor: colors.PURPURE,
    color: colors.WHITE,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 15,
  },
};

export const disabledButton = {
  color: colors.RED,
  style: {
    backgroundColor: colors.GRAY,
    color: colors.BLACK,
    opacity: 0.3,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 15,
  },
};
