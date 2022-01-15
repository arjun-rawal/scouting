import { Model, model, models, Schema } from 'mongoose';

const userSchema = new Schema<UserI>(
	{
		username: { type: String, unique: true, required: true, minlength: 3 },
		administrator: { type: Boolean, required: true, default: false },
		password: { type: String, required: true, minlength: 6 },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		teamNumber: { type: Number, required: true, min: 1 },
	},
	{ timestamps: true },
);

export interface UserI {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	teamNumber: number;
	administrator: boolean;
}

const User = (models.user as Model<UserI>) || model('user', userSchema);

export default User;