const { getUserById, getUserByEmail, getUserByUserName, createUser } = require('../../db/repositories/user.respository');
const bcrypt = require('bcrypt');
const jwt = require('../../middlewares/auth.middleware')
  
  
module.exports.login = async (req, res) => {
  const { email, password } = req.body; 

  const user = await getUserByEmail(email);

  if (!user) res.status(400).json({error: "User Doesn't Exist"});

  const authUser = await bcrypt.compare(password, user[0].password);

  if (!authUser) res.status(400).send({ error: "Invalid username or password, please try again."})

  const token = await jwt.sign({ ...user[0] });
  const obj = { ...user[0], token };
  return res.send({ user: obj });
};

module.exports.register = async (req, res) => {
    // const { error } = registerValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

  try {
    const { userName, firstName, lastName, email, password } = req.body;

    if (!(email && firstName && lastName && password && userName )) {
      res.status(400).send('All inputs are required.')
    } 
    
    const oldUserWithUserName = await getUserByUserName(userName);
    const oldUserWithEmail = await getUserByEmail(email);

    if (oldUserWithUserName.length) {
      return res.status(409).send(`Username with ${userName} already exists. Please login.`)
    }

    if (oldUserWithEmail.length) {
      return res.status(409).send(`User with ${email} already exists. Please login.`)
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await createUser(userName, firstName, lastName, email, encryptedPassword);

    // const token = jwt.sign(
      

    // )

    res.send({success: true})



  } catch (err) {
    console.log(err)
  }
};
  