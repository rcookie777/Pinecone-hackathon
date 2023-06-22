import { useState } from "react";
import { ChatMessage } from "./ChatMessage";

const ChatBox = () => {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');
  const chatMessages = [
    {
      role: "assistant",
      content: "Hello! How can I assist you?",
    },
    {
      role: "user",
      content: "I need help with some markdown formatting.",
    },
    {
      role: "assistant",
      content: "Sure! What specific formatting do you need help with?",
    },
    {
      role: "user",
      content: "I want to create a bulleted list.",
    },
    {
      role: "assistant",
      content: "- Foo",
    },
    {
      role: "user",
      content: "Great! How about creating a hyperlink?",
    },
    {
      role: "assistant",
      content: "[OpenAI](https://www.openai.com)",
    },
    {
      role: "user",
      content: "Can I emphasize text in markdown?",
    },
    {
      role: "assistant",
      content: "Sure! You can use *italic* or **bold** text.",
    },
  ];
  

  
  return (
    <>
      {/* Input Fields */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Chat with your CSV
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5 chat-messages-container">
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} message={chat} />
          ))}
        </div>
        <div className="flex p-6.5">
          <input
            type="text"
            placeholder={state === "idle" ? "Type your message..." : "..."}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow rounded-lg border-l border-t border-b border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {state === "idle" && (
            <button
              className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10 rounded-r-lg"
              type="submit"
            >
              Send
            </button>
          )}
        </div>
      </div>
    </>
  );
};


export default ChatBox;
