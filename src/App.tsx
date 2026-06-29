import { Film , Search} from "lucide-react"
import SplashCursor from "./components/SplashCursor"
import type React from "react"
import { useState } from "react"
function App() {
interface MovieDetails {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: {
        Source: string
        Value: string
    }[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
}

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
  const [userinput, setUserInput] = useState({
    title:''
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUserInput({title:e.target.value})
  }
  const handleClick=async()=>{
    console.log('clicked')
    console.log(userinput) 
    const response = await fetch('http://localhost:3000/getmovie',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(userinput)
    })
    if(response && response.ok){
      const data = await response.json()
      console.log(data)
      setMovieDetails(data)
    }
  }

  const moredetails=[{
    role:"Director",
    desc:movieDetails?.Director
  },{
    role:"Writer",
    desc:movieDetails?.Writer
  },
  {
    role:"Actors",
    desc:movieDetails?.Actors
  },
  {
    role:"Language",
    desc:movieDetails?.Language
  },
  {
    role:"Country",
    desc:movieDetails?.Country
  },
  {
    role:"Awards",
    desc:movieDetails?.Awards
  },
]

const moreratings=[
  {
    role:'MetaScore',
    desc:movieDetails?.Metascore
  },
  {
    role:"imdbRating",
    desc:movieDetails?.imdbRating
  },
  {
    role:"imdbVotes",
    desc:movieDetails?.imdbVotes
  },
  {
    role:"imdbID",
    desc:movieDetails?.imdbID
  },
  {
    role:"Type",
    desc:movieDetails?.Type
  },
  {
    role:"DVD",
    desc:movieDetails?.DVD
  },
  {
    role:"BoxOffice",
    desc:movieDetails?.BoxOffice
  },

]
  return (
    <section className="flex justify-center py-2 ">{/*This is to Center the content container */}
    <div>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <SplashCursor
            SIM_RESOLUTION={32}
            DYE_RESOLUTION={256}
            PRESSURE_ITERATIONS={4}
            DENSITY_DISSIPATION={4}
            VELOCITY_DISSIPATION={3}
            PRESSURE={0.1}
            CURL={2}
            SPLAT_RADIUS={0.15}
            SPLAT_FORCE={2500}
            COLOR_UPDATE_SPEED={8}
            SHADING={false}
            RAINBOW_MODE={false}
            COLOR="#A855F7"
          />

        </div>
          {/*Content Container */}
          <div className="w-full md:w-2xl lg:w-4xl min-h-screen px-3">
            <nav className="fixed w-screen left-0 top-0 py-2 px-5"> 
              <div className="flex items-center">
                <Film size={35} color="#740A03"/>
                <h1 className="font-bold text-2xl md:text-4xl text-white ml-1">MovieScope</h1>
              </div>
            </nav>

            <div className="max-sm:mt-20 text-center text-white flex flex-col items-center h-7/12 justify-center gap-4 mt-20">
              <p className="font-serif bg-gray-900 px-5 py-1 border border-gray-800 rounded-2xl text-xs">YOUR MOVIE DISCOVERY HUB</p>
              <h2 className="font-Lobster text-5xl md:text-6xl">Every movie has <span className="text-[#E3651D]">more to discover.</span></h2>
              <p className="font-serif text-gray-500 md:text-lg">Search any movie and discover its plot, cast, ratings, runtime, and more—all in one place.</p>

              {/*This is for the search Bar */}
              <div className="flex w-full px-3 gap-1 items-center border-2 py-1 rounded-2xl border-orange-300">
                <Search size={30}/>
                <input onChange={handleChange} className="w-full p-2 outline-0" type="text" placeholder="Search a movie  title..."/>
                <button onClick={handleClick} className="cursor-pointer hover:text-xl transition-all ">Search</button>
              </div>
            </div>

            {/*Div where the detailes will show when the user enters title */}
            {movieDetails !==null?(
              <div className="w-full flex flex-col md:grid md:grid-cols-3 border border-orange-300 p-5 gap-5 mt-10 rounded-2xl z-10 bg-[#191919;]/10 backdrop-blur-md">
                <div className="col-span-1">
                  <img src={movieDetails.Poster} alt="movie poster" />
                </div>
                <div className="col-span-2 text-white ">
                  <div className="flex text-xs font-serif justify-center gap-1">
                    <p>{movieDetails.Rated}</p>
                    •
                    <p>{movieDetails.Runtime}</p>
                    •
                    <p>{movieDetails.Year}</p>
                    •
                    <p>{movieDetails.Type}</p>
                  </div>
                  <h1 className="text-center font-Bungee text-4xl">{movieDetails.Title}</h1>
                  <p className="text-center font-serif">{movieDetails.Genre}</p>
                  <p>{movieDetails.Plot}</p>

                  {/*Rating */}
                <div className="flex justify-between mt-10 max-sm:gap-1">
                  {movieDetails.Ratings.map((rating,i)=>(
                    <div key={i} className="border border-gray-500 p-1 lg:p-4 rounded-2xl bg-gray-800">
                      <h2 className="font-semibold text-xs md:text-sm ">{rating.Source}</h2>
                      <p className="max-sm:text-xs">{rating.Value}</p>
                    </div>
                  ))}
                </div>

                  <div className="grid grid-cols-2 font-serif gap-5">

                    <div className="mt-1">
                      {moredetails.map((detail,i)=>(
                        <div key={i}>
                          <h3 className=" font-Bungee text-sm">{detail.role}</h3>
                          <p className="text-xs text-gray-500">{detail.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-1">
                      {moreratings.map((rating,i)=>(
                        <div key={i}>
                          <h3 className=" font-Bungee text-sm">{rating.role}</h3>
                          <p className="text-xs text-gray-500">{rating.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ):null}
          </div>
        </div>
      </section>
  )
}

export default App
