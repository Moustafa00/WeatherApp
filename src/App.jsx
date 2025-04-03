import './App.css'
import Weather from './weather'


function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-200 mb-2">
          Weather App
        </h1>
        <p className="text-sky-600 dark:text-sky-400">
          Enter a city to get current weather conditions
        </p>
      </header>

      <div className="w-full max-w-md ">
        <Weather />
      </div>

    </div>
  )
}

export default App
