"use client";

import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";
import { useAuth } from "@/features/auth/context/AuthProvider";

export default function AccountPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#f7f4ee] px-6 py-10 text-slate-800">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Mi cuenta</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">Bienvenido a Hotelia</h1>
            </div>

            <button
              type="button"
              onClick={async () => {
                await logout();
                window.location.href = "/login";
              }}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Cerrar sesión
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-lg font-medium text-slate-900">{user?.email ?? "Sin email"}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Estado</p>
              <p className="mt-2 text-lg font-medium text-emerald-700">Sesión activa</p>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}