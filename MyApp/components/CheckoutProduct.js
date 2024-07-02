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
    // {
    //     id: '3',
    //     name: 'Church Wear',
    //     description: 'Reversible Angora Cardigan',
    //     price: "$ 150",
    //     image: require("../assets/dress3.png"),
    // },
    // {
    //     id: '4',
    //     name: 'Lamerei',
    //     description: 'Reversible Angora Cardigan',
    //     price: "$ 150",
    //     image: require("../assets/dress4.png"),
    // },
    // {
    //     id: '5',
    //     name: '21WN',
    //     description: 'Reversible Angora Cardigan',
    //     price: "$ 150",
    //     image: require("../assets/dress5.png"),
    // },
    // {
    //     id: '6',
    //     nname: 'Lopo',
    //     description: 'Reversible Angora Cardigan',
    //     price: "$ 150",
    //     image: require("../assets/dress6.png"),
    // },
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

        // <View style={styles.container}>
        //   <FlatList
        //     data={PRODUCTS}
        //     keyExtractor={(item) => item.id}
        //     renderItem={({ item }) => (
        //       <TouchableOpacity>
        //         <View style={styles.product}>
        //           <Image source={{ uri: item.image }} style={styles.image} />
        //           <Text style={styles.name}>{item.name}</Text>
        //           <Text style={styles.price}>${item.price}</Text>
        //         </View>
        //       </TouchableOpacity>
        //     )}
        //   />
        //   <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
        // </View>
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
    // product: {
    //   marginBottom: 20,
    //   backgroundColor: '#fff',
    //   padding: 10,
    //   borderRadius: 5,
    //   shadowColor: '#000',
    //   shadowOpacity: 0.1,
    //   shadowOffset: { width: 0, height: 1 },
    //   shadowRadius: 5,
    //   elevation: 2,
    // },
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