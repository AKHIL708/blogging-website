const {
  insert,
  getAll,
  getDataBasedOnCondition,
  update,
  DeleteRow,
} = require("../utils/dbFunctions");
let tableName = "users";

const addUser = async (data, profileUrl) => {
  let id = Date.now();
  const finalData = { ...data, profileUrl, id };
  const result = await insert(tableName, finalData);
  return result;
};

const getAllUsers = async () => {
  const result = await getAll(tableName);
  return result;
};
const getOneUser = async (data) => {
  const result = getDataBasedOnCondition(tableName, data);
  return result;
};
const updateUser = async (data, id) => {
  const result = update(tableName, data, id);
  return result;
};
const deleteUser = async (data) => {
  const result = DeleteRow(tableName, data);
  return result;
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
