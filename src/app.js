import { createServer } from 'node:http' // Importo desde node el 'createServer' para crear un servidor http
import express from 'express'
import { Server } from 'socket.io' // Importo Server desde socket.io
import { engine } from 'express-handlebars'
import { router as viewsRouter } from "./routes/views.routes.js"

const port = 8080
const app = express() // Tengo mi app de express
const server = createServer(app) // Creo el servidor y le paso como parámetro mi app
const io = new Server(server) // Asocio con mi servidor de socket.io

app.engine('handlebars', engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')
app.use(express.static(process.cwd() + '/public'))

app.use('/', viewsRouter)

io.on('connection', socket => {
    console.log('Un usuario se ha conectado.')
})

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`))