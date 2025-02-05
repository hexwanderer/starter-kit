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

const signUpFormSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  name: z.string().min(1, "Name is required"),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export function SignUp({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<SignUpFormSchema>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const signUpMutation = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: authMutations().signUp,
    onSuccess: () => {
      onSuccess();
    },
  });

  function handleSubmit(data: SignUpFormSchema) {
    signUpMutation.mutate(data);
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Create a password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={signUpMutation.isPending}
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
}
