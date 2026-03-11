const projectModel = require('../models/project.model')

const createProject = async (req,res)=>{

    const {name,description,tags,img,repoLink, liveLink} = req.body

    const project = await projectModel.create({
        name,
        description,
        tags,
        img,
        repoLink,
        liveLink
    })

    res.status(200).json({
        massage: "Project Crated sucsasfully",
        project
    })
}

const getProject = async(req,res)=>{

    const projects = await projectModel.find({})
    res.status(200).json({
        message: 'Projects Fached sucsessfully',
        projects
    })
}

module.exports = {createProject,getProject};