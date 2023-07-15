import User from "@/models/User";
import db from "../../../utils/db";
import UserRequest from "@/models/UserRequest";

async function handler(req, res) {
  if (req.method === "DELETE") {
    await db.connect();
    const user = await UserRequest.findByIdAndDelete(req.query.id);
    if (user) {
      await db.disconnect();
      res.status(200).send({ message: "User Request deleted successfully" });
    } else {
      await db.disconnect();
      res.status(404).send({ error: "user not found" });
    }
  }
  if (req.method === "GET") {
    await db.connect();
    const user = await UserRequest.findById(req.query.id);
    if (user) {
      await db.disconnect();
      res.status(200).send({ user, success: true });
    } else {
      await db.disconnect();
      res.status(404).send({ message: "user not found", success: false });
    }
  }
}

export default handler;
