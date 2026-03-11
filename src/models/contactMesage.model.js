const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
      enum: [
        "SEO",
        "WEB_APP",
        "BACKEND",
        "FULL_STACK",
        "UI_UX",
        "OTHER"
      ],
    },

    socialLink: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    timeline: {
      type: String,
      required: true,
    },

    details: {
      type: String,
      required: true,
      minlength: 20,
    },
  },
  {
    timestamps: true,
  }
)

const MessageModel = mongoose.model('Message', messageSchema)
module.exports = MessageModel
