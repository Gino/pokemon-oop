const express = require('express')
const app = express()

const port = 8080

app.get('/', (res, req) => {
  req.send('Test')
})

app.listen(port, () => console.log(`Pokemon app listening on port ${port}!`))