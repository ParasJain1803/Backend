// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error(error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .cathch((error) => {
    console.log("MongoDB connection failed !!! ", error);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on('error', (error)=> {
        console.error(error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
