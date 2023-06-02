import axios from "axios";
import detail from "../model/Store.js";
export const fetch = async (req, res) => {
  try {
    const result = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const array = Object.values(result.data);
    const filter = array.slice(0, 10);
    const newdetail = new detail({
      currencies: filter,
      id: 1,
    });
    const document = await detail.find({ id: "1" });
    if (document[0]) {
      const update = await detail.updateOne(
        { id: "1" },
        { $set: { currencies: filter } }
      );
      const finaldoc = await detail.find({ id: "1" });
      console.log(finaldoc);
      res.json(finaldoc);
    } else {
      const savedcurrencies = await newdetail.save();
      res.json(savedcurrencies);
    }
  } catch (err) {
    console.log(err);
  }
};
