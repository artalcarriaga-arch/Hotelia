"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/features/auth/context/AuthProvider";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, router, user]);

    if (loading) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-600">
                Cargando sesión...
            </div>
        );
    }

    if (!user) {
        return null;
    }
    
    return <>{children}</>;
}