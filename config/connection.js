const { connect, connection } = require('mongoose');

const connectionString = 
process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db-name';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exprots = connection;