import { Link } from "expo-router";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome 👋</Text>
      <Text style={styles.heading}>I'm Mridupawan</Text>
      <Text style={styles.subheading}>Full Stack Developer (MERN)</Text>

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Link href="/about" style={styles.linkText}>
            About Me
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link href="/contact" style={styles.linkText}>
            Contact
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    color: "#ccc",
    marginBottom: 5,
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },
  subheading: {
    fontSize: 18,
    color: "#aaa",
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  button: {
    backgroundColor: "#4c68d7",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: 220,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
