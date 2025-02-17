import globalStyles from "@/app/styles/globalStyles";
import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button } from "react-native";

interface EditTaskModalProps {
  visible: boolean;
  task: string;
  onClose: () => void;
  onSave: (updatedTask: string) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  visible,
  task,
  onClose,
  onSave,
}) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    if (editedTask.trim()) {
      onSave(editedTask);
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={globalStyles.modalContainer}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.text}>Editar Tarefa</Text>
          <TextInput
            style={globalStyles.input}
            value={editedTask}
            onChangeText={setEditedTask}
          />
          <View style={globalStyles.rowComponent}>
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskModal;
