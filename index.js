const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response)=> {
    response.send({'hello': 'world'})
})

app.post('/agregar', (request, response) => {
    console.log(request.body)
    response.send('success')
})

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`)
})