import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={ styles.card }>{ children }</View>    
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,       // Android BoxShadow
        shadowColor: 'black',                   // iOS Boxshadow (property 1)
        shadowOffset: { width: 0, height: 2},   // iOS Boxshadow (property 2)
        shadowRadius: 6,                        // iOS Boxshadow (property 3)
        shadowOpacity: 0.25                     // iOS Boxshadow (property 4)
    },    
})