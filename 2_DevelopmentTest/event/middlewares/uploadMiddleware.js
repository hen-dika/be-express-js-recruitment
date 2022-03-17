var multer = require('multer');

module.exports.files={
  allowedFile:function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      req.fileValidationError = 'Only  files are allowed!';
      return cb(new Error('Only  files are allowed!'), false);
    }
    cb(null, true);
  },

  storage:function(){
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/images/')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    })

      return storage;
  }

  
}