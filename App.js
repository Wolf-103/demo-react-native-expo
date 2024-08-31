import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";
// import icon from "./assets/icon.png";
// const icon = require('./assets/icon.png')

export default function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{margin: 20}}>
        <ScrollView>
          {games.map((game) => (
            <View key={game.slug} style={styles.card}>
              <Image source={{ uri: game.image }} style={styles.image} />
              <Text style={styles.text}>{game.title}</Text>
              <Text style={styles.score}>{game.score}</Text>
              <Text style={styles.description}>{game.description}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  card: {
    marginBottom: 48,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});

{
  /* <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable> */
}
