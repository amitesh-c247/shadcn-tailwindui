"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loader from "@/components/Common/Loaders/Loader";
import { useAuth } from "@/lib/Contexts/AuthProvider";
import { paths } from "@/routes";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { isAuthorized, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthorized) {
      router.replace(paths.ROOT_LOGIN);
    }
  }, [isLoading, isAuthorized, router]);

  if (isLoading || !isAuthorized) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGate;
