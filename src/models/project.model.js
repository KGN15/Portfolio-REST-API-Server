const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [],
        required: true
    },
    img: {
        type: String,
        required: true,
    },
    repoLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    }
},{
    timestamps: true,
}
)


const projectModel = mongoose.model('project', projectSchema)
module.exports = projectModel