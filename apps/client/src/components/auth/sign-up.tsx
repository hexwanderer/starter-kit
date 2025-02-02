import { zodResolver } from "@hookform/resolvers/zod";
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
import { authMutations } from "@/queries/mutations";
import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

const signUpFormSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  name: z.string().min(1, "Name is required"),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const signUpMutation = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: authMutations().signUp,
  });

  function handleSubmit(data: SignUpFormSchema) {
    signUpMutation.mutate(data);
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

        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="p-2 flex flex-col gap-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors.name && (
            <FormMessage className="mt-1 text-sm text-error">
              {form.formState.errors.name.message}
            </FormMessage>
          )}
        </div>

        <Button
          type="submit"
          className="w-full m-2"
          disabled={signUpMutation.isPending || !form.formState.isValid}
        >
          Sign Up
        </Button>

        <Link to="/auth/sign-in">
          <Button>Sign In</Button>
        </Link>

        <Link to="/">
          <Button>Cancel</Button>
        </Link>
      </form>
    </Form>
  );
}
