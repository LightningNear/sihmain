// app/producerform.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProducerForm() {
  const router = useRouter();

  // 🔹 Producer fields
  const [name, setName] = useState('');
  const [govtId, setGovtId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gps, setGps] = useState('');
  const [landProof, setLandProof] = useState('');
  const [species, setSpecies] = useState('');
  const [certification, setCertification] = useState('');
  const [bankDetails, setBankDetails] = useState('');

  const [isValid, setIsValid] = useState(false);

  // ✅ Validation
  useEffect(() => {
    const nameValid = name.trim().length > 0;
    const govtIdValid = govtId.trim().length > 5;
    const phoneValid = /^[6-9]\d{9}$/.test(phone);
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const addressValid = address.trim().length > 0;
    const gpsValid = gps.trim().length > 0;
    const landProofValid = landProof.trim().length > 0;
    const speciesValid = species.trim().length > 0;

    setIsValid(
      nameValid &&
        govtIdValid &&
        phoneValid &&
        emailValid &&
        addressValid &&
        gpsValid &&
        landProofValid &&
        speciesValid
    );
  }, [name, govtId, phone, email, address, gps, landProof, species]);

  const onSubmit = () => {
    if (isValid) {
      alert('✅ Producer details submitted successfully!');
      router.replace('/profile'); 
    } else {
      alert('Please fill all required fields correctly.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* 🔙 Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace('/signup')}
        >
          <Ionicons name="arrow-back" size={24} color="#276749" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Producer Registration</Text>

        {/* Fields */}
        <Field label="Name" value={name} onChangeText={setName} />
        <Field
          label="Govt ID (Aadhaar/PAN/Voter)"
          value={govtId}
          onChangeText={setGovtId}
        />
        <Field
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Field
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Field label="Address" value={address} onChangeText={setAddress} />
        <Field
          label="GPS Coordinates"
          value={gps}
          onChangeText={setGps}
        />
        <Field
          label="Land/Collection Proof"
          value={landProof}
          onChangeText={setLandProof}
        />
        <Field
          label="Crop/Species Data"
          value={species}
          onChangeText={setSpecies}
        />
        <Field
          label="Certification (Optional)"
          value={certification}
          onChangeText={setCertification}
        />
        <Field
          label="Bank Details (Optional)"
          value={bankDetails}
          onChangeText={setBankDetails}
        />

        {/* Submit */}
        <View style={styles.submitButtonContainer}>
          <Pressable
            style={[
              styles.submitButton,
              !isValid && styles.submitButtonDisabled,
            ]}
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

// ✅ Reusable Field Component with typing
type FieldProps = {
  label: string;
} & TextInputProps;

const Field: React.FC<FieldProps> = ({ label, ...props }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput style={styles.input} {...props} />
  </View>
);

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
    fontSize: 24,
    fontWeight: '700',
    color: '#276749',
    marginBottom: 20,
    textAlign: 'center',
  },
  field: {
    marginBottom: 18,
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
  submitButtonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  submitButton: {
    backgroundColor: '#276749',
    paddingVertical: 12,
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
