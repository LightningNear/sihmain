import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace('/')}
      >
        <Ionicons name="arrow-back" size={24} color="#276749" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={{ fontSize: 22 }}>🌿 </Text>
          <Text style={styles.titleText}>HerbChain</Text>
        </Text>
        <Text style={styles.subTitle}>
          From Farmer → Processor → Lab → Distributor → Retailer → You
        </Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.boldHeadline}>Why HerbChain? 💎</Text>
        <Text style={styles.paragraph}>
          HerbChain leverages blockchain technology to ensure the utmost safety and
          transparency for every product. Each transaction and process involved in
          bringing a herb from the producer to the consumer is immutably recorded on
          the blockchain, creating a secure and tamper-proof digital ledger.
        </Text>
        <Text style={styles.paragraph}>
          All stakeholders—from farmers to retailers—interact with the platform to
          log data that cannot be altered retroactively, thus ensuring authenticity
          and traceability. The consumer needs only to scan a simple QR code, which
          reveals a complete history of the product, including its provenance,
          testing status, and shipment details.
        </Text>
        <Text style={styles.paragraph}>
          This means the consumer has transparent access to the verified origin and
          handling of each herb, eliminating doubts about quality or fraud. This
          revolutionary approach redefines trust in the supply chain, putting power
          fully in the hands of the end user.
        </Text>
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>No fakes. No doubts. Just pure, trusted herbs.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9d5b1',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#276749',
    fontSize: 18,
    marginLeft: 6,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    flexDirection: 'row',
    fontWeight: '700',
    fontSize: 28,
    color: '#214c33',
    textShadowColor: '#2e6b3d66',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  titleText: {
    fontWeight: '900',
    fontSize: 28,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#214c33',
    fontWeight: '400',
  },
  contentBox: {
    backgroundColor: '#20a8e0',
    borderRadius: 12,
    padding: 20,
  },
  boldHeadline: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
    color: '#0a316f',
  },
  paragraph: {
    fontSize: 15,
    color: '#183853',
    marginBottom: 14,
    fontWeight: '500',
  },
  highlightBold: {
    fontWeight: 'bold',
  },
  underlineBold: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  highlightBox: {
    backgroundColor: '#206fa0',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#00000088',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginTop: 10,
  },
  highlightText: {
    fontWeight: '700',
    color: '#c8edf4',
    textAlign: 'center',
  },
});
