const multer = require('multer');

//  vertical images are rotated
//  .jpeg is not working from postman (instead of .jpg) ??
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(file.fieldname === "breedImage"){
            cb(null, './images/breeds');
        }else if(file.fieldname === "articleImage"){
            cb(null, 'images/articles');
        }else{
            cb(null, './images/default');
        }
    }, filename: function (req, file, cb) {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        cb(null, `${timestamp}-${file.originalname.toLowerCase().replaceAll(' ', '-')}`);
    }

});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Incorrect file format. Use jpeg or png.'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;