import React, {useEffect, useRef} from "react";
import {StyleSheet, Text, View, Image, Animated} from "react-native";
import {Score} from "./Score";

export function GameCard({game}) {
    return (
        <View
            className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-2"
            key={game.slug}>
            <Image source={{uri: game.image}} style={styles.image} />
            <View>
                <Text className="mb-2" style={styles.text}>
                    {game.title}
                </Text>
                <Score score={game.score} maxscore={100}></Score>
                <Text className="flex-shrink-0" style={styles.description}>
                    {game.description.slice(0, 100)}
                </Text>
            </View>
        </View>
    );
}

export function AnimatedGameCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{opacity}}>
            <GameCard game={game} />
        </Animated.View>
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
        marginBottom: 10,
    },
});
