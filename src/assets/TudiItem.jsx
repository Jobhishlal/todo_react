// function TodoItem({ todo, toggleDone, removeTodo, handledit }) {
//   return (
//   <li
//     style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       border: '1px solid #ccc',
//       padding: '8px 12px',
//       marginBottom: '8px',
//       borderRadius: '4px',
//       backgroundColor: '#fff',
//       width: '100%',
//       maxWidth: '400px',
//       boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//     }}
//   >
//     <span
//       style={{
//         flexGrow: 1,
//         fontSize: '1rem',
//         textDecoration: todo.status ? 'line-through' : 'none',
//         color: todo.status ? '#16a34a' : '#333', // Green for completed, dark for pending
//       }}
//     >
//       {todo.text}
//       {todo.status && (
//         <span
//           style={{
//             marginLeft: '8px',
//             color: '#16a34a',
//             fontSize: '1rem',
//           }}
//         >
//           ✔
//         </span>
//       )}{' '}
//       {/* tick */}
//     </span>

//     <button
//       onClick={() => handledit(todo.id)}
//       style={{
//         marginRight: '8px',
//         padding: '4px 8px',
//         borderRadius: '4px',
//         backgroundColor: '#e0e0e0',
//         color: '#333',
//         border: 'none',
//         fontSize: '0.9rem',
//         cursor: 'pointer',
//         transition: 'background-color 0.2s ease',
//       }}
//       onMouseOver={(e) => (e.target.style.backgroundColor = '#d0d0d0')}
//       onMouseOut={(e) => (e.target.style.backgroundColor = '#e0e0e0')}
//     >
//       Edit
//     </button>

//     <button
//       onClick={() => removeTodo(todo.id)}
//       style={{
//         padding: '4px 8px',
//         borderRadius: '4px',
//         backgroundColor: 'transparent',
//         color: '#ef4444', // Red color for Delete (better contrast than green background)
//         border: 'none',
//         fontSize: '0.9rem',
//         cursor: 'pointer',
//         transition: 'background-color 0.2s ease',
//       }}
//       onMouseOver={(e) => (e.target.style.backgroundColor = '#ffe6e6')}
//       onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
//     >
//       Delete
//     </button>

//     <button
//       onClick={() => !todo.status && toggleDone(todo.id)}
//       disabled={todo.status}
//       style={{
//         marginRight: '8px',
//         padding: '4px 8px',
//         borderRadius: '4px',
//         backgroundColor: todo.status ? '#f0f0f0' : '#e0e0e0',
//         color: todo.status ? '#999' : '#333',
//         border: 'none',
//         fontSize: '0.9rem',
//         cursor: todo.status ? 'not-allowed' : 'pointer',
//         transition: 'background-color 0.2s ease',
//       }}
//       onMouseOver={(e) =>
//         !todo.status && (e.target.style.backgroundColor = '#d0d0d0')
//       }
//       onMouseOut={(e) =>
//         !todo.status && (e.target.style.backgroundColor = '#e0e0e0')
//       }
//     >
//       Complete
//     </button>
//   </li>
// );
// }

function TodoItem({ todo, toggleDone, removeTodo, handledit }) {
  return (
    <div className="todo-item">
      <div className="todo-content">
        <div className="todo-checkbox">
          {todo.status && <span className="check-mark">✓</span>}
        </div>
        <span className={`todo-text ${todo.status ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      
      <div className="todo-actions">
        <button 
          onClick={() => handledit(todo.id)}
          className="btn btn-edit"
          title="Edit task"
        >
          <span className="btn-icon">✏️</span>
        </button>
        
        <button
          onClick={() => !todo.status && toggleDone(todo.id)}
          disabled={todo.status}
          className={`btn btn-complete ${todo.status ? 'disabled' : ''}`}
          title="Mark as complete"
        >
          <span className="btn-icon">✓</span>
        </button>
        
        <button
          onClick={() => removeTodo(todo.id)}
          className="btn btn-delete"
          title="Delete task"
        >
          <span className="btn-icon">×</span>
        </button>
      </div>
    </div>
  );
}


export default TodoItem;
                   
