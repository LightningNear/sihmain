import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; // ✅ icon for back button

const designationOptions = [
  'Producer',
  'Product Processor',
  'Lab',
  'Distributor',
  'Retailer',
];

export default function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState<string | null>(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();

  // ✅ Handle Android hardware back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      router.replace("/"); // always go back to index
      return true;
    });
    return () => backHandler.remove();
  }, [router]);

  useEffect(() => {
    const aadharValid = /^[2-9]{1}[0-9]{11}$/.test(aadhar);
    const mobileValid = /^[6-9]\d{9}$/.test(mobile);
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const nameValid = name.trim().length > 0;
    const passwordValid = password.length > 0;
    const designationValid = designation !== null;
    setIsValid(
      aadharValid &&
        mobileValid &&
        emailValid &&
        nameValid &&
        passwordValid &&
        designationValid
    );
  }, [name, password, aadhar, mobile, email, designation]);

  const onSubmit = () => {
    if (isValid) {
      router.push({
        pathname: '/otpsignup',
        params: { mobile, email, designation },
      });
    } else {
      alert('Please fill in all fields, including designation.');
    }
  };

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const selectDesignation = (item: string) => {
    setDesignation(item);
    setDropdownVisible(false);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* ✅ Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/")}>
          <Ionicons name="arrow-back" size={24} color="#276749" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Signup</Text>

        {/* Existing inputs for name, password, aadhar, mobile, email here */}
        <View style={styles.field}>
          <Text style={styles.label}>NAME:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoComplete="name"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>PASSWORD:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>MOBILE NO:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>EMAIL ID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoComplete="email"
          />
        </View>

        {/* Dropdown for Designation */}
        <View style={styles.field}>
          <Text style={styles.label}>DESIGNATION:</Text>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleDropdown}
          >
            <Text style={styles.dropdownButtonText}>
              {designation || 'Select your designation'}
            </Text>
          </TouchableOpacity>
          <Modal
            visible={dropdownVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setDropdownVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPress={() => setDropdownVisible(false)}
            >
              <View style={styles.modalContent}>
                <FlatList
                  data={designationOptions}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => selectDesignation(item)}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
            style={[styles.submitButton, !isValid && styles.submitButtonDisabled]}
            onPress={onSubmit}
            disabled={!isValid}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#daf5d4',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#276749',
    fontWeight: '600',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#276749',
    marginBottom: 30,
    textAlign: 'center',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#276749',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#276749',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#000',
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#276749',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 250,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
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
  submitButtonDisabled: {
    backgroundColor: '#94a59d',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});
