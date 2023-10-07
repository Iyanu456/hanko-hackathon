"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";
import "custom-event-polyfill"

const hankoApi = `https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io`;

export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState();

  useEffect(() => {
    import("@teamhanko/hanko-frontend-sdk").then(({ Hanko }) => {
      setHanko(new Hanko(hankoApi ?? ""));
    });
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}
