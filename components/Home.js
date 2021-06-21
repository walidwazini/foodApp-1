import * as React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, FlatList,
    Button, SafeAreaView, Image
} from 'react-native';
import catagoriesData from '../assets/data/catagoriesFile';
import popularData from '../assets/data/popularFile'

import colourSet from '../assets/colours/colours';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Montserrat_700Bold, Montserrat_600SemiBold, Montserrat_400Regular, Montserrat_200ExtraLight, useFonts
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';


const HomeScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Montserrat_700Bold, Montserrat_600SemiBold,
        Montserrat_400Regular, Montserrat_200ExtraLight,
    })
    return (
        <View style={styles.container}>
            {/* Header */}
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
            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
            </View>

        </View>
    )
}


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
        // fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colourSet.textDark,
    },
    titleSecond: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colourSet.textDark,
        marginTop: 5,
    },
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
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colourSet.textLight,
    },
});

export default HomeScreen;