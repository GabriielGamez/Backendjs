/// importamos la librer[ia de express] //
import express from 'express'

// Creamos el objeto de expressm para nuestra plicación//
const app = express();

// Definir el puerto //
const PORT=3000;
 
app.get('/',(req,res)=>{
    res.send("Esto es un primer API desde express....")
})

app.listen(PORT,()=>{
    console.log("Aplicacion corriendo desde el puerto: "+PORT)
})