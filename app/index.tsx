import { Text, TextInput, StyleSheet, Image } from "react-native";
import image from '../assets/images/logo.png';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={styles.title}>Username</Text>
        <TextInput style={styles.input} />
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.input} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    marginBottom: 10,
  },
  input: {
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    width: 200,
    color: "white",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  }
  });
