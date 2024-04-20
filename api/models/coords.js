import { DataTypes, Model } from 'sequelize';

export default class Coord extends Model {
    static initialize(sequelize) {
        Coord.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                coordsX: {
                    type: DataTypes.REAL,
                    allowNull: false,
                },
                coordsY: {
                    type: DataTypes.REAL,
                    allowNull: false,
                },
                iconCaption: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                marketColor: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Coord',
                tableName: 'coords',
                paranoid: true,
            }
        );
    }
}
