import globalStyles from "@/app/styles/globalStyles";
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (task: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  visible,
  onClose,
  onAddTask,
}) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={globalStyles.modalContainer}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.text}>Nova Tarefa</Text>
          <TextInput
            style={globalStyles.input}
            placeholder="Digite a tarefa..."
            value={task}
            onChangeText={setTask}
          />
          <View style={globalStyles.rowComponent}>
            <Button  title="Adicionar" onPress={handleAddTask} />
            <Button title="Cancelar" onPress={onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
