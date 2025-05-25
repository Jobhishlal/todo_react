import TodoItem from "./TudiItem";

function TodoList({ todo, settudu, handledit }) {
  const tuduDone = (id) => {
    settudu(todo.map(item =>
      item.id === id ? { ...item, status: true } : item
    ));
  };

  const removetudu = (id) => {
    settudu(todo.filter(item => item.id !== id));
  };

  return (
    <div className="todo-list">
      {todo.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">⚡</div>
          <h3>Ready to be productive?</h3>
          <p>Add your first task above and let's get started!</p>
        </div>
      ) : (
        todo.map(item => (
          <TodoItem
            key={item.id}
            todo={item}
            toggleDone={tuduDone}
            removeTodo={removetudu}
            handledit={handledit}
          />
        ))
      )}
    </div>
  );
}
export default TodoList;
