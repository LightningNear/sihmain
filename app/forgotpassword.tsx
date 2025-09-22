import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  BackHandler,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ForgotPassword() {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isProceed, setIsProceed] = useState(false);
  const router = useRouter();

  const validateContact = () => {
    const mobileValid = /^[6-9]\d{9}$/.test(mobile);
    const emailValid = /\S+@\S+\.\S+/.test(email);
    return mobileValid || emailValid;
  };

  const onProceed = () => {
    if (validateContact()) {
      setIsProceed(true);
    } else {
      alert('Please enter a valid mobile number or email.');
    }
  };

  const onSubmit = () => {
    if (otp.length === 6) {
      router.push('/resetpassword');
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  // Android hardware back button navigates to login
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        router.replace('/login'); // navigate back to login on hardware back
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => subscription.remove();
    }, [router])
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // hide default header
        }}
      />
      <View style={styles.container}>
        {/* TouchableOpacity back button exactly as your login example */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/login')}
        >
          <Ionicons name="arrow-back" size={24} color="#276749" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>ENTER YOUR MOBILE NUMBER OR EMAIL ID</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter mobile number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            maxLength={10}
            editable={!isProceed}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoComplete="email"
            editable={!isProceed}
            autoCapitalize="none"
          />
        </View>

        <Pressable
          style={[styles.proceedButton, isProceed && styles.proceedButtonDisabled]}
          onPress={onProceed}
          disabled={isProceed || !validateContact()}
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </Pressable>

        <Text style={styles.infoText}>
          An OTP has been sent to your registered mobile number and email.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
          editable={isProceed}
          selectTextOnFocus={isProceed}
        />

        <Pressable
          style={[styles.button, !isProceed && styles.buttonDisabled, { marginTop: 12 }]}
          onPress={onSubmit}
          disabled={!isProceed}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#daf5d4' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  backButtonText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#276749',
    fontWeight: '600',
  },
  title: { fontSize: 18, color: '#276749', fontWeight: '700', marginBottom: 30, textAlign: 'center' },
  field: { marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 6, color: '#276749', fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#276749',
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#000',
  },
  infoText: { fontSize: 16, marginVertical: 20, textAlign: 'center', color: '#276749' },
  proceedButton: {
    backgroundColor: '#276749',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  proceedButtonDisabled: {
    backgroundColor: '#94a59d',
  },
  button: {
    backgroundColor: '#276749',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#94a59d',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
