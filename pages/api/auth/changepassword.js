import bcryptjs from "bcryptjs";
import User from "../../../models/User";
import db from "../../../utils/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { email, previousPassword, newPassword } = req.body;

  if (
    !email ||
    !previousPassword ||
    !newPassword ||
    newPassword.trim().length < 5
  ) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }

  await db.connect();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isPreviousPasswordMatched = await bcryptjs.compare(
      previousPassword,
      user.password
    );
    if (!isPreviousPasswordMatched) {
      res.status(401).json({ message: "Incorrect previous password" });
      return;
    }

    const hashedNewPassword = bcryptjs.hashSync(newPassword);

    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  } finally {
    await db.disconnect();
  }
}

export default handler;
