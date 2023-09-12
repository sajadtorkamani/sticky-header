import computerImageUrl from './assets/computer.png'

function App() {
  return (
    <>
      <header className="bg-green-600 p-3 sticky top-0 left-0 right-0 w-full">
        <h1>This is the header</h1>
      </header>

      <main className="mx-auto max-w-2xl">
        {new Array(10).fill('x').map((_, i) => (
          <img
            src={computerImageUrl}
            alt="Computer"
            className="mb-4"
            style={{ maxWidth: '400px' }}
          />
        ))}
      </main>
    </>
  )
}

export default App
