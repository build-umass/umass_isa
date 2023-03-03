const express = require('express')
const router = express.Router()
const path = require('path')

/*
User's request will only match if the requested route is only a slash / , or
slash index without .html or full index.html
*/
router.get('^/$|/index(.html)?', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router