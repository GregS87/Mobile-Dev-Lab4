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

  const [tasks, setTasks] = useState([
    { text: 'Do laundry'},
    { text: 'Go to gym' },
    { text: 'Walk dog'},
  ]);

  const addTask = (taskText) => {
     const newTask = taskText.trim();
     if (newTask == '') {
       return;
     }

     setTasks([...tasks, { text: newTask }]);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
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
