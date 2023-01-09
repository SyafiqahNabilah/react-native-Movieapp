import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SavedMovieForm = ({ onSubmit, initialValues}) => {
  const [description, setDescription] = useState(initialValues.description);
  const [like, setLike] = useState(initialValues.like);
  return (
    <View>
      <Text style={styles.label}>Enter Description/Notes:</Text>
      <TextInput
        
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Button title="Save Movie" onPress={() => onSubmit(description, like)} />
    </View>
  );
};

SavedMovieForm.defaultProps = {
  initialValues: {
    description: '',
    like: true
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15,
    padding: 5,
    marginTop: 10,
    margin: 5,
    maxHeight: 50,
    height:50,
    color: '#fff'

  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    color: '#fff'
  }
});

export default SavedMovieForm;
