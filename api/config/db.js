const { Sequelize, Model, DataTypes } = require('sequelize')

const connect = () => {
    const hostName = process.env.HOST
    const userName = process.env.USER
    const password = process.env.PASSWORD
    const database = process.env.DB
    const dialect = 'postgres'

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
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize
    db.owners = require('../model/owners')(sequelize, DataTypes, Model)

    return db
}

module.exports = { connect }
