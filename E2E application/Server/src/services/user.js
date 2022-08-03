const bcrypt = require("bcrypt");

class User {
  constructor(models) {
    this.models = models;
  }
  async create(body) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(body.password, salt);
      body.password = hash;

      const user = await this.models.Users.create(body);
      delete user.password

      return user;
    } catch (error) {
      throw error;
    }

  }

  async update(body) {
    try {
      if (body.newPassword) {
        const user = await this.models.Users.findOne(body.id);
        const isMatch = await bcrypt.compare(body.password, user.password);

        if (isMatch) {
          const salt = await bcrypt.genSalt(12)
          const hash = await bcrypt.hash(body.newPassword, salt);

          body.password = hash;
        } else {
          throw 'Password did not match';
        }
        delete body.newPassword;
      }

      const updatedUser = await this.models.Users.update(body);
      delete updatedUser.password

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async get() {
  try {
    return await this.models.Users.get();
  } catch (error) {
    throw error;
  }
}
  async delete(id) {
  try {
    return await this.models.Users.deleteOne(id);
  } catch (error) {
    throw error;
  }
}
}

module.exports = User;





