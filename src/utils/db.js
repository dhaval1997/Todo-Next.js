import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database");
    return mongoose;
  } catch (error) {
    console.error("Connection failed!", error);
  }
};


export default connect;
