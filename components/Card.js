import { View, Text, FlatList, Image} from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { styles} from './style';
import { SelectedButtonProvider } from './contextButton';

export default function Card(){
    const [list, setList] = useState([]);
    const selectedButton = useContext(SelectedButtonProvider);

    useEffect(()=>{
        const getData = async () =>{
            try{
                const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
                const data = await response.json();

                if(selectedButton == 'all'){
                    setList(data);
                }else{
                    const filteredList = data.filter(item => item.available === true);
                    setList(filteredList);
                }
            }
            catch(error){
                console.log("error during getting data ",error);
            }
        }
        getData();
    },[selectedButton])

    const renderItem = ({item})=>(
            <View style={styles.cardContainer}>
                <Image style={styles.coffeeImage} source={{uri:item.image}}/>
                {item.available ? 
                     <View>
                     <View style={styles.namePriceContainer}>
                        <Text style={styles.coffeeName}>{item.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.coffeePrice}>{item.price}</Text>
                        </View>
                     </View>
                        {item.votes !=0 ?
                        <View style={styles.wrapperRatingAll}>
                             <Image source={require('../assets/images/starF.png')}/>
                             <Text style={styles.textRating}>{item.rating}</Text>
                             <Text style={styles.textVotes}>{item.votes+" (votes)"}</Text>
                        </View>
                        :
                        <View style={styles.wrapperRatingAll}>
                             <Image source={require('../assets/images/star.png')}/>
                             <Text style={styles.textVotes}>No ratings</Text>
                        </View>
                        }
                     </View>
                : 
                    <View>
                    <View style={styles.namePriceContainer}>
                        <Text style={styles.coffeeName}>{item.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.coffeePrice}>{item.price}</Text>
                        </View>
                    </View>
                    {item.votes !=0 ?
                    <View style={styles.wrapperRatingAvailable}>
                        <View style={styles.wrapperSoldOut}>
                            <Image source={require('../assets/images/starF.png')}/>
                            <Text style={styles.textRating}>{item.rating}</Text>
                            <Text style={styles.textVotes}>{item.votes+" (votes)"}</Text>
                        </View>
                        <Text style={styles.textSoldOut}>Sold Out</Text>
                    </View>
                    :
                    <View style={styles.wrapperRatingAvailable}>
                        <View style={styles.wrapperSoldOut}>
                            <Image source={require('../assets/images/starF.png')}/>
                            <Text style={styles.textVotes}>No ratings</Text>
                        </View>
                        <Text style={styles.textSoldOut}>Sold Out</Text>
                    </View>
                    }
                    </View>
                }
            </View>
    )
    return(
    <View style={styles.cardContainer}>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    </View>);
}