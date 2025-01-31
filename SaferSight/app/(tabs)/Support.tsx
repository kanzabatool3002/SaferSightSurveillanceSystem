

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.faqItem, isOpen && styles.open]}>
      <TouchableOpacity style={styles.faqQuestion} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.questionText}>{question}</Text>
        <Text style={styles.faqIcon}>{isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.faqAnswer}>{answer}</View>}
    </View>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: (
        <View>
          <Text style={styles.answerText}>- Go to the login page</Text>
          <Text style={styles.answerText}>- Click on "Forgot Password"</Text>
          <Text style={styles.answerText}>- Enter your email address</Text>
          <Text style={styles.answerText}>- Check your email for reset instructions</Text>
          <Text style={styles.answerText}>- Follow the link to create a new password</Text>
        </View>
      ),
    },
    {
      question: 'What are the system requirements for using the software?',
      answer: (
        <View>
          <Text style={styles.answerText}>- Operating System: Windows 10 or macOS 10.14+</Text>
          <Text style={styles.answerText}>- RAM: 4GB minimum (8GB recommended)</Text>
          <Text style={styles.answerText}>- Processor: 2GHz dual-core or better</Text>
          <Text style={styles.answerText}>- Storage: 5GB free disk space (SSD recommended)</Text>
          <Text style={styles.answerText}>- Internet: Broadband connection (5 Mbps or faster)</Text>
        </View>
      ),
    },
    {
      question: 'How do I add a new camera to the system?',
      answer: (
        <View>
          <Text style={styles.answerText}>For wired cameras:</Text>
          <Text style={styles.answerText}>- Connect the camera to your network</Text>
          <Text style={styles.answerText}>- Open the app and go to "Add Device"</Text>
          <Text style={styles.answerText}>- Follow the on-screen instructions</Text>
          <Text style={styles.answerText}>For wireless cameras:</Text>
          <Text style={styles.answerText}>- Power on the camera</Text>
          <Text style={styles.answerText}>- Open the app and select "Add Wireless Device"</Text>
          <Text style={styles.answerText}>- Follow the pairing process</Text>
        </View>
      ),
    },
    {
      question: 'Why is my camera offline?',
      answer: (
        <View>
          <Text style={styles.answerText}>- Power issue: Ensure the camera is properly plugged in</Text>
          <Text style={styles.answerText}>- Network problem: Check if your Wi-Fi is working</Text>
          <Text style={styles.answerText}>- Distance from router: Try moving the camera closer to the router</Text>
          <Text style={styles.answerText}>- Outdated firmware: Check for and install any available updates</Text>
          <Text style={styles.answerText}>- If issues persist, try restarting both the camera and your router</Text>
        </View>
      ),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.faqContainer}>
        <Text style={styles.header}>Frequently Asked Questions</Text>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        <Text style={styles.subHeader}>System Requirements</Text>
        <View style={styles.requirementsList}>
          <Text style={styles.answerText}>- Operating System: Windows 10 or macOS 10.14+</Text>
          <Text style={styles.answerText}>- RAM: 4GB minimum (8GB recommended)</Text>
          <Text style={styles.answerText}>- Processor: 2GHz dual-core or better</Text>
          <Text style={styles.answerText}>- Storage: 5GB free disk space (SSD recommended)</Text>
          <Text style={styles.answerText}>- Graphics: Dedicated graphics card recommended for optimal performance</Text>
          <Text style={styles.answerText}>- Internet: Broadband connection (5 Mbps or faster)</Text>
        </View>

        <Text style={styles.subHeader}>Installation Guide</Text>
        <Text style={styles.installationText}>
          To install your CCTV camera on the web app, ensure you have a stable internet connection. Create a new camera profile, providing essential details like camera name, IP address, and login credentials.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(28, 30, 48, 1.00)',
    paddingHorizontal: 10,
  },
  faqContainer: {
    padding: 20,
    backgroundColor: 'rgba(28, 30, 48, 1.00)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginVertical: 15,
  },
  faqItem: {
    backgroundColor: 'rgba(39, 41, 61, 1.00)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  faqIcon: {
    fontSize: 18,
    color: 'white',
  },
  faqAnswer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  answerText: {
    color: 'white',
  },
  requirementsList: {
    marginLeft: 10,
  },
  installationText: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
});

export default FAQ;
