const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}


export { asyncHandler }

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     console.log("in asyncHandler");

//     return await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Server Error",
//     });
//   }
// };

// export { asyncHandler };

