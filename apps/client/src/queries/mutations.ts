import type { OrganizationCreate } from "@/components/auth/organization-select";
import type { SignInFormSchema } from "@/components/auth/sign-in";
import type { SignUpFormSchema } from "@/components/auth/sign-up";
import { useAuth } from "@/hooks/use-auth";

export const authMutations = () => {
  const { authClient } = useAuth();

  return {
    signIn: async (params: SignInFormSchema) => {
      const { data, error } = await authClient.signIn.email({
        email: params.email,
        password: params.password,
      });

      if (error) throw error;

      return data;
    },
    signUp: async (params: SignUpFormSchema) => {
      console.log("params", params);
      const { data, error } = await authClient.signUp.email({
        email: params.email,
        password: params.password,
        name: params.name,
      });
      console.log(error);

      if (error) throw error;

      return data;
    },
    signOut: async () => {
      const { data, error } = await authClient.signOut();

      if (error) throw error;

      return data;
    },
    organizationCreate: async (params: OrganizationCreate) => {
      const { data, error } = await authClient.organization.create({
        name: params.name,
        slug: params.slug,
      });

      if (error) throw error;

      return data;
    },
    organizationSelect: async (id: string) => {
      const { data, error } = await authClient.organization.setActive({
        organizationId: id,
      });

      if (error) throw error;

      return data;
    },
  };
};
