import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const { mobile, email, designation } = useLocalSearchParams<{
    mobile?: string;
    email?: string;
    designation?: string;
  }>();

  const router = useRouter();

  // 👇 Reset OTP + state whenever page is focused again
  useFocusEffect(
    useCallback(() => {
      setOtp("");
      setVerified(false);
    }, [])
  );

  const onVerify = () => {
    if (otp.length === 6) {
      setVerified(true);

      // Delay navigation so user sees success message
      setTimeout(() => {
        switch (designation) {
          case "Producer":
            router.replace("/producerform"); // 👈 use replace so OTP page isn’t in back stack
            break;
          case "Product Processor":
            router.replace("/processorform");
            break;
          case "Lab":
            router.replace("/labform");
            break;
          case "Distributor":
            router.replace("/distributorform");
            break;
          case "Retailer":
            router.replace("/retailerform");
            break;
          default:
            router.replace("/home");
        }
      }, 1500);
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <View style={styles.container}>
      {verified ? (
        <View style={styles.successBox}>
          <Text style={styles.successText}>✅ OTP Verified Successfully!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.infoText}>
            An OTP has been sent to your mobile number {mobile} and email {email}.
          </Text>

          <TextInput
            style={styles.otpInput}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            maxLength={6}
          />

          <Pressable style={styles.verifyButton} onPress={onVerify}>
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#daf5d4",
  },
  infoText: {
    fontSize: 16,
    color: "#276749",
    marginBottom: 20,
    textAlign: "center",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#276749",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 18,
    backgroundColor: "#fff",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#276749",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  successBox: {
    backgroundColor: "#c6f6d5",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#276749",
  },
});
