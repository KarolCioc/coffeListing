import { StyleSheet, Dimensions } from "react-native";
import colors  from '../assets/colors/colors'
const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    listContainer:{
        backgroundColor: colors.firstBackground,
        flex:0.75,
    },
    collectionText:{
        color: colors.fontColor,
        fontSize: 24,
        margin: 20,
        fontFamily:'DMSans-SemiBold'
    },
    backgroundImage:{
        flex:0.25,
    },
    collectionContainer:{
        position: 'absolute',
        alignItems:'center',
        bottom: window.height*0.01,
        height:window.height*0.85,
        margin:35,
        padding: 10,
        backgroundColor:colors.secondBackground,
        borderRadius:10
    },
    descriptionText:{
        color: colors.greyButton,
        fontSize: 12,
        padding: 10,
        textAlign:'center',
        fontFamily:'DMSans-SemiBold'
    },
    buttonsContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:210
    },
    buttonStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height: window.height*0.05,
        margin: 5,
        padding: 5,
        borderRadius: 8,
    },
    buttonFont:{
        fontFamily:'DMSans-SemiBold',
        color: colors.fontColor,
        fontSize:12
    },
    cardContainer:{
        flex:5,
        backgroundColor:colors.secondBackground
    },
    coffeeName:{
        color:colors.fontColor,
        fontFamily:'DMSans-SemiBold',
        margin: 5,
        marginLeft:0
    },
    coffeePrice:{
        fontSize:12,
        fontFamily:'DMSans-SemiBold',
        textAlign:'center',
    },
    namePriceContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    priceContainer:{
        backgroundColor: colors.priceBackground,
        borderRadius: 5,
        height:28,
        width:window.width*0.16,
        margin: 5,
        marginRight: 0,
        justifyContent:'center'
    },
    coffeeImage:{
        resizeMode:'cover',
        height: 150,
        width:250, 
        borderRadius: 10
    },
    textVotes:{
        color: colors.greyButton,
        fontSize:12,
        fontFamily:'DMSans-SemiBold',
        marginLeft:2,
        marginRight:2
    },
    textRating:{
        color:colors.fontColor,
        fontFamily:'DMSans-SemiBold',
        fontSize:12,
        marginLeft:2,
        marginRight:2,
    },
    wrapperRatingAll:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'center',
        marginBottom:15
    },
    wrapperRatingAvailable:{
        flex:1, 
        flexDirection:'row', 
        ustifyContent:'space-between', 
        alignItems:'center',
        marginBottom:15
    },
    wrapperSoldOut:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'center'
    },
    textSoldOut:{
        color:colors.soldOut, 
        fontFamily:'DMSans-SemiBold'
    }
});