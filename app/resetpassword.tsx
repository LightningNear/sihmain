import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    BackHandler,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ResetPassword() {
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const router = useRouter();

  // ✅ Hardware back → go to ForgotPassword
  useEffect(() => {
    const backAction = () => {
      router.replace('/forgotpassword');
      return true;
    };
    const subscription = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => subscription.remove();
  }, [router]);

  const onSubmit = () => {
    if (!newPass || !confirmPass) {
      alert('Please fill in both password fields.');
      return;
    }
    if (newPass !== confirmPass) {
      alert('Passwords do not match.');
      return;
    }
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      {/* ✅ Back button same style */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/forgotpassword')}>
        <Ionicons name="arrow-back" size={24} color="#276749" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Set New Password</Text>

      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPass}
        onChangeText={setNewPass}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPass}
        onChangeText={setConfirmPass}
      />

      <View style={styles.submitButtonContainer}>
        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#daf5d4', justifyContent: 'center' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  backButtonText: { marginLeft: 6, fontSize: 16, color: '#276749', fontWeight: '600' },
  heading: { fontSize: 28, fontWeight: '700', color: '#276749', marginBottom: 30, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#276749',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  submitButtonContainer: { alignItems: 'center', marginTop: 15 },
  submitButton: {
    backgroundColor: '#276749',
    paddingVertical: 10,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
    shadowColor: '#276749',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
