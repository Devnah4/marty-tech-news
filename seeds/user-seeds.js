const { User } = require("../models/user");

const userData = [
    {
        username: "admin",
        email: 'user@user.com',
        password: 'password',
    },
    {
        username: "User",
        email: 'testuser@user.com',
        password: 'userpassword',
    },
    {
        username: "Guy",
        email: 'guy@user.com',
        password: 'guypassword',
    },
];

const seedUser = () => Category.bulkCreate(userData);

module.exports = seedUser;