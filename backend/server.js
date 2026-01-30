const app = require('./src/app');
const connectDB = require('./src/config/database');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
