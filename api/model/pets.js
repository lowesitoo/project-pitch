module.exports = (sequelize, DataTypes, Model) => {
    class Pets extends Model {}

    Pets.init(
        {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            breed: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            primary_doctor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            clinic: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            vaccine_history: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize, // We need to pass the connection instance
            modelName: 'pets', // We need to choose the model name
        }
    )

    return Pets
}
