import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import shoppingBag from "../assets/shoppingBag.png";
import Logo from "../assets/Logo.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TouchableOpacity } from "react-native";


const Header = ({ navigation }) => {
    return (
        <View style={{ margin: 10 }}>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                <View>
                    <Ionicons name="menu-outline" size={33} />
                </View>

                <View>
                    <Image source={Logo} style={{ cursor: "pointer" }} />
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: 10 }}>
                    <View style={{ marginRight: 10 }}>
                        <Ionicons name="search-outline" size={33} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
                            <Image source={shoppingBag} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                <View>
                    <Text style={{ fontSize: 25 }}>OUR STORY</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, backgroundColor: "#D3D3D3", borderRadius: 50, padding: 10, opacity: 0.4}}>
                        <MaterialCommunityIcons name="format-list-checkbox" size={30} />
                    </View>

                    <View style={{ height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 50, marginHorizontal: 10, padding: 10, opacity: 0.4 }}>
                        <MaterialCommunityIcons name="filter-variant" size={30} color="red" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Header;