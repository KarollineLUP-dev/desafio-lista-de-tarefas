import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import AppHeader from "../components/header/Header";
import React, { useState } from "react";
import TaskModal from "../components/modal/taskModal";
import EditTaskModal from "../components/modal/editTaskModal";
import { Checkbox, Menu, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

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
  const [menuVisible, setMenuVisible] = useState<number | null>(null);

  // Adicionar uma nova tarefa
  const addTask = (taskText: string) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // Salvar edição da tarefa
  const saveEditedTask = (updatedTask: string) => {
    if (selectedTaskIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex].text = updatedTask;
      setTasks(updatedTasks);
      setEditModalVisible(false);
    }
  };

  //Completar Tarefa
  const completeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Excluir tarefa
  const deleteTask = (index: number) => {
    Alert.alert(
      "Excluir Tarefa",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: () => {
            setTasks(tasks.filter((_, i) => i !== index));
            setMenuVisible(null);
          },
          style: "destructive",
        },
      ]
    );
  };

  // Abrir modal de edição
  const openEditModal = (index: number) => {
    setSelectedTaskIndex(index);
    setEditModalVisible(true);
  };

  return (
    <Provider>
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
              <View style={globalStyles.taskLeft}>
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
              <Menu
                visible={menuVisible === index}
                onDismiss={() => setMenuVisible(null)}
                anchor={
                  <TouchableOpacity onPress={() => setMenuVisible(index)}>
                    <Icon name="ellipsis-vertical" size={20} color="black" />
                  </TouchableOpacity>
                }
              >
                <Menu.Item
                  onPress={() => openEditModal(index)}
                  title="Editar"
                />
                <Menu.Item onPress={() => deleteTask(index)} title="Excluir" />
              </Menu>
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
    </Provider>
  );
}
