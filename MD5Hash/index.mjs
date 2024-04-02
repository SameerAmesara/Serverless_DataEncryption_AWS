import { createHash } from "crypto";
import axios from "axios";

export async function handler(event) {
  console.log("Started MD5...");
  const course_uri = event.course_uri;
  const input = event.value;

  const hashedData = createHash("md5").update(input).digest("hex");

  const dataBody = {
    banner: "B00961209",
    result: hashedData,
    arn: "arn:aws:lambda:us-east-1:637423241254:function:MD5HashFunction",
    action: "md5",
    value: input,
  };

  console.log("URL:", course_uri);
  console.log("Request body:", dataBody);

  try {
    const response = await axios.post(course_uri, dataBody);
    console.log("Response from MD5:", response);

    return {
      statusCode: 200,
      body: "Success md5",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error " + error }),
    };
  }
}
