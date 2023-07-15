import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.session_id;

  try {
    if (!id.startsWith("cs_")) {
      res.status(500).json({ statusCode: 500, error: "Id is not match" });
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, error: err.message });
  }
}
