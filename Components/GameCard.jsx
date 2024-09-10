import React, {useEffect, useRef} from "react";
import {StyleSheet, Text, View, Image, Animated} from "react-native";
import {Score} from "./Score";
import {Link} from "expo-router";
import StyledPressable from "./StyledPressable";

export function GameCard({game}) {
    return (
        <Link href={`/${game.slug}`} asChild>
            <StyledPressable
                className={`active:opacity-20 border border-black active:border-white/50 
            bg-slate-500/10 rounded-xl p-4`}>
                <View className="flex-row gap-4" key={game.slug}>
                    <Image source={{uri: game.image}} style={styles.image} />
                    <View className="flex-shrink">
                        <Text className="mb-2" style={styles.text}>
                            {game.title}
                        </Text>
                        <Score score={game.score} maxscore={100}></Score>
                        <Text className="flex-shrink-0" style={styles.description}>
                            {game.description.slice(0, 100)}
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </Link>
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
