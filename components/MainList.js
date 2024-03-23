import { View, Pressable, Text, ImageBackground } from 'react-native'
import { useState, useEffect } from 'react';
import { styles} from './style';
import Card from './Card';
import { useFonts } from "expo-font";
import colors from '../assets/colors/colors';
import { SelectedButtonProvider } from './contextButton';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function MainList(){
    const [show,setShow] = useState(true);
    const [selectedButton,setSelectedButton] = useState('all');

    let [fontsLoaded] = useFonts({
        'DMSans-SemiBold': require('../assets/fonts/DMSans-SemiBold.ttf'),
    });
    useEffect(() => {
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    const handleAllProductPress = ()=>{
        setShow(true);
        setSelectedButton('all');
    };

    const handleAvailableProductPress = ()=>{
        setShow(false);
        setSelectedButton('available');
    };

    const getButtonStyle = (buttonName) =>{
        return buttonName === selectedButton 
        ? {...styles.buttonStyle, backgroundColor:colors.greyButton} 
        : styles.buttonStyle;
    };
    return (
        <SelectedButtonProvider.Provider value={selectedButton}>
        <View style={{flex:1}}>
            <ImageBackground 
                source={require("../assets/images/bg-cafe.jpg")}
                style={styles.backgroundImage}
                resizeMode='cover'>
            </ImageBackground>
            <View style={styles.listContainer}>
                <View style={styles.collectionContainer}>
                    <Text style={styles.collectionText}>Our Collection</Text>
                    <Text style={styles.descriptionText}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</Text>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={handleAllProductPress} style={getButtonStyle('all')}><Text style={styles.buttonFont}>All Products</Text></Pressable>
                        <Pressable onPress={handleAvailableProductPress} style={getButtonStyle('available')}><Text style={styles.buttonFont}>Available Now</Text></Pressable>
                    </View>
                    <Card/>
                </View>
            </View>
        </View>
        </SelectedButtonProvider.Provider>
    );
}