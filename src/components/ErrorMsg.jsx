function ErrorMsg({ todoItems }) {
  return <>{todoItems.length === 0 && <h3>No todos</h3>}</>;
}

export default ErrorMsg;
