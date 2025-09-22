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

export default function RetailerForm() {
  const router = useRouter();

  const [shopName, setShopName] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [license, setLicense] = useState("");
  const [location, setLocation] = useState("");
  const [salesMode, setSalesMode] = useState("");
  const [certifications, setCertifications] = useState("");

  const onSubmit = () => {
    alert("Retailer form submitted!");
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

        <Text style={styles.heading}>Retailer Form</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Shop / Brand Name</Text>
          <TextInput style={styles.input} value={shopName} onChangeText={setShopName} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Registration No.</Text>
          <TextInput style={styles.input} value={registrationNo} onChangeText={setRegistrationNo} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>GST No.</Text>
          <TextInput style={styles.input} value={gstNo} onChangeText={setGstNo} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Owner/Manager Govt ID</Text>
          <TextInput style={styles.input} value={ownerId} onChangeText={setOwnerId} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>License</Text>
          <TextInput
            style={styles.input}
            value={license}
            onChangeText={setLicense}
            placeholder="AYUSH retail license, Trade license"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Location (GPS + Address)</Text>
          <TextInput style={styles.input} value={location} onChangeText={setLocation} />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Sales Mode</Text>
          <TextInput
            style={styles.input}
            value={salesMode}
            onChangeText={setSalesMode}
            placeholder="Offline (shop), Online (website)"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Certifications (optional)</Text>
          <TextInput
            style={styles.input}
            value={certifications}
            onChangeText={setCertifications}
            placeholder="Organic retailer license, Fair Trade"
          />
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
