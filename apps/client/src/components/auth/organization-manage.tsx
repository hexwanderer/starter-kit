import { authMutations } from "@/queries/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { SaveIcon, TrashIcon } from "lucide-react";
import { Card, CardTitle } from "../ui/card";

interface Organization {
  id: string;
  name: string;
  slug: string;
}

const orgUpdateSchema = z.object({
  id: z.string().min(1).max(255),
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(255),
});

export type OrganizationUpdate = z.infer<typeof orgUpdateSchema>;

export function OrganizationManage(organization: Organization) {
  const form = useForm<OrganizationUpdate>({
    resolver: zodResolver(orgUpdateSchema),
    defaultValues: {
      id: "",
      name: "",
      slug: "",
    },
    values: {
      id: organization.id,
      name: organization.name,
      slug: organization.slug ?? "",
    },
  });

  const updateOrgMutation = useMutation({
    mutationKey: ["auth", "organizationUpdate"],
    mutationFn: authMutations().organizationUpdate,
    onSuccess: () => {
      toast.success("Organization updated successfully");
    },
    onError: (err) => {
      toast.error("Error updating organization");
      throw err;
    },
  });

  const deleteOrgMutation = useMutation({
    mutationKey: ["auth", "organizationDelete"],
    mutationFn: authMutations().organizationDelete,
    onSuccess: () => {
      toast.success("Organization deleted successfully");
    },
    onError: (err) => {
      toast.error("Error deleting organization");
      throw err;
    },
  });

  function handleSubmit(data: OrganizationUpdate) {
    updateOrgMutation.mutate(data);
  }

  return (
    <>
      <Card className="flex-grow w-full h-full">
        <CardTitle>Organization Settings</CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col gap-4">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Name"
                      required
                    />
                  </FormItem>
                )}
              />
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}

              <FormField
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <Input
                      {...field}
                      className="w-full"
                      placeholder="Slug"
                      required
                    />
                  </FormItem>
                )}
              />
              {form.formState.errors.slug && (
                <FormMessage>{form.formState.errors.slug.message}</FormMessage>
              )}

              <Button type="submit" variant="outline" className="w-full">
                <SaveIcon />
                <span>Save</span>
              </Button>
            </div>
          </form>
        </Form>
        <Button
          variant="destructive"
          onClick={() => deleteOrgMutation.mutate(organization.id)}
        >
          <TrashIcon />
          <span>Delete</span>
        </Button>
      </Card>
    </>
  );
}
