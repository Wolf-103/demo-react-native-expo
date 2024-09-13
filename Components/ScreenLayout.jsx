import React from "react";
import {View} from "react-native";

export default function ScreenLayout({children}) {
    return <View className="flex-1 bg-black">{children}</View>;
}
