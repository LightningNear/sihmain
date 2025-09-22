import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LabForm() {
  const router = useRouter();

  const [labName, setLabName] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [accreditation, setAccreditation] = useState("");
  const [authorizedContact, setAuthorizedContact] = useState("");
  const [testingCapabilities, setTestingCapabilities] = useState("");
  const [location, setLocation] = useState("");

  const onSubmit = () => {
    alert("Lab form submitted!");
    router.replace('/profile');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/signup')}>
          <Ionicons name="arrow-back" size={24} color="#276749" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Laboratory Form</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Lab Name</Text>
          <TextInput style={styles.input} value={labName} onChangeText={setLabName} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Registration/Accreditation No.</Text>
          <TextInput style={styles.input} value={registrationNo} onChangeText={setRegistrationNo} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Accreditation (NABL, ISO 17025)</Text>
          <TextInput style={styles.input} value={accreditation} onChangeText={setAccreditation} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Authorized Contact (Name & Govt ID)</Text>
          <TextInput style={styles.input} value={authorizedContact} onChangeText={setAuthorizedContact} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Testing Capabilities</Text>
          <TextInput
            style={styles.input}
            value={testingCapabilities}
            onChangeText={setTestingCapabilities}
            placeholder="Moisture, Pesticide residue, DNA barcoding, etc."
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Location (GPS + Address)</Text>
          <TextInput style={styles.input} value={location} onChangeText={setLocation} />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#daf5d4",
  },
  backButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  backButtonText: { marginLeft: 6, fontSize: 16, color: "#276749", fontWeight: "600" },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#276749",
    marginBottom: 20,
    textAlign: "center",
  },
  field: { marginBottom: 16 },
  label: { fontSize: 15, fontWeight: "600", marginBottom: 6, color: "#276749" },
  input: {
    borderWidth: 1,
    borderColor: "#276749",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: "#276749",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
