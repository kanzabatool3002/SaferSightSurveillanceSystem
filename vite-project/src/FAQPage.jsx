import React, { useState } from 'react';
import './FAQPage.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: (
        <ol>
          <li>Go to the login page</li>
          <li>Click on "Forgot Password"</li>
          <li>Enter your email address</li>
          <li>Check your email for reset instructions</li>
          <li>Follow the link to create a new password</li>
        </ol>
      )
    },
    {
      question: "What are the system requirements for using the software?",
      answer: (
        <ul>
          <li>Operating System: Windows 10 or macOS 10.14+</li>
          <li>RAM: 4GB minimum (8GB recommended)</li>
          <li>Processor: 2GHz dual-core or better</li>
          <li>Storage: 5GB free disk space (SSD recommended)</li>
          <li>Internet: Broadband connection (5 Mbps or faster)</li>
        </ul>
      )
    },
    {
      question: "How do I add a new camera to the system?",
      answer: (
        <div>
          <p>For wired cameras:</p>
          <ol>
            <li>Connect the camera to your network</li>
            <li>Open the app and go to "Add Device"</li>
            <li>Follow the on-screen instructions</li>
          </ol>
          <p>For wireless cameras:</p>
          <ol>
            <li>Power on the camera</li>
            <li>Open the app and select "Add Wireless Device"</li>
            <li>Follow the pairing process</li>
          </ol>
        </div>
      )
    },
    {
      question: "Why is my camera offline?",
      answer: (
        <ul>
          <li>Power issue: Ensure the camera is properly plugged in</li>
          <li>Network problem: Check if your Wi-Fi is working</li>
          <li>Distance from router: Try moving the camera closer to the router</li>
          <li>Outdated firmware: Check for and install any available updates</li>
          <li>If issues persist, try restarting both the camera and your router</li>
        </ul>
      )
    }
  ];

  return (
    <div className="FAQ-page">
      {/* <Sidebar />
      <FAQHeader /> */}
      <div>
        <div className="faq-container">
          {/* <h1>Frequently Asked Questions</h1> */}
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}

          <h2>System Requirements</h2>
          <ul>
            <li>Operating System: Windows 10 or macOS 10.14+</li>
            <li>RAM: 4GB minimum (8GB recommended)</li>
            <li>Processor: 2GHz dual-core or better</li>
            <li>Storage: 5GB free disk space (SSD recommended)</li>
            <li>Graphics: Dedicated graphics card recommended for optimal performance</li>
            <li>Internet: Broadband connection (5 Mbps or faster)</li>
          </ul>

          <h2>Installation Guide</h2>
          <p>
            To install your CCTV camera on the web app, ensure you have a stable internet connection. Create a new camera profile, providing essential details like camera name, IP address, and login credentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;