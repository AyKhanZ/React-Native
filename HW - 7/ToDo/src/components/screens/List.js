import React, {useState, useEffect} from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import TodoItem from '../ToDoItem'

const List = ({navigation, route}) => {
    const [tasks, setTasks] = useState([]);

    const {params} = route
    
    useEffect(() => {
        setTasks([...tasks, params])
    }, [params])

    const drawToDoItems = () => {
        if (params){
            return tasks.map((t, i) => {
                if (t){
                    return <TodoItem key={i} task={t.task} time={t.time} date={t.date}  />
                }
            })
        } else {
            return <View style={styles.whiteBlock}><Text style={styles.greyFont}>There are no tasks yet</Text></View>
        }
    }


  return (
    <View style={styles.container}>
        {drawToDoItems()}
        <Pressable style={styles.btn}  onPress={() => navigation.navigate('Add New Task')}>
            <Text style={styles.whiteFont}>Add New Task</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    whiteBlock: {
        backgroundColor: "white",
        padding: 50,
        margin: 20,
        width: "90%",
        borderRadius: 10
    }, greyFont: {
        fontWeight: "600",
        color: "grey",
        textAlign: "center",
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#4A3780',
        width: "90%",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 20
    },
    whiteFont: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    }
})

export default List