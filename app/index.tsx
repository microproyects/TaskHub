import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet, Image, Button, View, Dimensions, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
export default function Index() {

  useEffect(() => {

  });
  {/* <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        /> */}
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleLogin = () => {
          if (username === 'admin' && password === '123') {
          } else {
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
          }
        };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <View style={styles.containerform}>
            <Text style={styles.title}>Username - Usuario</Text>
            <TextInput onChangeText={setUsername} id="user" style={styles.input} value={username} placeholder="Nombre de usuario" placeholderTextColor={"#A9A9A9"} />
            <Text style={styles.title} >Password - Contraseña</Text>
            <TextInput onChangeText={setPassword}  value={password} id="pass" style={styles.input} placeholder="Contraseña" placeholderTextColor={"#A9A9A9"} />

            <Button onPress={handleLogin} title="Login" color="#0064E0" />

          </View>
        </View>
        <View><Text style={styles.title}>With React Native And With PMP C:</Text></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerform: {
    flex: 1,
    padding: 16,
    borderRadius: 18,
  },

  container: {
    backgroundColor: "#162127",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "400",
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    borderColor: "#24314A",
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 2,
    width: width * 0.9,
    padding: 15,
    color: "white",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  
  welcomeText: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: '50%',
    marginBottom: 24,
  },
});