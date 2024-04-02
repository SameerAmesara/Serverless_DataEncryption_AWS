import { createHash } from "crypto";
import axios from "axios";

export async function handler(event) {
  console.log("Started SHA256");
  const course_uri = event.course_uri;
  const input = event.value;

  const hashedData = createHash("sha256").update(input).digest("hex");

  const dataBody = {
    banner: "B00961209",
    result: hashedData,
    arn: "arn:aws:lambda:us-east-1:637423241254:function:SHA256HashFunction",
    action: "sha256",
    value: input,
  };

  console.log("URL:", course_uri);
  console.log("Request body:", dataBody);

  try {
    const response = await axios.post(course_uri, dataBody);
    console.log("Response from SHA256:", response);

    return {
      statusCode: 200,
      body: "Success sha256",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error " + error }),
    };
  }
}
