exports.getIndex = (req,res) =>{
    res.render('home')
}

exports.getAbout = (req,res) =>{
    res.render('about')
}

exports.getService = (req,res) =>{
    res.render('service')
}

exports.getContact = (req,res) =>{
    res.render('contact')
}