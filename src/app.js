const express = require('express')
const app = express()

let data = {
    'integrantes':[
        {'nome':'pedro henrique renner'},
        {'nome':'lucas mello'},
        {'nome':'nicolas santos'}
    ]
}
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: aplicacao-devops })
    })

app.get('/integrantes', (req, res) => {
    res.json(data)
})

app.listen(3001, () => {
    console.log("funfaaando")
});