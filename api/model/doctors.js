module.exports = (sequelize, DataTypes, Model) => {
    class Doctors extends Model {}

    Doctors.init(
        {
            // Model attributes are defined here

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize, // We need to pass the connection instance
            modelName: 'doctors', // We need to choose the model name
        }
    )

    return Doctors
}
