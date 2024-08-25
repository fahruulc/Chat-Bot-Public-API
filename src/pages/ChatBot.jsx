import { useState } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatBot = () => {
  const [data, setData] = useState([]);

  const fetchChat = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ai-api-textgen.p.rapidapi.com/completions",
        formatDataChat,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key":
              "5a9bdc03c4msh5c95cf4ce615767p1f054fjsn5864a9142a6a",
          },
        },
        { withCredentias: true }
      );
      setData([...data, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const [initChar, setInitChar] = useState("");
  const [username, setUsername] = useState("");
  const [charName, setCharName] = useState("");
  const [text, setText] = useState("");

  const formatDataChat = {
    init_character: initChar,
    user_name: username,
    character_name: charName,
    text: text,
  };

  return (
    <div className="flex bg-zinc-900 text-white flex-row gap-3 items-start justify-start w-full h-screen font-Poppins px-[2rem] py-[1rem]">
      <div>
        <form
          onSubmit={fetchChat}
          className="flex flex-col gap-2 p-3 rounded-md bg-zinc-800"
        >
          <span className="text-2xl font-bold text-center">Message</span>
          <div className="flex flex-col gap-1">
            <span>Initial Character</span>
            <input
              type="text"
              onChange={(e) => setInitChar(e.target.value)}
              className="border border-gray-500 rounded-md w-[300px] h-[35px] text-black p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>Username</span>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-500 rounded-md w-[300px] h-[35px] text-black p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>Char Name</span>
            <input
              type="text"
              onChange={(e) => setCharName(e.target.value)}
              className="border border-gray-500 rounded-md w-[300px] h-[35px] text-black p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span>Text Chat</span>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              className="border border-gray-500 rounded-md w-[300px] h-[35px] text-black p-2"
            />
          </div>
          <button
            type="submit"
            className="px-2 py-1 font-bold text-green-800 capitalize bg-green-300 rounded-sm"
          >
            send
          </button>
        </form>
      </div>
      <div className="flex flex-col w-full h-full gap-2 p-3 overflow-y-auto rounded-md bg-zinc-800">
        <span className="text-3xl font-bold">ChatBot Iseng</span>
        {data.map((chat, index) => (
          <div key={index} className="flex flex-row gap-1">
            <AccountCircleIcon />
            <div className="p-2 rounded-md bg-zinc-700">
              <p>{chat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBot;
