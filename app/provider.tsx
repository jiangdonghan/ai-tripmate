import React, { useEffect } from "react";
import Header from "./_components/Header";
import { CreateNewUser } from "@/convex/user";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  const createUser = useMutation(api.user.CreateNewUser);
  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    // save new user if not exists
    if (!user) return;
    await createUser({
      name: user?.fullName || "",
      imageUrl: user?.imageUrl || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
    });
  };
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
