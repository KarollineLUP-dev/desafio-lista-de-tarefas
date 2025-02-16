import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { globalStyles } from "../styles/globalStyles";

interface Item {
  id: string;
  name: string;
}

const data: Item[] = [
  { id: "1", name: "Tarefa 1" },
  { id: "2", name: "Tarefa 2" },
  { id: "3", name: "Tarefa 4" },
  { id: "4", name: "Tarefa 5" },
];

export default function SearchList() {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Item[]>(data);

  const handleSearch = (text: string) => {
    setSearch(text);
    
    if (text.trim() === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Campo de pesquisa */}
      <View style={globalStyles.searchContainer}>
        <TextInput
          style={globalStyles.searchInput}
          placeholder="Pesquisar..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={handleSearch}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
        <Icon name="search" color="#fff" style={globalStyles.headerIcon} />
      </View>

      {/* Lista de itens ou mensagem de "Nenhum resultado" */}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={globalStyles.listItem}>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20, color: "#fff" }}>
          Nenhum resultado encontrado.
        </Text>
      )}
    </View>
  );
}
