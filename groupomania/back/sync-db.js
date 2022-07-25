const db = require('./models')

db.sequelize.sync({force : true}).then((err) => {
  if (err) {
    console.log(err)
  }
  console.log('Database synced')
})
