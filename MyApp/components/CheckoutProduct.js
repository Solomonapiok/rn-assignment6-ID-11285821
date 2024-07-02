import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import remove from "../assets/remove.png";

const CHECKOUTPRODUCTS = [
    {
        id: '1',
        name: 'Office Wear',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress1.png"),
    },
    {
        id: '2',
        name: 'Black',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress2.png"),
    },
    
];

const CheckoutItem = ({ name, description, price, image }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={image} />
            </View>

            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
                <Image source={remove} style={{ alignSelf: "flex-end", marginTop: 20, marginRight: 15}} />
            </View>
        </View>
    )
}


const CheckoutProduct = () => {
    return (
        <FlatList
            data={CHECKOUTPRODUCTS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <CheckoutItem
                        description={item.description}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                </TouchableOpacity>
            )}
            scrollEnabled={false}
        />

       
    )
}
export default CheckoutProduct;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 26
    },
    image: {
        borderRadius: 5,
        height: 210,
        width: 160
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
    },

    description: {
        opacity: 0.7,
        fontSize: 16,
        marginTop: 6
    },

    price: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
        opacity: 0.8
    },
});