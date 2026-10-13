"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthForm from "@/features/auth/components/AuthForm";
import { useAuth } from "@/features/auth/context/AuthProvider";

export default function LoginPage() {
    const router = useRouter();
    const { user, loading, loginWithEmail } = useAuth();

    useEffect(() => {
        if (!loading && user) {
            router.replace("/account");
        }
    }, [loading, router, user]);

    if (loading || user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f4ee] text-sm text-slate-600">
                Cargando...
            </div>
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f7f4ee] px-4 py-10">
            <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
                <div className="mb-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Hotelia</p>
                    <h1 className="mt-3 text-3xl font-semibold text-slate-900">Iniciá sesión</h1>
                </div>

        <AuthForm
        mode="login"
        loading={loading}
        onSubmit={async ({ email, password }) => {
        await loginWithEmail(email, password);
        router.push("/account");
        }}
    />
    
    <p className="mt-6 text-center text-sm text-slate-600">
        ¿No tenés cuenta?{" "}
        <Link href="/register" className="font-medium text-[#27594b] underline underline-offset-2">
            Registrate
        </Link>
    </p>
    </div>
    </main>
  );
}