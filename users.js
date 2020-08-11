const Users = require("../schemas/users");
let loginUser = async (request) => {
  console.log(request, "req")
  const userinfo = await Users.find({ email: request.email, password: request.password })
  console.log(userinfo,)
  return userinfo
}



let registerUser = async (params) => {
  let query = {
    name: params.name,
    email: params.email,
    password: params.password,
  }
  var addusers = new Users(query);
  var result = await addusers.save();
  return result;
}


let userList = async () => {
  const userdata = await Users.find()
  return userdata
}
module.exports = {
  loginUser,
  registerUser,
  userList
};
