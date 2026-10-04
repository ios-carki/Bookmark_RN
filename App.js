import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Button from "./components/UI/Button";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./constants/GlobalStyles";
import StarRating from "./components/UI/StarRating";
import Input from "./components/ManageBook/Input";
import BookItem from "./components/BooksOutput/BookItem";
import BooksSummary from "./components/BooksOutput/BooksSummary";
import InfoTile from "./components/BookDetail/InfoTile";
import { getFormattedDate } from "./utils/date";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    pretendard: require("./assets/fonts/Pretendard-Regular.otf"),
    "pretendard-semibold": require("./assets/fonts/Pretendard-SemiBold.otf"),
    "pretendard-bold": require("./assets/fonts/Pretendard-Bold.otf"),
    "gowun-bold": require("./assets/fonts/GowunBatang-Bold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Button title="타이틀" titleTextStyle={{ minWidth: 120 }} />
      <IconButton name="add" color={GlobalStyles.colors.white} size={24} />
      <StarRating size={32} rating={0} isInvalid={true} />
      <StatusBar style="auto" />
      <Input
        title="제목"
        placeholder={"책 제목"}
        isInvalid={true}
        multiline={true}
      />
      <BookItem
        title="아몬드asdfasdfsadfasdfsdafasdf"
        author="손원평"
        pages={1622}
        rating={3}
        finishedDate={new Date()}
      />
      <BooksSummary period="최근 30일" booksCount={0} pagesCount={1191} />
      <View style={{ flexDirection: "row", gap: 12 }} >
        <InfoTile
          icon={"calendar-outline"}
          label="완독일"
          value={getFormattedDate(new Date())}
          style={{ flex: 1 }}
        />
        <InfoTile
          icon={"document-text-outline"}
          label="페이지"
          value={getFormattedDate(new Date())}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6E5DF",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 12
  },
});
