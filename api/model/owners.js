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
                allowNull: false,
            },
            mobile_num: {
                type: DataTypes.STRING,
            },
            
        },
        {
            sequelize, // We need to pass the connection instance
            modelName: 'owners', // We need to choose the model name
        }
    )

    return Owners
}
