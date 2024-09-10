import React, {useEffect, useState} from "react";
import {View, FlatList, ActivityIndicator} from "react-native";
import {Link} from "expo-router";

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {getLatestGames} from "../lib/metacritic";

import {AnimatedGameCard} from "./GameCard";
import {Logo} from "./Logo";

import {CircleInfoIcon} from "./Icons";
import StyledPressable from "./StyledPressable";

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
            <Link asChild href="/about">
                <StyledPressable className={`active:opacity-20 p-2`}>
                    <CircleInfoIcon />
                </StyledPressable>
                {/* <Pressable className="p-2">
                    {({pressed}) => (
                        <CircleInfoIcon style={{opacity: pressed ? 0.5 : 1}} />
                    )}
                </Pressable> */}
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
