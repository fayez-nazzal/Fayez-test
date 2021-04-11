export const textClassFromTheme = (themeColor) => {
  return themeColor === "custom_crimson"
    ? "text-custom_crimson"
    : themeColor === "custom_blue"
    ? "text-custom_blue"
    : themeColor === "custom_indigo"
    ? "text-custom_indigo"
    : themeColor === "custom_aqua"
    ? "text-custom_aqua"
    : themeColor === "custom_black"
    ? "text-custom_black"
    : " text-custom_grey";
};

export const bgClassFromTheme = (themeColor) => {
  return themeColor === "custom_crimson"
    ? "bg-custom_crimson"
    : themeColor === "custom_blue"
    ? "bg-custom_blue"
    : themeColor === "custom_indigo"
    ? "bg-custom_indigo"
    : themeColor === "custom_aqua"
    ? "bg-custom_aqua"
    : themeColor === "custom_black"
    ? "bg-custom_black"
    : " bg-custom_grey";
};
