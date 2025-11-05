import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/react-logo.png")}
          style={{ height: 100, width: 100 }}
        />
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text style={{ fontFamily: "Inter_300Light_Italic" }}>Inter Black</Text>
      </SafeAreaView>
    </>
  );
}
