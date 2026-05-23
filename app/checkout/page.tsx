"use client";

import CheckoutForm from "@/components/form/CheckoutForm";
import { Suspense } from "react";


export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CheckoutForm />
    </Suspense>
  );
}