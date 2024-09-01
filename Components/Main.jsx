import React, {useEffect, useState} from "react";
import {View, FlatList, ActivityIndicator} from "react-native";

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {getLatestGames} from "../lib/metacritic";

import GameCard from "./GameCard";
import {Logo} from "./Logo";

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Logo />
            {games.length === 0 ? (
                <ActivityIndicator color={"#fff"} size={"large"} />
            ) : (
                <FlatList
                    data={games}
                    keyExtractor={(game) => game.slug}
                    renderItem={({item}) => <GameCard game={item} />}></FlatList>
            )}
        </View>
    );
}
