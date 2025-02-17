import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import AppHeader from "../components/header/Header";
import React, { useState } from "react";
import TaskModal from "../components/modal/taskModal";
import EditTaskModal from "../components/modal/editTaskModal";
import { Checkbox } from "react-native-paper";

interface Task {
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const addTask = (taskText: string) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };
  const saveEditedTask = (updatedTask: string) => {
    if (selectedTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex].text = updatedTask;
      setTasks(updatedTasks);
      setEditModalVisible(false);
    }
  };
  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const openEditModal = (index: number) => {
    setSelectedTaskIndex(index);
    setEditModalVisible(true);
  };

  return (
    <View style={globalStyles.displayFlex}>
      <View>
        <AppHeader />
      </View>
      <Text style={globalStyles.title}>Lista de Tarefas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={globalStyles.taskContainer}>
            {/* Checkbox Tarefa Concluída */}
            <Checkbox
              status={item.completed ? "checked" : "unchecked"}
              onPress={() => completeTask(index)}
            />

            {/* Editar Tarefa */}
            <TouchableOpacity onPress={() => openEditModal(index)}>
              <Text
                style={[
                  globalStyles.taskText,
                  item.completed && globalStyles.completedTask,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botão Flutuante para Adicionar Tarefa */}
      <TouchableOpacity
        style={globalStyles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Modais */}
      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddTask={addTask}
      />
      {selectedTaskIndex !== null && (
        <EditTaskModal
          visible={editModalVisible}
          task={tasks[selectedTaskIndex].text}
          onClose={() => setEditModalVisible(false)}
          onSave={saveEditedTask}
        />
      )}
    </View>
  );
}

