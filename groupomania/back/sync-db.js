const db = require('./models')

db.sequelize.sync({alter : true}).then((err) => {
  if (err) {
    console.log(err)
  }
  console.log('Database synced')
})