"use client";

import { useState } from "react";

type AuthFormMode = "login" | "register";

type AuthValues = {
  name: string;
  email: string;
  password: string;
};

type AuthFormProps = {
  mode: AuthFormMode;
  loading: boolean;
  onSubmit: (values: AuthValues) => Promise<void> | void;
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Ocurrió un error inesperado.";
};

export default function AuthForm({ mode, loading, onSubmit }: AuthFormProps) {
  const [form, setForm] = useState<AuthValues>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const isRegister = mode === "register";

  const handleChange = (field: keyof AuthValues, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      await onSubmit(form);
    } catch (submitError) {
      setError(getErrorMessage(submitError));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isRegister ? (
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700"
          />
        </div>
      ) : null}

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          placeholder="hola@hotelia.com"
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(event) => handleChange("password", event.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700"
        />
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#27594b] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#204d40] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (isRegister ? "Creando cuenta..." : "Ingresando...") : isRegister ? "Crear cuenta" : "Iniciar sesión"}
      </button>
    </form>
  );
}