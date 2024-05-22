import './App.css'
import {requestToGroqai} from "./utils/groq"
import {useState} from "react"
import {Light as SyntaxHighlight} from "react-syntax-highlighter"
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
function App() {
  const [data, setData] = useState(null);
  const handleSubmit = async () => {
    const ai = await requestToGroqai(content.value);
    setData(ai)
  };
  return (
    <main className="max-w-xl w-full mx-auto flex flex-col min-h-[80vh] justify-center items-center">
      <h1 className="text-4xl text-red-500">Ask me about anything</h1>
      <form className="w-full flex flex-col gap-4 py-4">
        <input
          placeholder="Enter your message"
          className="py-2 px-4 text-md rounded-md"
          id="content"
          type="text"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
      </form>
      <div className="max-w-xl w-full mx-auto">
        {data ? (
          <SyntaxHighlight language="swift" style={darcula} wrapLongLines={true}>
          {data}
        </SyntaxHighlight>
        ) : null}
      </div>
    </main>
  );
}

 

export default App
