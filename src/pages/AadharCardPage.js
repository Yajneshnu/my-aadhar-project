// import React from 'react';
// import AadharCard from '../components/AadharCard';

// const AadharCardPage = () => {
//   const aadharCard = JSON.parse(localStorage.getItem('aadharCard'));

//   return (
//     <div>
//       <h1>Your Aadhar Card</h1>
//       {aadharCard ? <AadharCard aadharCard={aadharCard} /> : <p>No Aadhar card found.</p>}
//     </div>
//   );
// };

// export default AadharCardPage;

import React, { useEffect, useState } from 'react';
import AadharCard from '../components/AadharCard';

const AadharCardPage = () => {
  const [aadharCard, setAadharCard] = useState(null);

  useEffect(() => {
    const aadharCardData = JSON.parse(localStorage.getItem('aadharCard'));
    setAadharCard(aadharCardData);
  }, []);

  return (
    <div>
      <h1>Your Aadhar Card</h1>
      {aadharCard ? (
        <AadharCard aadharCard={aadharCard} />
      ) : (
        <p>No Aadhar card found.</p>
      )}
    </div>
  );
};

export default AadharCardPage;