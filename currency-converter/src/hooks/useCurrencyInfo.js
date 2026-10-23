import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate.fun/latest?base=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((error) => console.log(error));
  }, [currency]);

  console.log("data:", data);

  return data;
}

export default useCurrencyInfo;