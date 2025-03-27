import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const NameApp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCombineName = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Both fields are required.");
      return;
    }
    if (firstName.length > 10 || lastName.length > 10) {
      setError("Each name should not exceed 10 characters.");
      return;
    }
    setError("");
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      
      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      <TouchableOpacity style={styles.button} onPress={handleCombineName}>
        <Text style={styles.buttonText}>Display</Text>
      </TouchableOpacity>
      
      <Text style={styles.result}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});

export default NameApp;
