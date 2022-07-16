import "./App.css"
import { birds } from "./Birds"

function App() {
  return (
    <div className='flex justify-center items-center flex-col bg-zinc-900 cont'>
      {birds.map((bird) => (
        <div key={bird.id} className='relative'>
          <img
            src={`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${bird.val}`}
            alt={`bird n:${bird.val}`}
            className='w-[250px]'
          ></img>
          <div className='flex justify-center items-center'>
            <span className='absolute bottom-4 font-extralight text-white text-sm'>
              {bird.val}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
