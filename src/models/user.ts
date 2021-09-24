import { User } from "../Interfaces/index";
import { Schema, model } from "mongoose";

const UserSchema = new Schema<User>({
	id: String,
	server: String,
	score: Number,
	solved: Number,
});

const UserModel = model<User>("users", UserSchema);

export default UserModel;