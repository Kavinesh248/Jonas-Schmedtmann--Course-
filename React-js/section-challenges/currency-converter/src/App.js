import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState("");
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );

        if (!res.ok)
          throw new Error(
            "Something happened! Wait for some time and try again later.."
          );

        const data = await res.json();
        const { [toCur]: value } = data.rates;
        setOutput(value);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (fromCur === toCur) return setOutput(amount);
    fetchCurrency();
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        <p>Converting...</p>
      ) : (
        <p>
          {output} {toCur}
        </p>
      )}
    </div>
  );
}
