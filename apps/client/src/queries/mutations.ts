import type { SignInFormSchema } from "@/components/auth/SignIn";
import { useServer } from "@/hooks/useServer";

export const auth = () => {
  const { serverClient } = useServer();

  return {
    signIn: async (data: SignInFormSchema) => {
      console.log("data", data);
      return;
    },
  };
};
