import express from 'express'
import usersRouter from './routes/Users'

const PORT = process.env.PORT || 8000

const app = express()

app.use('/api/users', usersRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
