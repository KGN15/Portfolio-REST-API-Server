const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {

    const { email, password, code } = req.body;

    if (!email || !password || !code) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (code !== process.env.ADMIN_CODE) {
      return res.status(401).json({
        message: "Invalid authentication credentials",
      });
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        message: "Invalid authentication credentials",
      });
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        message: "Invalid authentication credentials",
      });
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Admin logged in successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });

  }
};

module.exports = { loginAdmin };