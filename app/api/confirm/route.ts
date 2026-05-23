import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const session_id = searchParams.get("session_id");

  if (!session_id) {
    return NextResponse.json(
      { message: "Session ID required" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;

    if (session.status === "complete") {
      await prisma.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
        },
      });

      await prisma.cart.delete({
        where: {
          id: cartId,
        },
      });

      return NextResponse.redirect(new URL("/orders", req.url));
    }

    return NextResponse.redirect(new URL("/checkout", req.url));
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};