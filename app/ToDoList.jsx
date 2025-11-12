import React from 'react';
import {
    View, Text, StyleSheet} from 'react-native';

export default function ToDoList({ tasks = [] }) {
    return (
        <ScrollView>
            {tasks.map((task) => (
                <Pressable>
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