import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Button,
  FlatList,
} from "react-native";

import {CheckBox , Icon} from "@rneui/themed";

const FilterOpt = ({
  modalVisible,
  setModalVisible,
  yearResult,
  setFilter,
}) => {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = useState();

  const onChangeValue = (item) => {
    setData(item)
  }
  console.log("Selected year:" + data);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 26 }}>Filters:</Text>
          <Text style={[styles.label, { marginTop: 20 }]}>Year</Text>
          <FlatList
            data={yearResult}
            keyExtractor={(year) => year}
            renderItem={({ item }) => {
              return (
                <CheckBox
                key={item}
                title={item}
                checked={data === item? !checked:checked}
                onPress={() => onChangeValue(item)}
                containerStyle={{ padding: 3 }}
                checkedIcon={
                  <Icon
                    name="radio-button-checked"
                    type="material"
                    color="green"
                    size={25}
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-unchecked"
                    type="material"
                    color="grey"
                    size={25}
                    iconStyle={{ marginRight: 10 }}
                  />
                }
              />
              );
            }}
          />
        </View>
        <Button
          title="Apply"
          onPress={() => {
            setFilter(data)
            setModalVisible(!modalVisible);
          }}
        />
        <Button
          title="Clear"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default FilterOpt;
