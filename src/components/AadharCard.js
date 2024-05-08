
import React from 'react';
import { Link } from 'react-router-dom';

const AadharCard = ({ aadharCard }) => {
  return (
    <div className="aadhar-card" style={styles.aadharCard}>
      <h2>Aadhar Card</h2>
      <div className="card-content" style={styles.cardContent}>
        <p>
          <strong>UID:</strong> {aadharCard.uid}
        </p>
        <p>
          <strong>Name:</strong> {aadharCard.fullName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {aadharCard.dateOfBirth}
        </p>
        <p>
          <strong>Address:</strong> {aadharCard.address}
        </p>
        <p>
          <strong>Contact Information:</strong> {aadharCard.contactInfo}
        </p>
      </div>
      <Link to="/">Go Back to Registration</Link>
    </div>
  );
};

const styles = {
  aadharCard: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'left',
    maxWidth: '500px',
    margin: '0 auto',
  },
  cardContent: {
    marginTop: '20px',
  },
};

export default AadharCard;