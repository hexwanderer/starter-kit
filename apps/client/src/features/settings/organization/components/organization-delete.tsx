import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SettingsCard } from "../../settings-card";
import { organizationManagementMutations } from "../api/mutations";

export interface OrganizationDeleteProps {
  organization: {
    id: string;
    name: string;
    slug: string;
  };
}

export function OrganizationDelete({ organization }: OrganizationDeleteProps) {
  const deleteOrgMutation = useMutation({
    mutationKey: ["auth", "organizationDelete"],
    mutationFn: organizationManagementMutations().organizationDelete,
    onSuccess: () => {
      toast.success("Organization deleted successfully");
    },
    onError: (err) => {
      toast.error("Error deleting organization");
      throw err;
    },
  });
  return (
    <AlertDialog>
      <SettingsCard title="Delete Organization">
        <p className="text-red-500 mb-4">
          Deleting an organization is irreversible. Please be careful.
        </p>
        <AlertDialogTrigger asChild>
          <Button className="w-full" variant="destructive">
            <TrashIcon />
            <span>Delete</span>
          </Button>
        </AlertDialogTrigger>
      </SettingsCard>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Organization</AlertDialogTitle>
          <AlertDialogDescription>
            Please confirm your action
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteOrgMutation.mutate(organization.id)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
