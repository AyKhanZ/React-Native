import React, {useState} from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import InputField from '../InputField'

const AddTask = ({navigation}) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');


  return (
    <View  style={styles.container}>
        <Text style={styles.left}>Task Title</Text>
        <InputField placeholder='Task Title' setSmth={setTask} />
        <View style={styles.row}>
            <Text style={styles.smallleft}>Date</Text>
            <Text style={styles.smallleft}>Time</Text>
        </View>
        <View style={styles.row}>
            <InputField placeholder='Date' setSmth={setDate} />
            <InputField placeholder='Time' setSmth={setTime} />
        </View>
        <Text style={styles.left}>Notes</Text>
        <InputField placeholder='Notes' setSmth={setNotes} />
        <Pressable style={styles.btn}  onPress={() => navigation.navigate('My Todo List', {
        task: task,
        date: date,
        time: time,
        notes: notes
        })}>
            <Text style={styles.whiteFont}>Save</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    btn: {
        backgroundColor: '#4A3780',
        width: "90%",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 20
    },
    left: {
        width: "90%",
        textAlign: "left",
        fontSize: 14,
        fontWeight: "600"
    },
    smallleft: {
        width: "43%",
        textAlign: "left",
        fontSize: 14,
        fontWeight: "600"
    },
    whiteFont: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    row: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default AddTask