const express = require('express')
const app = express()
// Essa é a forma de implementar este endpoint
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
    })

app.listen(3000, () => {
    console.log("funfando")
});