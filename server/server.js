
const express = require('express');
const app = express();
const registrationRoutes = require('./routes/registrationRoutes');

app.use(express.json());
app.use('/api', registrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
