const bcrypt = require("bcryptjs");

const hashPassword = async () => {
  const password = "admin1423"; // Change this to your desired password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log("Hashed Password:", hashedPassword);
};

hashPassword();
