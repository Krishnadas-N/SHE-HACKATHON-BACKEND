function successHandler(res, statusCode = 201, message, data={}) {
  res.status(statusCode).json({
    success: true,
    message: message,
    data: data
  });
}



function errorHandler(err, statusCode, res, next) {

  console.log(err);
  res.status(statusCode || 500).json({
    success: false,
    message: err.name || 'Internal Server Error',
    error: err.message
  });
}


module.exports = {
  successHandler,
  errorHandler
}