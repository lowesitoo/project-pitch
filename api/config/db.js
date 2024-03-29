const { Sequelize, Model, DataTypes } = require('sequelize')

const connect = () => {
    const hostName = process.env.HOST
    const userName = process.env.USER
    const password = process.env.PASSWORD
    const database = process.env.DB
    const dialect = process.env.DIALECT

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        // operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
        define: {
            timestamps: false,
        },
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize
    db.owners = require('../model/owners')(sequelize, DataTypes, Model)
    db.pets = require('../model/pets')(sequelize, DataTypes, Model)
    db.doctors = require('../model/doctors')(sequelize, DataTypes, Model)
    db.vaccines = require('../model/vaccines')(sequelize, DataTypes, Model)

    return db
}

module.exports = { connect }
