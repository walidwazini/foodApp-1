import * as React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView,
    Button, SafeAreaView, Image
} from 'react-native';
import categoriesData from '../assets/data/catagoriesFile';
import popularData from '../assets/data/popularFile'

import colourSet from '../assets/colours/colours';
import { color, round } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular, Montserrat_200ExtraLight, useFonts
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';




export default function HomeScreen({ navigation }) {
    const renderCategoryItem = ({ item }) => {
        return (
            <View
                style={[ // Make style an array because to have selected n unselected item styles
                    styles.categoryItemWrapper,
                    {
                        // If the item is selescted, make the set the color as primary
                        // if not seledted, item is white
                        backgroundColor: item.selected ? colourSet.primary : colourSet.white,
                        marginLeft: item.id == 1 ? 20 : 0,
                    },
                ]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View
                    style={[
                        styles.categorySelectWrapper,
                        {
                            backgroundColor: item.selected ? colourSet.white : colourSet.secondary,
                        },
                    ]}>
                    <Feather name="chevron-right" size={20}
                        style={styles.categorySelectIcon}
                        color={item.selected ? colourSet.black : colourSet.white}
                    />
                </View>
            </View>
        )
    }

    return (

        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                {/*-------------    Header     ------------*/}
                <SafeAreaView>
                    <View style={styles.headerWrapper} >
                        <Image source={require('../assets/images/profile.png')}
                            style={styles.profileImage} />
                        <Feather name='menu' size={24} color={colourSet.textDark} />
                    </View>
                </SafeAreaView>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleFirst}>Food</Text>
                    <Text style={styles.titleSecond}>Delivery</Text>
                </View>
                <View style={styles.searchWrapper}>
                    <Feather name="search" size={16} color={colourSet.textDark} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                {/*--------------          Categories           --------------*/}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>

                {/* -----------------           Popular           ------------------- */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                navigation.navigate('Details', {
                                    item: item,
                                })
                            }>
                            <View
                                style={[
                                    styles.popularCardWrapper,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                    },
                                ]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons
                                                name="crown"
                                                size={12}
                                                color={colourSet.primary}
                                            />
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.popularTitlesWeight}>
                                                Weight {item.weight}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name="plus" size={10} color={colourSet.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons
                                                name="star"
                                                size={10}
                                                color={colourSet.textDark}
                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

// -------------          STYLESHEET     ------------------

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    test: {
        fontFamily: ''
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titleFirst: {
        // fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        color: colourSet.textDark,
    },
    titleSecond: {
        // fontFamily: 'Montserrat_700Bold',
        fontSize: 32,
        color: colourSet.textDark,
        marginTop: 5,
    },
    //  -----------------------       SEARCH     -------------------
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colourSet.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        // fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colourSet.textLight,
    },

    //  -----------------------       CATEGORIES     -------------------
    categoriesTitle: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1.15,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        // fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },


    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colourSet.white,
        borderRadius: 25,
        borderColor: 'black',
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colourSet.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2.15,
        shadowRadius: 10,
        elevation: 9,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colourSet.textDark,
    },
    popularTitlesWeight: {
        // fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colourSet.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colourSet.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colourSet.textDark,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
})

// export default HomeScreen;