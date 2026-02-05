"use client";

import { useTransition } from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/app/actions/auth";
import { Loader2, LogOut } from "lucide-react";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout}>
      {/* {isPending ? "Logging out..." : "Logout"} */}
      {isPending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <LogOut className="mr-2 h-4 w-4" />
      )}
      {isPending ? "Keluar..." : "Logout"}
    </Button>
  );
}
