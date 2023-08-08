import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { User } from "./UserContext";

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUserJSON = localStorage.getItem("user");
    if (storedUserJSON) {
      const storedUser = JSON.parse(storedUserJSON) as User;
      setUser(storedUser);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
