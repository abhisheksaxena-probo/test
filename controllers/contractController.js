const Contract = require("../db/model/index").contracts;
const catchAsync = require("../utils/catchAsync");
exports.getAllContracts = catchAsync(async (req, res) => {
  const contract = await Contract.findAll({ raw: true });
  res.send(contract);
});

exports.getContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  const contract = await Contract.findOne({ where: { id: id } });
  res.send(contract);
});

exports.deleteContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  await Contract.destroy({ where: { id: id } });
  res.json("deleted");
});

exports.createContract = catchAsync(async (req, res) => {
  const contract = await Contract.create(req.body);
  res.json(contract);
});

exports.updateContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  const contract = await Contract.update(req.body, { where: { id: id } });
  res.json(contract);
});
