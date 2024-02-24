import './App.css'

function App() {

  return (
    <div className=" h-[100vh] bg-slate-200 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className='text-5xl font-bold'>Speech to Text Converter</h2>
        <br />
        <p className='text-lg font-semibold'>A react hook that convers speech from the microphone to text and makes it available to your React components.</p>
      </div>

      <div className=" bg-white h-[400px] w-[600px] rounded flex items-end justify-around rounded-lg">
        <div className='pb-10 flex gap-10'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Copy
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Listening
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Stop Listening
          </button>
        </div>
      </div>




       

    </div>
  )
}

export default App
