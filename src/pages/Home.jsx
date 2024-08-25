import React from "react";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = React.useState();
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://quotes21.p.rapidapi.com/quote`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key":
              "5a9bdc03c4msh5c95cf4ce615767p1f054fjsn5864a9142a6a",
          },
        },
        { withCredentials: true }
      );
      setQuote(response.data);
      console.log(quote.author);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 font-bold">
      <span>{quote.author}</span>
      <span>{quote.quote}</span>
    </div>
  );
};

export default Home;
