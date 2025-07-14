import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello world</Text>
      <Link href="/about" style={styles.about}>
        About
      </Link>

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.image}
      />
      {/* <Image source={{ uri: "https://reactjs.org/logo-og.png"}} style={{ width: 200, height: 200 }} /> */}
    </View>
  );
}

//! Styles for the index page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  heading: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
  },
  about: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    textDecorationLine: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 20,
    width: 200,
    radius: 5,
  },
});
