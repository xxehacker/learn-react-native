import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/139127822?v=4",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Mridupawan Bordoloi</Text>
      <Text style={styles.role}>Full Stack Developer (MERN)</Text>
      <Text style={styles.bio}>
        MCA student @ Assam Downtown University | Frontend Dev by day, Cybersecurity Enthusiast by night 🧑‍💻. 
        Ethically hacked 100+ websites 🔐 | Passionate about clean code and modern UI.
      </Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Location</Text>
          <Text style={styles.cardContent}>Gohpur, Assam</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Age</Text>
          <Text style={styles.cardContent}>23</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tech Stack</Text>
          <Text style={styles.cardContent}>React, Node, MongoDB, Python</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: "100%",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#555",
    fontSize: 16,
  },
  cardContent: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
});
