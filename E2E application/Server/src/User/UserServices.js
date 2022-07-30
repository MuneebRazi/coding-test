const bcrypt = require("bcrypt");
const UserModel = require('./UserModel');

module.exports.create = async (body) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(body.password, salt);
    body.password = hash;

    const user = await UserModel.create(body);
    delete user.password

    return user;
  } catch (error) {
    throw error;
  }

}

module.exports.update = async (body) => {
  try {
    if (body.newPassword) {
      const user = await UserModel.findOne(body.id);
      const isMatch = await bcrypt.compare(body.password, user.password);

      if (isMatch) {
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(body.newPassword, salt);

        body.password = hash;
      } else {
        throw 'Password did not match';
      }
    }
    
    delete body.newPassword;
    const updatedUser = await UserModel.update(body);
    delete updatedUser.password

    return updatedUser;
  } catch (error) {
    throw error;
  }
}

module.exports.get = async () => {
  try {
    return await UserModel.findAll();
  } catch (error) {
    throw error;    
  }
}
module.exports.delete = async (id) => {
  try {
    return await UserModel.deleteOne(id);
  } catch (error) {
    throw error;
  }
}