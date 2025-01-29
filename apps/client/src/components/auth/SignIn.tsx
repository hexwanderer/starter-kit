import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const form = useForm<SignInFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  const { authClient } = useAuth();

  const signInMutation = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: async (data: SignInFormSchema) => {
      await authClient.signIn.email(
        {
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: () => {},
          onError: (error) => {
            console.log("error", error);
          },
        },
      );
    },
  });

  function handleSubmit(data: SignInFormSchema) {
    signInMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="p-2 flex flex-col gap-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.email && (
            <FormMessage className="mt-1 text-sm text-error">
              {form.formState.errors.email.message}
            </FormMessage>
          )}
        </div>

        <div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="p-2 flex flex-col gap-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.password && (
            <FormMessage className="mt-1 text-sm text-error">
              {form.formState.errors.password.message}
            </FormMessage>
          )}
        </div>

        <Button
          type="submit"
          className="w-full m-2"
          disabled={signInMutation.isPending || form.formState.errors !== null}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}
