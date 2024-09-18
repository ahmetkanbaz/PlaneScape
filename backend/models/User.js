//Kullanıcıları temsil etmek için model oluşturuyoruz.
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') //Şifreleri hash'lemek için kullanıyoruz.

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
})

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

//Şifreyi hash'lemek için ön işlem yapıyoruz.
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  
  try {
    this.password = await hashPassword(this.password)
    next()
  } catch (error) {
    next(error)
  }
})

//Şifre doğrulama metodu
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);