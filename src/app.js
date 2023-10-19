import express from 'express'
import { engine } from 'express-handlebars'
import { router as viewsRouter } from "./routes/views.routes.js"

const port = 8080
const app = express()

app.engine('handlebars', engine())
app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'handlebars')
app.use(express.static(process.cwd() + '/public'))

app.use('/', viewsRouter)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))