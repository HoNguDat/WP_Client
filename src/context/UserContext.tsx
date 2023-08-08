import { createContext, useState } from "react";
export interface User {
  email: string;
  firstName: string;
  lastName: string;
  userId: number;
  token: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const initialUser: User = {
  email: "",
  firstName: "",
  lastName: "",
  userId: 0,
  token: "",
};

export const UserContext = createContext<UserContextType>({
  user: initialUser,
  setUser: () => {},
});
