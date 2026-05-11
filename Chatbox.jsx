import React,{useState} from 'react'


export default function Chatbox() {
    const [message, setMessage] = useState("");
    const [messages,setMessages] = useState([]);

    const sendMessage = ()=> {
        if (message.trim() === "") return;

        setMessages
        ([...messages, message]);
        setMessage("");
    };

    return (
        <div className='container'>
            <div className='chat-container'>
                <h2>Mini Chat Application</h2>
            </div>

            <div className='input-box'>

                
                <input  type="text"
                placeholder='Type your messages...'
                value={message}
                onChange={(e)=> setMessage(e.target.value)}/>

                <button onClick={sendMessage}>Send</button>
            </div>

            <div className='message-box'>
                {messages.map((msg, index) => (
                    <p key={index} className='messages'>{msg}</p>
                ))}
            </div>
        </div>
    )
}
