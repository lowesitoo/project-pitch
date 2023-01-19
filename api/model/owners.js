const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes, Model) => {
    class Owners extends Model {}

    Owners.init(
        {
            // Model attributes are defined here
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pet: {
                type: DataTypes.STRING,
            },
            mobile_num: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize, // We need to pass the connection instance
            hooks: {
                beforeCreate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a')
                        user.password = bcrypt.hashSync(user.password, salt)
                    }
                },
                beforeUpdate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a')
                        user.password = bcrypt.hashSync(user.password, salt)
                    }
                },
            },
            instanceMethods: {
                validPassword: (password) => {
                    return bcrypt.compareSync(password, this.password)
                },
            },

            modelName: 'owners', // We need to choose the model name
        }
    )

    return Owners
}
