import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
// api/hello.js
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allows requests from any origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  try {
    const options = {
      headers: {
        "x-chain": "sui",
        "X-API-KEY": process.env.X_API_KEY,
      },
    };
    const api =
      "https://api.dexscreener.com/latest/dex/tokens/0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB";

    const { data } = await axios.get(api, options);
    res.status(200).json({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
