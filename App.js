import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import RecentBooks from "./Screens/RecentBooks";
import { GlobalStyles } from "./constants/GlobalStyles";
import IconButton from "./components/UI/IconButton";
import AllBooks from "./Screens/AllBooks";
import BookDetail from "./Screens/BookDetail";
import ManageBook from "./Screens/ManageBook";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.white,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.white },
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageBook");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentBooks"
        component={RecentBooks}
        options={{
          title: "최근 읽은 책",
          tabBarLabel: "최근 30일",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllBooks"
        component={AllBooks}
        options={{
          title: "전체 서재",
          tabBarLabel: "전체 서재",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

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
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: GlobalStyles.colors.white,
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          }}
        >
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BookDetail"
            component={BookDetail}
            options={({ navigation }) => ({
              title: "책이름",
              headerTintColor: GlobalStyles.colors.white,
              headerRight: () => (
                <IconButton
                  name="create-outline"
                  size={24}
                  color={GlobalStyles.colors.white}
                  onPress={() => {
                    navigation.navigate("ManageBook")
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="ManageBook"
            component={ManageBook}
            options={{
              title: "책 추가",
              headerTintColor: GlobalStyles.colors.white,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6E5DF",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
});
