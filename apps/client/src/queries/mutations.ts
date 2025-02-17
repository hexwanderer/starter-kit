import type { OrganizationUpdate } from "@/components/auth/organization-manage";
import type { OrganizationCreate } from "@/components/auth/organization-select";
import type {
  SignInFormSchema,
  SignUpFormSchema,
} from "@/components/auth/sign-state";
import { useAuth } from "@/hooks/use-auth";
import type { Profile } from "@/routes/_authenticated/user/settings";
import { organization } from "better-auth/plugins";

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
    organizationUpdate: async (params: OrganizationUpdate) => {
      if (!params.id) throw new Error("No organization id provided");
      const { data, error } = await authClient.organization.update({
        data: {
          name: params.name,
          slug: params.slug,
        },
        organizationId: params.id,
      });

      if (error) throw error;

      return data;
    },
    organizationDelete: async (id: string) => {
      const { data, error } = await authClient.organization.delete({
        organizationId: id,
      });

      if (error) throw error;

      return data;
    },
    userUpdate: async (params: { name?: string; email?: string }) => {
      if (params.name) {
        const { error } = await authClient.updateUser({
          name: params.name,
        });

        if (error) throw error;
      }

      if (params.email) {
        const { error: error2 } = await authClient.changeEmail({
          newEmail: params.email,
        });

        if (error2) throw error2;
      }
    },
  };
};
