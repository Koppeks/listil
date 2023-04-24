const getAll = async (req, res) => {
  res.status(200).json("Users");
};

module.exports = {
  getAll,
};
