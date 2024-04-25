import { create } from "zustand";

type User = {
  _id: string;
  Name: String;
  Email: String;
  Image: String;
};

type UserState = {
  user: User | null;
};

type UserActions = {
  login: () => void;
  logout: () => void;
};

export const useUser = create<UserState & UserActions>((set) => ({
  user: null,
  login: () => {
    set((state) => {
      return {
        user: {
          _id: "1",
          Name: "",
          Email: "",
          Image: "",
        },
      };
    });
  },
  logout: () => {},
}));
