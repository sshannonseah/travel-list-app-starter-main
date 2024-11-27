import React, { useState, useEffect } from 'react';

function Logo({ travelDate }) {
  const [daysLeft, setDaysLeft] = useState(0);

  // Function to calculate days left until the travel date
  function calculateDaysLeft() {
    const currentDate = new Date();
    const travel = new Date(travelDate);
    const timeDiff = travel - currentDate;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000); // Update countdown every second
    return () => clearInterval(interval); 
  }, [travelDate]);

  return (
    <div>
      <h1>My Travel List</h1>
      <h2>How many days left: {daysLeft} days</h2>
    </div>
  );
}

export default Logo;