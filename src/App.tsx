import computerImageUrl from './assets/computer.png'

function App() {
  return (
    <>
      <header className="sticky left-0 right-0 top-0 w-full bg-green-600 p-3">
        <h1 className="text-center">
          This is a sticky header. Scroll and it will stick!
        </h1>
      </header>

      <main className="mx-auto flex max-w-2xl flex-col items-center">
        {new Array(15).fill('x').map((_, i) => (
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
