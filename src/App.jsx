import React, { useState } from 'react'
import TodoList from './assets/TodoList'


function App() {
  const [tudu, settudu] = useState([]);
  const [input, setinput] = useState('');
  const [editId, seteditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  const addtudu = () => {

    const trimmedInput = input.trim()
    if(!trimmedInput){
      setErrorMessage('please enter valid todo')
      setTimeout(()=>{
        setErrorMessage('')
      },1500)
      return
    }

    

    const duplicate = tudu.some(item=>
      item.text.trim().toLowerCase()===trimmedInput.toLowerCase() && item.id!==editId
    )


      const isValidInput = /^[A-Za-z0-9\s]{3,}$/.test(trimmedInput);

      if(!isValidInput){
        setErrorMessage('please enter valid number todo')

        setTimeout(()=>{
          setErrorMessage('')

        },1500)
        return
      }
    if (duplicate) {
        setErrorMessage('Todo already exists.');
      setTimeout(()=>{
        setErrorMessage('')
      },1500)
  
   return

    }
    setErrorMessage('');

      if (editId) {
        settudu(tudu.map(item =>
          item.id === editId ? { ...item, text: input } : item
        ));
        seteditId(null);
      } else {
        settudu([...tudu, { id: Date.now(), text: input, status: false }]);
      }
      setinput('');
    
  };

  const handledit = (id) => {
    const editItem = tudu.find(item => item.id === id);
    setinput(editItem.text);
    seteditId(id);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addtudu();
    }
  };

  const completedCount = tudu.filter(item => item.status).length;
  const totalCount = tudu.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          background: #0a0a0a;
          // background-image: 
          //   radial-gradient(circle at 25% 25%,rgb(35, 7, 216) 0%, transparent 50%),
          //   radial-gradient(circle at 75% 75%,rgb(51, 0, 255) 0%, transparent 50%);
          background-size: 800px 800px;
          background-position: 0 0, 400px 400px;
          min-height: 100vh;
          padding: 20px;
          animation: backgroundShift 20s ease-in-out infinite;
        }

        @keyframes backgroundShift {
          0%, 100% { background-position: 0 0, 400px 400px; }
          50% { background-position: 200px 200px, 600px 600px; }
        }

        .app-container {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(20px);
          // border: 1px solid #00ff41;
          border-radius: 20px;
          // box-shadow: 
          //   0 0 50px rgba(0, 255, 65, 0.3),
          //   inset 0 1px 0 rgba(0, 255, 65, 0.1);
          overflow: hidden;
          animation: glowPulse 3s ease-in-out infinite alternate;
        }

        // @keyframes glowPulse {
        //   0% { box-shadow: 0 0 50px rgba(0, 255, 65, 0.3), inset 0 1px 0 rgba(0, 255, 65, 0.1); }
        //   100% { box-shadow: 0 0 80px rgba(0, 255, 65, 0.5), inset 0 1px 0 rgba(0, 255, 65, 0.2); }
        // }

        .app-header {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          // border-bottom: 2px solid #00ff41;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .app-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          // background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
          // animation: scanLine 3s linear infinite;
        }

        @keyframes scanLine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .app-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #00ff41;
          // text-shadow: 
          //   0 0 10px #00ff41,
          //   0 0 20px #00ff41,
          //   0 0 30px #00ff41;
          text-transform: uppercase;
          letter-spacing: 3px;
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        // @keyframes textGlow {
        //   0% { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41; }
        //   100% { text-shadow: 0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41; }
        // }

        .app-subtitle {
          font-size: 1.2rem;
          color: #888;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 25px;
          position: relative;
          z-index: 1;
        }

        .stat {
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid #00ff41;
          padding: 12px 20px;
          border-radius: 25px;
          font-size: 1rem;
          color: #00ff41;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
          transition: all 0.3s ease;
        }

        .stat:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
          transform: translateY(-2px);
        }

        .input-section {
          padding: 40px 30px;
          background: #111111;
          border-bottom: 1px solid #333;
        }

        .input-container {
          display: flex;
          gap: 15px;
          margin-bottom: 10px;
        }

        .task-input {
          flex: 1;
          padding: 18px 25px;
          background: #1a1a1a;
          border: 2px solid #333;
          border-radius: 12px;
          font-size: 1.1rem;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.3s ease;
          outline: none;
        }

        .task-input::placeholder {
          color: #666;
          font-style: italic;
        }

        .task-input:focus {
          border-color: #00ff41;
          background: #222;
          box-shadow: 
            0 0 0 3px rgba(0, 255, 65, 0.1),
            0 0 20px rgba(0, 255, 65, 0.3);
          color: #00ff41;
        }

        .add-btn {
          padding: 18px 35px;
          background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          min-width: 140px;
          box-shadow: 
            0 0 20px rgba(0, 255, 65, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .add-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .add-btn:hover::before {
          left: 100%;
        }

        .add-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 10px 30px rgba(0, 255, 65, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .add-btn:active {
          transform: translateY(-1px) scale(1.02);
        }

        .todo-list {
          padding: 20px 30px 40px;
          max-height: 500px;
          overflow-y: auto;
          background: #0f0f0f;
        }

        .todo-list::-webkit-scrollbar {
          width: 8px;
        }

        .todo-list::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 4px;
        }

        .todo-list::-webkit-scrollbar-thumb {
          background: #00ff41;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        .todo-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border: 1px solid #333;
          border-radius: 15px;
          padding: 20px 25px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
          animation: slideInLeft 0.5s ease-out;
          position: relative;
          overflow: hidden;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .todo-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background:rgb(13, 0, 255);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .todo-item:hover {
          transform: translateX(10px);
          border-color: #00ff41;
          box-shadow: 0 10px 30px rgba(0, 255, 65, 0.2);
        }

        .todo-item:hover::before {
          transform: scaleY(1);
        }

        .todo-content {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 15px;
        }

        .todo-checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid #00ff41;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          transition: all 0.3s ease;
        }

        .check-mark {
          color: #00ff41;
          font-weight: bold;
          font-size: 1.2rem;
          animation: checkPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes checkPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        .todo-text {
          font-size: 1.1rem;
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease;
          font-family: 'JetBrains Mono', monospace;
        }

        .todo-text.completed {
          text-decoration: line-through;
          color: #00ff41;
          opacity: 0.7;
        }

        .todo-actions {
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 10px;
          border: 1px solid #333;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        .btn-edit {
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          border-color: #ffc107;
        }

        .btn-edit:hover {
          background: rgba(255, 193, 7, 0.2);
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
          transform: scale(1.1) rotate(5deg);
        }

        .btn-complete {
          background: rgba(0, 255, 65, 0.1);
          color: #00ff41;
          border-color:rgb(51, 9, 176);
        }

        .btn-complete:hover:not(.disabled) {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
          transform: scale(1.1);
        }

        .btn-complete.disabled {
          background: rgba(100, 100, 100, 0.1);
          color: #666;
          border-color: #666;
          cursor: not-allowed;
          opacity: 0.5;
        }

        .btn-delete {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border-color: #dc3545;
        }

        .btn-delete:hover {
          background: rgba(220, 53, 69, 0.2);
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.4);
          transform: scale(1.1) rotate(-5deg);
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          color:rgb(68, 0, 255);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        .empty-state h3 {
          color: #00ff41;
          font-size: 1.5rem;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .empty-state p {
          font-size: 1.1rem;
          color: #888;
        }

        @media (max-width: 768px) {
          .app-container {
            margin: 10px;
            border-radius: 15px;
          }
          
          .input-container {
            flex-direction: column;
          }
          
          .add-btn {
            width: 100%;
          }
          
          .app-title {
            font-size: 2.5rem;
          }
          
          .stats {
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }
          
          .todo-item {
            padding: 15px 20px;
          }
          
          .todo-actions {
            gap: 8px;
          }
          
          .btn {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>

      <div className="app-container">
        
        <div className="app-header">
          <h1 className="app-title"> TODO HUB</h1>
          <p className="app-subtitle">High Performance Task Manager</p>
                {errorMessage && (
            <p style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</p>
)}
          {totalCount > 0 && (
            <div className="stats">
              <div className="stat">
                Total: {totalCount}
              </div>
              <div className="stat">
                Done: {completedCount}
              </div>
              <div className="stat">
                Left: {totalCount - completedCount}
              </div>
            </div>
          )}
        </div>

        <div className="input-section">
          <div className="input-container">
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your mission..."
              className="task-input"
            />
            <button onClick={addtudu} className="add-btn">
              {editId ? ' UPDATE' : ' ADD'}
            </button>
          </div>
        </div>

        <TodoList todo={tudu} settudu={settudu} handledit={handledit} />
  
      </div>
    </>
  );
}


export default App