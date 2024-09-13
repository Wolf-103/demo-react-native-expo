import {Link, Stack} from "expo-router";
import {View} from "react-native";
import { Logo } from "../Components/Logo";
import StyledPressable from "../Components/StyledPressable";
import { CircleInfoIcon } from "../Components/Icons";
import ScreenLayout from "../Components/ScreenLayout"

export default function Layout() {
    return (
        <ScreenLayout>
            <Stack
                screenOptions={{
                    headerStyle: {backgroundColor: "white"},
                    headerTintColor: "green",
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={{alignItems: "center"}}>
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
                    ),
                    headerRight: () => (
                        <Link asChild href="/about">
                            <StyledPressable className={`active:opacity-20 p-2`}>
                                <CircleInfoIcon color="black" />
                            </StyledPressable>
                        </Link>
                    ),
                }}
            />
        </ScreenLayout>
    );
}