import { NavigationHelpersContext } from '@react-navigation/native';
import * as React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView,
    Button, SafeAreaView, Image, Alert
} from 'react-native';
import categoriesData from '../assets/data/catagoriesFile';
import popularData from '../assets/data/popularFile'
import colourSet from '../assets/colours/colours';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details({ route, navigation }) {
    const { item } = route.params
    console.log(item)
    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[
                styles.ingredientItemWrapper,
                {
                    marginLeft: item.id === '1' ? 20 : 0,
                }
            ]} >
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        )
    }
    return (
        <View>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.headerLeft} >
                            <Feather name='chevron-left' size={12} color={colourSet.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons
                            name='star'
                            size={12}
                            color={colourSet.white}
                        />
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView>
                {/* Title */}
                <View style={styles.titlesWrapper} >
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                {/* Price */}
                <View style={styles.priceWrapper}>
                    <Text style={styles.priceText}>${item.price}</Text>
                </View>

                {/* Pizza Info */}
                <View style={styles.infoWrapper}>
                    <View style={styles.infoLeftWrapper} >
                        <View style={styles.infoItemWrapper} >
                            <Text style={styles.infoItemTitle}>Size</Text>
                            <Text style={styles.infoItemText} >
                                {item.sizeName} {item.sizeNumber}"
                            </Text>
                        </View>
                        <View style={styles.infoItemWrapper} >
                            <Text style={styles.infoItemTitle}>Crust</Text>
                            <Text style={styles.infoItemText} >
                                {item.crust}
                            </Text>
                        </View>
                        <View style={styles.infoItemWrapper} >
                            <Text style={styles.infoItemTitle}>Size</Text>
                            <Text style={styles.infoItemText} >
                                {item.deliveryTime}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoRightWrapper} >
                        <Image source={item.image} style={styles.itemImage} />
                    </View>
                </View>

                {/* -----------      Ingredients             --------------*/}
                <View style={styles.ingredientsWrapper}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>
                    <View style={styles.ingredientsListWrapper}>
                        <FlatList
                            data={item.ingredients}
                            renderItem={renderIngredientsItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* --------------     Place an Order       -------------------- */}
                <TouchableOpacity onPress={() => Alert.alert('Add this to cart?',
                    [
                        { text: 'Yes', onPress: () => console.log('Yes button clicked') },
                        { text: 'No', onPress: () => console.log('No button clicked')},
                    ],
                    // {
                    //     cancelable: true 
                    // }
                )} >
                    <View style={styles.orderWrapper}>
                        <Text style={styles.orderText}>Place an order</Text>
                        <Feather name="chevron-right" size={18} color={colourSet.black} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = new StyleSheet.create({
    constainer: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colourSet.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colourSet.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colourSet.primary,
        borderWidth: 2,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colourSet.textDark,
        width: '50%',
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colourSet.price,
        // fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
    infoWrapper: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
        // fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colourSet.textLight,
    },
    infoItemText: {
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colourSet.textDark,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },

    // ------------        INGRDIENTS   ------------
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        // fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colourSet.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colourSet.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colourSet.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain',
    },
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        marginBottom: 100,
        backgroundColor: colourSet.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderText: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    },
})