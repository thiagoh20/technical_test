const PORT = process.env.PORT || 8080;

const MONGO_URI =
  process.env.MONGO_URI || "mongodb+srv://thiago:iJeBr0n9q1BhnXOM@clasedb.8fn5zob.mongodb.net/?retryWrites=true&w=majority";
const MONGO_OPTIONS = {};


module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  
};
