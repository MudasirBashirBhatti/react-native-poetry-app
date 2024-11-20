import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// makeFavouriteFunc
export const makeFavouriteFunc = async (poetryId, type) => {

    try {
        const getData = await AsyncStorage.getItem('poetryData');
        // await AsyncStorage.removeItem('favouritePoetry')
        const parsedData = JSON.parse(getData) || []; // Default to an empty array if null

        // Use '===' for comparison
        const filteredItem = parsedData.filter((item) => item._id === poetryId);

        const favourite = []; // Initialize favourite array

        // Check if filteredItem is not empty
        if (filteredItem.length > 0) {
            favourite.push(filteredItem[0]); // Push the first matched item
        }

        // Retrieve existing favourites and append
        const existingFavourites = await AsyncStorage.getItem('favouritePoetry');
        const existingFavouritesArray = existingFavourites ? JSON.parse(existingFavourites) : [];

        if (type === 'addFavourite') {
            if (!existingFavouritesArray.some(item => item._id === poetryId)) {
                existingFavouritesArray.push(...favourite); // Use spread operator to merge arrays
                Alert.alert('Added in Favourites')
            } else {
                Alert.alert('Already in favourites')
            }
        } else {
            const filteredFavourites = existingFavouritesArray.filter(item => item._id !== poetryId)
            existingFavouritesArray.length = 0
            existingFavouritesArray.push(...filteredFavourites)
            Alert.alert('Removed from Favourite')
        }

        // Save the updated favourites list
        await AsyncStorage.setItem('favouritePoetry', JSON.stringify(existingFavouritesArray));

    } catch (e) {
        console.error("Error in makeFavouriteFunc:", e);
    }
};