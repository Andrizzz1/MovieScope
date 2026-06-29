import express, { urlencoded } from 'express'
import cors from 'cors'
import axios from 'axios'
import 'dotenv/config'
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))


const OMBN = process.env.OMBN_API
app.post('/getmovie',async (req,res)=>{
    const {title} = req.body
    try{
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMBN}&t=${title}`)
        res.json(response.data)
    }catch(err:unknown){
        if(axios.isAxiosError(err)){
            console.log(err)
            res.json({error: err})
        }
    }

})


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})