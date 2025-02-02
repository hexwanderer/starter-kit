import { authMutations } from "@/queries/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

const signInFormSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const form = useForm<SignInFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  const signInMutation = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: authMutations().signIn,
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

        <Link to="/auth/sign-up">
          <Button>Sign Up</Button>
        </Link>

        <Link to="/">
          <Button>Cancel</Button>
        </Link>
      </form>
    </Form>
  );
}
