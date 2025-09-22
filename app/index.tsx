import { Link, useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        {["Login", "About", "Contact Us"].map((item, index) => {
          if (item === "Login") {
            return (
              <Link key={index} href="/login" asChild>
                <TouchableOpacity style={styles.navItem}>
                  <Text style={styles.navText}>{item}</Text>
                </TouchableOpacity>
              </Link>
            );
          }
          else if(item === 'About'){
            return (
              <Link key={index} href="/about" asChild>
                <TouchableOpacity style={styles.navItem}>
                  <Text style={styles.navText}>{item}</Text>
                </TouchableOpacity>
              </Link>
            );
          }
          else if(item === 'Contact Us'){
            return (
              <Link key={index} href="/contactus" asChild>
                <TouchableOpacity style={styles.navItem}>
                  <Text style={styles.navText}>{item}</Text>
                </TouchableOpacity>
              </Link>
            );
          }
          return (
            <TouchableOpacity key={index} style={styles.navItem}>
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Hero Section */}
      <View style={styles.lightgreenBackground}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>🌿 HerbChain</Text>
          <Text style={styles.heroSubtitle}>
            From Farmer → Processor → Lab → Distributor → Retailer → You
          </Text>
        </View>

        {/* App Description */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionHeading}>Why HerbChain? 💎</Text>
          <Text style={styles.descriptionText}>
            HerbChain is a blockchain-powered platform that ensures every herb you
            buy is <Text style={styles.highlight}>100% authentic</Text>, safe, and
            transparently traced from the farmer to your hands. 🌱✨
          </Text>
          <Text style={styles.descriptionText}>
            Whether it’s cultivated by <Text style={styles.highlight}>trusted producers</Text>, 
            tested by labs, or sold by verified retailers, every step is recorded 
            immutably on the blockchain.
          </Text>
          <Text style={styles.descriptionText3D}>
            No fakes. No doubts. Just pure, trusted herbs.
          </Text>
        </View>
              {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText} onPress={() => router.push('/login')}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText} onPress={() => router.push('/signup')}>SIGNUP </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/qrscanner')}>
            <Text style={styles.actionButtonText}>SCAN QR</Text>
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8F7",
  },
  navbar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#1B4332",
    paddingVertical: 15,
    marginTop: 25,
  },
  
  navItem: {
    marginVertical: 5,
    backgroundColor: 'rgba(0,250,200,0.7)',  // light semi-transparent background
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  navText: {
    color: '#cbcacaff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  hero: {
    padding: 25,
    alignItems: "center",
    backgroundColor: "#95D5B2",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1B4332",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#081C15",
    marginTop: 8,
    textAlign: "center",
  },
  descriptionBox: {
    margin: 20,
    padding: 25,
    backgroundColor: "#0dc1e9ff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  descriptionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    marginBottom: 12,
    textAlign: "center",
  },
  highlight: {
    color: "#2D6A4F",
    fontWeight: "700",
  },
  descriptionText3D: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#555",
  textAlign: "center",
  marginTop: 12,
  textShadowColor: "#aaa",
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 2,
  shadowOffset: { width: 1, height: 1 },
  shadowRadius: 3,
},

  ctaBox: {
    alignItems: "center",
    marginVertical: 20,
  },
  ctaButton: {
    backgroundColor: "#1B4332",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },
  ctaButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonSection: {
    flexDirection: 'row',  // stack vertically
    justifyContent: 'space-between', // center vertically if needed
    alignItems: 'center',     // center horizontally
    marginBottom: 20,
    marginHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#45c6d2ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
    width: '29%',         // wider buttons but not full width
    marginVertical: 8,    // vertical spacing between buttons
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  lightgreenBackground: {
    backgroundColor: '#95D5B2', // your light green
    flexGrow: 1,
  },

});
