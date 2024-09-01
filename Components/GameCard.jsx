import React from "react";
import {StyleSheet, Text, View, Image, ActivityIndicator} from "react-native";


export default function GameCard({game}) {
    return (
        <View key={game.slug} style={styles.card}>
            <Image source={{uri: game.image}} style={styles.image} />
            <Text style={styles.text}>{game.title}</Text>
            <Text style={styles.score}>{game.score}</Text>
            <Text style={styles.description}>{game.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 42,
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