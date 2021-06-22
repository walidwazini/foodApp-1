import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView,
    Button, SafeAreaView, Image
} from 'react-native';
import colourSet from '../assets/colours/colours';
import Feather from 'react-native-vector-icons/Feather';

export default function Details({route}) {
    const { item } = route.params
    console.log(item)
    return (
       <View>
           <SafeAreaView>
               <View>
                   <View>
                       <Feather name='Chevron-left' size={12} color={colourSet.textDark} />
                   </View>
               </View>
           </SafeAreaView>
       </View>
    )
}

const styles = new StyleSheet.create({
    constainer: {
        flex:1,
    },
})