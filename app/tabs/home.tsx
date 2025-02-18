import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import AppHeader from "../components/header/Header";
import React, { useEffect, useState } from "react";
import TaskModal from "../components/modal/taskModal";
import EditTaskModal from "../components/modal/editTaskModal";
import { Checkbox, Menu, Provider } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import {
  Task,
  loadTasks,
  addTask,
  editTask,
  completeTask,
  deleteTask,
} from "../services/taskService";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [filter, setfilter] = useState<"todas" | "pendentes" | "finalizadas">(
    "todas"
  );

  {/*Carrega a lista de tarefas*/ }
  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

   {/*Formata a Data padrão BR*/ }
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

 {/*Filtrar as tarefas*/}
  const filteredtask = tasks
    .filter((tasks) => {
      if (filter === "pendentes") return !tasks.completed;
      if (filter === "finalizadas") return tasks.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
    
  {/*Salvar edição da tarefa*/ }
  const saveEditedTask = async (updatedTask: string) => {
    if (selectedTaskId !== null) {
      await editTask(updatedTask, selectedTaskId, tasks, setTasks);
      setEditModalVisible(false);
      setSelectedTaskId(null);
    }
  };
  {/*Abre modal de Edição*/ }
  const openEditModal = (taskId: string) => {
    setSelectedTaskId(taskId);
    setEditModalVisible(true);
  };

  return (
    <Provider>
      <View style={globalStyles.displayFlex}>
        <View>
           {/*Carrega o header*/ }
          <AppHeader onSearch={setSearchText} />
        </View>
        <Text style={globalStyles.title}>Lista de Tarefas</Text>

        {/*Botões de filtro*/}
        <View style={globalStyles.buttonFilter}>
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
                  onPress={() => completeTask(item.id, tasks, setTasks)}
                />

                {/* Editar a Tarefa */}
                <TouchableOpacity onPress={() => openEditModal(item.id)}>
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
               {/*Menu de opções: editar e deletar*/ }
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
                  onPress={() => openEditModal(item.id)}
                  title="Editar"
                />
                <Menu.Item
                  onPress={() => deleteTask(item.id, tasks, setTasks)}
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
          onAddTask={(text) => addTask(text, tasks, setTasks)}
        />
        {selectedTaskId !== null && (
          <EditTaskModal
            visible={editModalVisible}
            task={tasks.find((task) => task.id === selectedTaskId)?.text || ""}
            onClose={() => setEditModalVisible(false)}
            onSave={saveEditedTask}
          />
        )}
      </View>
    </Provider>
  );
}
