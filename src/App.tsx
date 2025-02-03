import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-red-500">Prueba Tailwind</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Botón Tailwind
        </button>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Botón Tailwind
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <Button>Click me</Button>
        </div>

      </div>

    </>
  )
}

export default App
