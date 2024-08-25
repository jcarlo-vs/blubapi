import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// api/hello.js
export default async function handler(req, res) {
  try {
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.X_CMC_PRO_API_KEY,
      },
    };
    const api =
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=24478,29150,29743";

    const { data } = await axios.get(api, options);
    res.status(200).json({ message: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
