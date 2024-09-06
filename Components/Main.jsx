import React, {useEffect, useState} from "react";
import {View, FlatList, ActivityIndicator} from "react-native";
import {Link} from "expo-router";

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {getLatestGames} from "../lib/metacritic";

import {AnimatedGameCard} from "./GameCard";
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
            <View style={{backgroundColor: "#fff", alignItems: "center"}}>
                <Logo
                    width={300}
                    height={100}
                    style={{
                        marginTop: 0,
                        marginBottom: -20,
                        transform: [{scale: 1.7}],
                    }}
                />
            </View>
            <Link href="/about" className="text-blue-500 text-xl">
                Ir a about
            </Link>
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
