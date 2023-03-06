import { StyleSheet, View, Text, Pressable} from "react-native"

export default function GoalItem(props){
    return (
        <Pressable 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed})=> pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View> 
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white',
      },
      pressedItem:{
          opacity: 0.5
      }
})