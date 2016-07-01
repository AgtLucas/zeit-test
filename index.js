const app = require('express')()

app.get('/', (req, res) => {
  res.send('C\'est la vie.')
})

app.listen()
