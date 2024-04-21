const User = require('../models/User');

// URL GET + /api/users
exports.list = async(req, res)=>{
    const data = await User.find({})
    res.status(200).json({
        success:true, 
        count: data.length,
        data, 
    
    })

}

// URL POST + /api/users
exports.create = async(req, res)=>{
    const data = await User.create(req.body);

    res.status(201).json({
        success:true, 
        data
    })
}

// URL GET + /api/users/:id
exports.read = async(req, res)=>{
    const data = await User.findById(req.params.id)
    res.status(200).json({
        success:true, 
        data
    })
}

// URL PUT + /api/users/:id
exports.update = async(req, res)=>{
    const data = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success:true, 
        data
    })

}

// URL DELETE + /api/users/:id
exports.delete = async(req, res)=>{
    const data = await User.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false, 
       
    })
}