import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import addCircle from "../assets/add_circle.png";

const PRODUCTS = [
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
    {
        id: '3',
        name: 'Church Wear',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress3.png"),
    },
    {
        id: '4',
        name: 'Lamerei',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress4.png"),
    },
    {
        id: '5',
        name: '21WN',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress5.png"),
    },
    {
        id: '6',
        nname: 'Lopo',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress6.png"),
    },
    {
        id: '7',
        name: '21WN',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress7.png"),
    },
    {
        id: '8',
        name: 'Lame',
        description: 'Reversible Angora Cardigan',
        price: "$ 150",
        image: require("../assets/dress3.png"),
    },
    {
        id: '9',
        name: 'Linen Dress',
        description: 'A light and airy linen dress perfect for summer.',
        price: "$ 150",
        image: 'https://example.com/image9.jpg',
    },
    {
        id: '10',
        name: 'Cotton Hoodie',
        description: 'A comfortable and stylish cotton hoodie.',
        price: "$ 150",
        image: 'https://example.com/image10.jpg',
    },
    {
        id: '11',
        name: 'Wool Coat',
        description: 'A warm and elegant wool coat for cold weather.',
        price: "$ 150",
        image: 'https://example.com/image11.jpg',
    },
    {
        id: '12',
        name: 'Fleece Jacket',
        description: 'A cozy and lightweight fleece jacket.',
        price: "$ 150",
        image: 'https://example.com/image12.jpg',
    },
    {
        id: '13',
        name: 'Silk Blouse',
        description: 'A sophisticated silk blouse for special occasions.',
        price: "$ 150",
        image: 'https://example.com/image13.jpg',
    },
    {
        id: '14',
        name: 'Leather Belt',
        description: 'A durable and stylish leather belt.',
        price: "$ 150",
        image: 'https://example.com/image14.jpg',
    },
    {
        id: '15',
        name: 'Cotton Shorts',
        description: 'Comfortable and breathable cotton shorts.',
        price: "$ 150",
        image: 'https://example.com/image15.jpg',
    },
    {
        id: '16',
        name: 'Wool Hat',
        description: 'A warm wool hat for the winter season.',
        price: "$ 150",
        image: 'https://example.com/image16.jpg',
    },
    {
        id: '17',
        name: 'Flannel Shirt',
        description: 'A classic flannel shirt for everyday wear.',
        price: "$ 150",
        image: 'https://example.com/image17.jpg',
    },
    {
        id: '18',
        name: 'Down Vest',
        description: 'A lightweight down vest for added warmth.',
        price: "$ 130",
        image: 'https://example.com/image18.jpg',
    },
    {
        id: '19',
        name: 'Canvas Tote Bag',
        description: 'A spacious and durable canvas tote bag.',
        price: "$ 20",
        image: 'https://example.com/image19.jpg',
    },
    {
        id: '20',
        name: 'Nylon Windbreaker',
        description: 'A lightweight nylon windbreaker for windy days.',
        price: "$ 65",
        image: 'https://example.com/image20.jpg',
    },
    {
        id: '21',
        name: 'Wool Sweater',
        description: 'A cozy wool sweater for the winter season.',
        price: "$ 85",
        image: 'https://example.com/image21.jpg',
    },
    {
        id: '22',
        name: 'Corduroy Pants',
        description: 'Comfortable and stylish corduroy pants.',
        price: "$ 55",
        image: 'https://example.com/image22.jpg',
    },
    {
        id: '23',
        name: 'Polyester Raincoat',
        description: 'A waterproof polyester raincoat for rainy days.',
        price: "$ 95",
        image: 'https://example.com/image23.jpg',
    },
    {
        id: '24',
        name: 'Cotton Polo Shirt',
        description: 'A classic cotton polo shirt for everyday wear.',
        price: "$ 35",
        image: 'https://example.com/image24.jpg',
    },
    {
        id: '25',
        name: 'Linen Trousers',
        description: 'Light and breathable linen trousers for summer.',
        price: "$ 50",
        image: 'https://example.com/image25.jpg',
    },
];

const ProductItem = ({ name, description, price, image }) => {
    return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={image} />
                    <Image source={addCircle}  style={{ alignSelf: "flex-end", position: "absolute", top: 216, right: 13, fontSize: 30}}/>
                </View>

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
    )
}


const Product = () => {
    return (
        <FlatList
            data={PRODUCTS}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => (
                <ProductItem
                    description={item.description}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
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
export default Product;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginTop:20,
      alignContent: "center"
    },
    product: {
      marginBottom: 20,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
      elevation: 2,
    },
    image: {
      width: '100%',
      height: 250,
      borderRadius: 5,
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
  