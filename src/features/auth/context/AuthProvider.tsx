"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase/client";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setUser(null);
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      loginWithEmail: async (email, password) => {
        if (!auth || !isFirebaseConfigured) {
          throw new Error("Firebase no está configurado. Agrega las variables NEXT_PUBLIC_FIREBASE_*");
        }

        await signInWithEmailAndPassword(auth, email.trim(), password);
      },
      registerWithEmail: async (email, password, name) => {
        if (!auth || !db || !isFirebaseConfigured) {
          throw new Error("Firebase no está configurado. Agrega las variables NEXT_PUBLIC_FIREBASE_*");
        }

        const { user: createdUser } = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        );

        await setDoc(
          doc(db, "users", createdUser.uid),
          {
            uid: createdUser.uid,
            email: createdUser.email,
            name: name?.trim() || "",
            role: "guest",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true },
        );
      },
      logout: async () => {
        if (!auth) return;
        await signOut(auth);
      },
    }),
    [loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return context;
}