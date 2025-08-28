import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { CreateNewUser } from "@/convex/user";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserContext } from "@/context/UserContext";
function Provider({ children }: { children: React.ReactNode }) {
  const createUser = useMutation(api.user.CreateNewUser);
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    // save new user if not exists
    if (!user) return;
    const res = await createUser({
      name: user?.fullName || "",
      imageUrl: user?.imageUrl || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
    });
    setUserData(res);
  };
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div>
        <Header />
        {children}
      </div>
    </UserContext.Provider>
  );
}

export default Provider;

export const useUserData = () => {
  const { userData, setUserData } = useContext(UserContext);
  return { userData, setUserData };
};
