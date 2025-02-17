import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import AppHeader from "../components/header/Header";
import React, { useId, useState } from "react";
import TaskModal from "../components/modal/taskModal";
import EditTaskModal from "../components/modal/editTaskModal";
import { Checkbox, Menu, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string | null;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [menuVisible, setMenuVisible] = useState<number | null>(null);
  const [searchText, setSearchText]= useState<string>("");
  const [filter, setfilter] = useState<"todas" | "pendentes" | "finalizadas">(
    "todas"
  );

  const generateId = () => Math.random().toString(36).substring(2, 15);

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString("pt-BR", options);
  };

  // Adicionar uma nova tarefa
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: generateId(),
      text: taskText,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
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
    updatedTasks[index].completedAt = updatedTasks[index].completed
      ? new Date().toISOString()
      : null;
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

  //Filtrar tarefas
  const filteredtask = tasks
    .filter((tasks) => {
      if (filter === "pendentes") return !tasks.completed;
      if (filter === "finalizadas") return tasks.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(searchText.toLowerCase()))
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  // Abrir modal de edição
  const openEditModal = (index: number) => {
    setSelectedTaskIndex(index);
    setEditModalVisible(true);
  };

  return (
    <Provider>
      <View style={globalStyles.displayFlex}>
        <View>
          <AppHeader onSearch={setSearchText} />
        </View>
        <Text style={globalStyles.title}>Lista de Tarefas</Text>

        {/*Botões de filtro*/}
        <View
          style={globalStyles.buttonFilter}
        >
          {["todas", "pendentes", "finalizadas"].map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() =>
                setfilter(option as "todas" | "pendentes" | "finalizadas")
              }
            >
              <Text
                style={{ fontWeight: filter === option ? "bold" : "normal" }}
              >
                {option.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredtask}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeIn.duration(300)}
                exiting={FadeOut.duration(300)}
                style={{
                  ...globalStyles.taskContainer,
                  backgroundColor: item.completed ? "#add8e6" : "#FFF",
                }}
              >
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
                    <Text style={globalStyles.taskDate}>
                      Criado: {formatDate(item.createdAt)}
                    </Text>
                    {item.completed && item.completedAt && (
                      <Text style={globalStyles.taskDate}>
                        Concluído: {formatDate(item.completedAt)}
                      </Text>
                    )}
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
                  <Menu.Item
                    onPress={() => deleteTask(index)}
                    title="Excluir"
                  />
                </Menu>
              </Animated.View>
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
