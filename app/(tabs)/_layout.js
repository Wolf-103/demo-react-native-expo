import {Tabs, tabas} from "expo-router";
import {HomeIcon, InfoIcon} from "../../Components/Icons";
import {View} from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle:{ backgroundColor:"#000"},
                tabBarActiveTintColor: "yellow"
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({color}) => <InfoIcon color={color} />,
                }}
            />
        </Tabs>
    );
}
