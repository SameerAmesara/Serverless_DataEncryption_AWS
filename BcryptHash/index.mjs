import bcrypt from "bcryptjs";
import axios from "axios";

export async function handler(event) {
  console.log("Started BCrypt...");
  const course_uri = event.course_uri;
  const action = event.action;
  const input = event.value;
  const saltRounds = 12;

  // Perform bcrypt hashing
  try {
    console.log("Hashing Started...");
    const hashedData = await bcrypt.hash(input, saltRounds);
    console.log("Hashing Completed...");

    const dataBody = {
      banner: "B00961209",
      result: hashedData,
      arn: "arn:aws:lambda:us-east-1:637423241254:function:BcryptHashFunction",
      action: action,
      value: input,
    };

    console.log("URL:", course_uri);
    console.log("Request body:", dataBody);

    const response = await axios.post(course_uri, dataBody);
    console.log("Response from bcrypt:", response);

    return {
      statusCode: 200,
      body: "Success bcrypt",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error " + error }),
    };
  }
}
