import { DataTypes } from "sequelize";

export const modelBooking = (sequelize) => {
  sequelize.define(
    "booking",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      bookingDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: true,
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
