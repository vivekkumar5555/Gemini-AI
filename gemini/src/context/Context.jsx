import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentprompt, setRecentprompt] = useState("");
  const [prevprompt, setPrevprompt] = useState([]);
  const [showresult, setShowresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultdata, setResultdata] = useState("");

  const onSent = async (prompt) => {
    setResultdata("");
    setLoading(true);
    setShowresult(true);
    setRecentprompt(input);
    setPrevprompt((prev) => [...prev, input]);
    const response = await runChat(input);
    const responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newRes = newResponse.split("*").join("</br>");
    setResultdata(newRes);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recentprompt,
    onSent,
    showresult,
    loading,
    resultdata,
    prevprompt,
  };
  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};
export default ContextProvider;
