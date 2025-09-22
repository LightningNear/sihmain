import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const [aadhaar, setAadhaar] = useState<string | null>(null);
  const [pan, setPan] = useState<string | null>(null);
  const router = useRouter();

  const pickDocument = async (type: "aadhaar" | "pan") => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (result.assets && result.assets.length > 0) {
      const fileUri = result.assets[0].uri;
      if (type === "aadhaar") setAadhaar(fileUri);
      else setPan(fileUri);
    }
  };

  const handleSubmit = () => {
    if (!aadhaar || !pan) {
      alert("Please upload both Aadhaar and PAN before submitting.");
      return;
    }
    router.replace("/home"); // ✅ Navigates to Home
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile Verification</Text>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => pickDocument("aadhaar")}
        >
          <Text style={styles.uploadText}>
            {aadhaar ? "Aadhaar Uploaded ✅" : "Upload Aadhaar Card (PDF)"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => pickDocument("pan")}
        >
          <Text style={styles.uploadText}>
            {pan ? "PAN Uploaded ✅" : "Upload PAN Card (PDF)"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f5132",
    paddingVertical: 40, // padding for viewport
    paddingHorizontal: 20,
    justifyContent: "center", // center vertically
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "#198754",
    padding: 16,
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "center",
    width: "100%",
  },
  uploadText: { color: "#fff", fontSize: 16 },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
    width: "100%",
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
