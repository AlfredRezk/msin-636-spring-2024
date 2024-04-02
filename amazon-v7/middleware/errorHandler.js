module.exports = (error, req, res, next)=>{
    console.log(error);
    res.render('pages/error', {docTitle: 'Error', message: error.message})
}