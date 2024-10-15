import mongoose, { Document, Schema } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: ID único do usuário (gerado automaticamente pelo MongoDB)
 *         name:
 *           type: string
 *           description: Nome completo do usuário
 *         email:
 *           type: string
 *           description: Endereço de e-mail do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário (deve ser armazenada de forma segura)
 *         role:
 *           type: string
 *           enum: ['User', 'Admin']
 *           description: Papel do usuário na aplicação (User ou Admin)
 *       example:
 *         name: "João Silva"
 *         email: "joao.silva@example.com"
 *         password: "senhaSegura123"
 *         role: "User"
 */

export interface IUser extends Document {
    _id: string; 
    name: string;
    email: string;
    password: string;
    role: 'User' | 'Admin'; // Define os papéis possíveis
}

const userSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'User', enum: ['User', 'Admin'] },
}, {
    timestamps: true, // Cria campos de timestamps: createdAt e updatedAt
});

// Adicionando o campo virtual 'id'
userSchema.virtual('id').get(function(this: IUser) {  // Defina 'this' como IUser
    return this._id.toString();
});

// Configuração para que o campo virtual apareça nas respostas JSON
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

const User = mongoose.model<IUser>('User', userSchema);

export default User;