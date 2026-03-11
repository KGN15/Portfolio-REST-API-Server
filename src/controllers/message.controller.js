const MessageModel = require('../models/contactMesage.model')


const createtMessage = async (req, res) => {
    try {
        const { email, phone, whatsapp, socialLink, name, service, budget, timeline, details } = req.body

        const message = await MessageModel.create({
            email,
            phone,
            whatsapp,
            socialLink,
            name,
            service,
            budget,
            timeline,
            details,
        })

        res.status(201).json({
            message: "Message Created successfully",

        });


    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message,
        })
    }

}

const getMessage = async (req, res) => {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: "Please login first" });
    }

    const messageStak = await MessageModel.find({})
    res.status(200).json({
        message: 'messageStak Fached sucsessfully',
        messageStak
    })
}

module.exports = { createtMessage, getMessage };