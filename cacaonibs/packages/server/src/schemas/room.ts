import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

import User from "./user";

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  opponentId: {
    type: DataTypes.UUID,
    reference: {
      model: User,
    },
  },
});

export default Room;
