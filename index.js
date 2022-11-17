const express = require('express');
const app = express();
const PORT = 3001;

// Conexion a base de datos
const mongoose = require('mongoose');
const user = 'demo_4';
const password = 'xfUMf5nqM7RrIJIB';
const dbname = 'DBVuelos';
const uri = `mongodb+srv://${user}:${password}@vuelos.uea1vov.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
  {useNewUrlParser: true, useUnifiedTopology: true}  
)
.then(()=>console.log('Base de datos ok'))
.catch(e=>console.log(e))


app.use(express.json())

app.get('/', (request, response)=> {
    response.send({'hello': 'world'})
})

app.post('/agregar', (request, response) => {
    console.log(request.body)
    response.send('success')
})

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`)
})