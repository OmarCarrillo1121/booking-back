import { DataTypes } from "sequelize";

export const modelRoom = (sequelize) => {
  sequelize.define(
    "room",
    {
      roomNo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      roomType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roomPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
