import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, Button, Easing, StyleSheet, Text, View } from "react-native";

export default function QRScanner() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  // Animated scanning line
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  if (!permission) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>No access to camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      setScannedData(data);
    }
  };

  // Scanning line movement
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // scanning area height
  });

  return (
    <View style={styles.container}>
      {!scanned ? (
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onBarcodeScanned={handleBarCodeScanned}
        >
          {/* Overlay */}
          <View style={styles.overlay}>
            <View style={styles.scannerFrame}>
              <Animated.View
                style={[
                  styles.scanLine,
                  {
                    transform: [{ translateY }],
                  },
                ]}
              />
            </View>
          </View>
        </CameraView>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Scanned Data:</Text>
          <Text>{scannedData}</Text>
          <Button title="Scan Again" onPress={() => setScanned(false)} />
          <Button title="Go Home" onPress={() => router.replace("/")} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Permission screen
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: {
    fontSize: 16,
    marginBottom: 10,
  },

  // Overlay for scanning
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // dark overlay
  },
  scannerFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#00FF00", // green border
    backgroundColor: "rgba(0,0,0,0.2)",
    overflow: "hidden",
  },
  scanLine: {
    width: "100%",
    height: 2,
    backgroundColor: "red",
  },

  // Scan result screen
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  resultText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
});
