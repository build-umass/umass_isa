const { format } = require('date-fns')
//uuid creates specific id for each log item
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        // check if directory exists 
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            //if logs doesn't exist , need to create the logs folder
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName),logItem)
    } catch (err) {
        console.log(err)
    }
} 

/*
Logs every request that comes in, 
TODO add conditionals for specific request methods  
*/
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqlog.log')
    console.log(`${req.method} ${req.path}`)
    //moves on to next piece of middleware, or eventually the controller where the request will be processed
    next()
}

module.exports = { logEvents, logger }