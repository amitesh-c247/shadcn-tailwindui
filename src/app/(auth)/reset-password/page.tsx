import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/Auth";

export default function ResetPasswordPage() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
