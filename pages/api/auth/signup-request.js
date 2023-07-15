import bcryptjs from "bcryptjs";
import UserRequest from "../../../models/UserRequest";
import db from "../../../utils/db";

async function handler(req, res) {
  if (req.method == "POST") {
    const {
      compony,
      city,
      zip,
      customerNumber,
      requestedBy,
      customerName,
      state,
      email,
      phone,
      department,
    } = req.body;
    console.log(req.body);
    await db.connect();

    const existingUser = await UserRequest.findOne({ email: email });
    if (existingUser) {
      res.status(422).json({ message: "User exists already!" });
      await db.disconnect();
      return;
    }

    const newUser = new UserRequest({
      compony,
      city,
      zip,
      customerNumber,
      requestedBy,
      customerName,
      state,
      email,
      phone,
      department,
    });
    const user = await newUser.save();
    await db.disconnect();
    res.status(201).send({
      message: "Created user!",
      user,
    });
    return;
  }
  if (req.method == "GET") {
    await db.connect();
    const RequestedUsers = await UserRequest.find({});
    if (RequestedUsers) {
      res.status(200).json(RequestedUsers);
      await db.disconnect();
      return;
    }
    return;
  }
}

export default handler;
