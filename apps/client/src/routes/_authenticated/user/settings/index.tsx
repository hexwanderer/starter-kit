import {
  SettingsTabs,
  SettingsTabsContent,
  SettingsTabsList,
  SettingsTabsTrigger,
} from "@/components/settings-tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import { authMutations } from "@/queries/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { SaveIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/_authenticated/user/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const isMobile = useIsMobile();
  return (
    <>
      <h2>Settings</h2>
      <SettingsTabs defaultValue="tab-1" isMobile={isMobile}>
        <SettingsTabsList>
          <SettingsTabsTrigger value="tab-1">Profile</SettingsTabsTrigger>
          <SettingsTabsTrigger value="tab-2">Projects</SettingsTabsTrigger>
          <SettingsTabsTrigger value="tab-3">Packages</SettingsTabsTrigger>
        </SettingsTabsList>
        <div className="flex max-w-lg mx-auto w-full">
          <SettingsTabsContent value="tab-1">
            <Profile />
          </SettingsTabsContent>
          <SettingsTabsContent value="tab-2">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              Content for Tab 2
            </p>
          </SettingsTabsContent>
          <SettingsTabsContent value="tab-3 ">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              Content for Tab 3
            </p>
          </SettingsTabsContent>
        </div>
      </SettingsTabs>
    </>
  );
}

const profileSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  // avatar: z.string().url(),
});

export type Profile = z.infer<typeof profileSchema>;

function Profile() {
  const { authClient } = useAuth();
  const user = authClient.useSession();

  const form = useForm<Profile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Name",
      email: "email@example.com",
      // avatar: "https://example.com/avatar.png",
    },
    values: {
      name: user.data?.user.name ?? "Name",
      email: user.data?.user.email ?? "email@example.com",
      // avatar: user.data?.user.avatar ?? "https://example.com/avatar.png",
    },
  });

  const userUpdateMutation = useMutation({
    mutationKey: ["auth", "userUpdate"],
    mutationFn: authMutations().userUpdate,
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: (err) => {
      toast.error("Error updating profile");
      throw err;
    },
  });

  function handleSubmit(data: Profile) {
    const changedData = {
      name: data.name === "Name" ? undefined : data.name,
      email: data.email === "email@example.com" ? undefined : data.email,
    };
    userUpdateMutation.mutate(changedData);
  }

  return (
    <Card className="flex-grow w-full h-full">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col gap-4">
              <FormField
                name="name"
                render={({ field }) => (
                  <>
                    <FormLabel>Name</FormLabel>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Name"
                      required
                    />
                  </>
                )}
              />
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}

              <FormField
                name="email"
                render={({ field }) => (
                  <>
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Email"
                      required
                    />
                  </>
                )}
              />
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}

              {/* <FormField
              name="avatar"
              render={({ field }) => (
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Avatar"
                  required
                />
              )}
            />
            {form.formState.errors.avatar && (
              <FormMessage>
                {form.formState.errors.avatar.message}
              </FormMessage>
            )} */}
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full h-12 text-sm font-medium">
          <SaveIcon />
          <span>Save</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
