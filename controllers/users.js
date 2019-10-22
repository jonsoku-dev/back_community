const User = require('../models/User');
const asyncHandler = require('../middleware/async');

// @desc   Get All Users
// @route  GET /api/v1/auth/users
// @access Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc   Get single Users
// @route  GET /api/v1/auth/users/:id
// @access Private
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc   Create user
// @route  Post /api/vi/auth/users
// @access Private
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc   Update user
// @route  PUT /api/vi/auth/users/:id
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc   Delete user
// @route  DELETE /api/vi/auth/users/:id
// @access Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
