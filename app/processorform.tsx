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

export default function ProcessorForm() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [facilityLocation, setFacilityLocation] = useState("");
  const [licenses, setLicenses] = useState("");
  const [capacity, setCapacity] = useState("");
  const [certifications, setCertifications] = useState("");

  const onSubmit = () => {
    alert("Processor form submitted!");
    router.replace('/profile'); // 👉 redirect after submit
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/signup')}>
          <Ionicons name="arrow-back" size={24} color="#276749" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Product Processor Form</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Company/Firm Name</Text>
          <TextInput style={styles.input} value={companyName} onChangeText={setCompanyName} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Registration No.</Text>
          <TextInput style={styles.input} value={registrationNo} onChangeText={setRegistrationNo} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Owner/Manager Govt ID</Text>
          <TextInput style={styles.input} value={ownerId} onChangeText={setOwnerId} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Facility Location (GPS/Address)</Text>
          <TextInput style={styles.input} value={facilityLocation} onChangeText={setFacilityLocation} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Licenses (FSSAI, AYUSH, etc.)</Text>
          <TextInput style={styles.input} value={licenses} onChangeText={setLicenses} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Capacity & Equipment</Text>
          <TextInput
            style={styles.input}
            value={capacity}
            onChangeText={setCapacity}
            placeholder="Drying/Grinding/Storage details"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Certifications (GMP, ISO)</Text>
          <TextInput style={styles.input} value={certifications} onChangeText={setCertifications} />
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
