const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const port = process.env.PORT || 3500;
 
app.use(logger)

app.use(cors(corsOptions))

// allows app to recieve and parse json data
app.use(express.json())

app.use(cookieParser( ))

//express.static: middleware that is telling our server where to grab static files
//'public' represents a folder in our codebase 
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.all('*', (req,res) => {
    res.status(404)
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')){
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`));