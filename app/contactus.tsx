import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ContactUs() {
  const router = useRouter();

  const [issueOpen, setIssueOpen] = useState(false);
  const [issueValue, setIssueValue] = useState(null);
  const [issueItems, setIssueItems] = useState([
    { label: 'Product Quality', value: 'product-quality' },
    // Removed 'Order or Delivery'
    { label: 'Account or Login', value: 'account-login' },
    { label: 'Technical Support', value: 'tech-support' },
    { label: 'Other', value: 'other' },
  ]);

  const [contactOpen, setContactOpen] = useState(false);
  const [contactValue, setContactValue] = useState(null);
  const [contactItems, setContactItems] = useState([
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'No preference', value: 'no-preference' },
  ]);

  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handleSubmit = () => {
    setShowSuccess(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setShowSuccess(false);
      // Reset form fields for next entry
      setIssueValue(null);
      setContactValue(null);
      setMessage('');
    }, 1500);
  };

  if (showSuccess) {
    return (
      <View style={styles.successContainer}>
        <Animated.View style={[styles.checkmarkCircle, { opacity: fadeAnim }]}>
          <Ionicons name="checkmark-circle-outline" size={96} color="#214c33" />
        </Animated.View>
        <Text style={styles.successText}>Message sent successfully!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>Contact Us</Text>

      <Text style={styles.label}>Select type of issue</Text>
      <DropDownPicker
        open={issueOpen}
        value={issueValue}
        items={issueItems}
        setOpen={setIssueOpen}
        setValue={setIssueValue}
        setItems={setIssueItems}
        placeholder="Select an issue"
        zIndex={3000}
        zIndexInverse={1000}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Text style={styles.label}>Preferred contact method</Text>
      <DropDownPicker
        open={contactOpen}
        value={contactValue}
        items={contactItems}
        setOpen={setContactOpen}
        setValue={setContactValue}
        setItems={setContactItems}
        placeholder="Select contact method"
        zIndex={2000}
        zIndexInverse={2000}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Text style={styles.label}>Additional details / message</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={6}
        value={message}
        onChangeText={setMessage}
        placeholder="Describe your issue or question here..."
      />

      <TouchableOpacity
        style={[styles.submitButton, !(issueValue && contactValue) && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={!(issueValue && contactValue)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#a9d5b1',
    flexGrow: 1,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#214c33',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#214c33',
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: '#20a8e0',
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdownContainer: {
    backgroundColor: '#20a8e0',
    borderRadius: 8,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: '#214c33',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#6b8a72',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  successContainer: {
    flex: 1,
    backgroundColor: '#a9d5b1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  checkmarkCircle: {
    marginBottom: 20,
  },
  successText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#214c33',
  },
});
