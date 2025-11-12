import React from 'react';
import {
    View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm() {
    return (
        <View style={StyleSheet.form}>
            <TextInput style={StyleSheet.input} placeholder="Add new task"/>
            <Button title="add"/>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});