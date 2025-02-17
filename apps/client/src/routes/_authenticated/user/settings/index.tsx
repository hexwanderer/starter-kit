import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <Tabs
        defaultValue="tab-1"
        orientation={isMobile ? "horizontal" : "vertical"}
        className={`flex ${isMobile ? "flex-col" : "flex-row"} w-full h-auto gap-2 p-4`}
      >
        <TabsList
          className={`flex ${isMobile ? "flex-row" : "flex-col"} items-start self-start rounded-none border-l border-border bg-transparent p-0`}
        >
          <TabsTrigger
            value="tab-1"
            className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
          >
            Packages
          </TabsTrigger>
        </TabsList>
        <div className="flex max-w-lg mx-auto w-full">
          <TabsContent value="tab-1" className="w-full">
            <Profile />
          </TabsContent>
          <TabsContent value="tab-2" className="w-full">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              Content for Tab 2
            </p>
          </TabsContent>
          <TabsContent value="tab-3 " className="w-full">
            <p className="px-4 py-1.5 text-xs text-muted-foreground">
              Content for Tab 3
            </p>
          </TabsContent>
        </div>
      </Tabs>
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
      <div className="p-4">
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
      </div>
      <CardFooter>
        <Button variant="outline" className="w-full h-12 text-sm font-medium">
          <SaveIcon />
          <span>Save</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
