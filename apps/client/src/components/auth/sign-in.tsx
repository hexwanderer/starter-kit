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
import { useNavigate } from "@tanstack/react-router";

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

  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: authMutations().signIn,
    onSuccess: () => {
      navigate({ to: "/auth/orgs" });
    },
  });

  function handleSubmit(data: SignInFormSchema) {
    signInMutation.mutate(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Password</FormLabel>
                <Button
                  variant="link"
                  className="px-0 h-auto font-normal"
                  onClick={() => {
                    /* Handle forgot password */
                  }}
                >
                  Forgot Password?
                </Button>
              </div>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={signInMutation.isPending}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}
