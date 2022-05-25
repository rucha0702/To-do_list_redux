import TodoList from './TodoList';

function App() {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className='App d-flex justify-content-center bg-success'
    >
      <div
        style={{ position: 'fixed', top: 0 }}
        className='text-center h1 w-100 text-light'
      >
        TODO List
      </div>
      <div
        style={{ Height: '100%' }}
        className='container d-flex w-50 justify-content-center bg-light mx-5 my-5'
      >
        <TodoList />
      </div>
    </div>
  );
}

export default App;
