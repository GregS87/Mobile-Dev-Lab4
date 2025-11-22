import React from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function ToDoList({ tasks = [] }) {
    return (
        <ScrollView>
            {tasks.map((task) => (
                <Pressable key={index}>
                    <View style={[styles.task, styles.incomplete]}>
                        <Text style={styles.taskText}>{task.text}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding:10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    incomplete: {
        backgroundColor: '#fff',
    },
    taskText: {
        fontSize: 16,
        opacity: 0.8,
    },
});