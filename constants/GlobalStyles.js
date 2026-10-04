const colors = {
  primary50: "#EEF4F1",
  primary100: "#D6E5DF",
  primary200: "#A9C8BC",
  primary400: "#4F8070",
  primary500: "#2F5D50",
  primary700: "#234539",
  paper50: "#FAF6EF",
  paper100: "#F1EADD",
  ink900: "#2B2620",
  gray700: "#5E574D",
  gray500: "#8C8478",
  gray300: "#D9D2C5",
  white: "#FFFFFF",
  accent500: "#E0A33A",
  error50: "#FCE8E6",
  error500: "#B3261E",
};

export const GlobalStyles = {
  colors,

  fonts: {
    display: { fontFamily: "gowun-bold", fontSize: 22, lineHeight: 30 },
    headline: { fontFamily: "gowun-bold", fontSize: 20, lineHeight: 28 },
    header: { fontFamily: "gowun-bold", fontSize: 18, lineHeight: 24 },
    bookTitle: { fontFamily: "gowun-bold", fontSize: 17, lineHeight: 24 },
    number: { fontFamily: "pretendard-bold", fontSize: 22, lineHeight: 28 },
    value: { fontFamily: "pretendard-semibold", fontSize: 17, lineHeight: 24 },
    button: { fontFamily: "pretendard-semibold", fontSize: 16, lineHeight: 22 },
    body: { fontFamily: "pretendard", fontSize: 16, lineHeight: 22 },
    bodyLong: { fontFamily: "pretendard", fontSize: 15, lineHeight: 24 },
    badge: { fontFamily: "pretendard-semibold", fontSize: 15, lineHeight: 20 },
    label: { fontFamily: "pretendard-semibold", fontSize: 13, lineHeight: 18 },
    sub: { fontFamily: "pretendard", fontSize: 13, lineHeight: 18 },
    caption: { fontFamily: "pretendard", fontSize: 12, lineHeight: 16 },
    tab: { fontFamily: "pretendard-semibold", fontSize: 11, lineHeight: 13 },
  },

  shadow: {
    card: {
      shadowColor: colors.ink900,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 2
    },
  },
};
