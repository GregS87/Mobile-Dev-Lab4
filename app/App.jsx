/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import {
  SafeAreaView,
  StyleSheet
} from 'react-native';


function App() {

  const [tasks] = useState([
    { text: 'Do laundry'},
    { text: 'Go to gym' },
    { text: 'Walk dog'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },
});

export default App;
