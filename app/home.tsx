import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Home() {
  const { designation, mobile, email, aadhaar, pan } = useLocalSearchParams<{
    designation?: string;
    mobile?: string;
    email?: string;
    aadhaar?: string;
    pan?: string;
  }>();

  const [profileVisible, setProfileVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with Profile Icon */}
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={() => setProfileVisible(true)}>
          <Ionicons name="person-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Center "Add to Blockchain" */}
      <View style={styles.centerContent}>
        <TouchableOpacity
          style={styles.blockchainButton}
          onPress={() => alert("Data added to blockchain ✅")}
        >
          <Text style={styles.blockchainText}>Add to Blockchain</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Modal */}
      <Modal
        visible={profileVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setProfileVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile Details</Text>

            <Text style={styles.detail}>📌 Designation: {designation}</Text>
            <Text style={styles.detail}>📱 Mobile: {mobile}</Text>
            <Text style={styles.detail}>📧 Email: {email}</Text>
            <Text style={styles.detail}>
              🆔 Aadhaar: {aadhaar ? "Uploaded ✅" : "Not Uploaded"}
            </Text>
            <Text style={styles.detail}>
              🆔 PAN: {pan ? "Uploaded ✅" : "Not Uploaded"}
            </Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setProfileVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f5132", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blockchainButton: {
    backgroundColor: "#198754",
    padding: 18,
    borderRadius: 12,
    width: "70%",
    alignItems: "center",
  },
  blockchainText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0f5132",
    textAlign: "center",
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#0f5132",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  closeText: { color: "#fff", fontWeight: "bold" },
});
