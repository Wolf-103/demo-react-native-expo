import React, {useEffect, useState} from "react";
import {View, FlatList, ActivityIndicator} from "react-native";
import {getLatestGames} from "../lib/metacritic";
import {AnimatedGameCard} from "./GameCard";

export function Main() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <View className="bg-black">
            {games.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({item, index}) => (
                        <AnimatedGameCard game={item} index={index} />
                    )}
                />
            )}
        </View>
    );
}
