module.exports = (sequelize, DataTypes, Model) => {
    class Vaccines extends Model {}

    Vaccines.init(
        {
            // Model attributes are defined here
            brand: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize, // We need to pass the connection instance
            modelName: 'vaccines', // We need to choose the model name
        }
    )

    return Vaccines
}
