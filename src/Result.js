import React from 'react';

const Result = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Booking Successful!</h1>
      <p style={styles.message}>Thank you for booking with us.</p>
      {/* Add more content or components here */}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '5px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
    color: '#777',
  },
};

export default Result;
