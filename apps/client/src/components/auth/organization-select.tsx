import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Organization {
  id: string;
  name: string;
}

export function OrganizationSelect() {
  const { authClient } = useAuth();
  const organizationsQuery = authClient.useListOrganizations();

  return (
    <div className="grid lg:grid-cols-2 min-h-screen bg-background">
      <div className="flex flex-col p-8 pt-16">
        <div className="max-w-md mx-auto w-full space-y-6 flex-1">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Select Organization
            </h2>
            <p className="text-sm text-muted-foreground">
              Choose an organization to continue
            </p>
          </div>

          {/* Organizations List */}
          <div className="flex-1">
            {organizationsQuery.data && organizationsQuery.data.length > 0 ? (
              <div className="h-[400px] overflow-y-auto pr-2 -mr-2 space-y-2">
                {organizationsQuery.data.map((org: Organization) => (
                  <Button
                    key={org.id}
                    variant="outline"
                    className="w-full justify-start font-normal"
                    onClick={() => {
                      /* Handle org selection */
                    }}
                  >
                    {org.name}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-muted-foreground/25 p-8">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <p className="font-medium text-foreground">
                    No organizations found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Add your first organization to get started
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Add Organization Button */}
          <Button
            variant="outline"
            className="w-full h-12 text-sm font-medium mt-4"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Organization
          </Button>
        </div>
      </div>

      {/* Right pane - Testimonial */}
      <div className="hidden lg:flex items-center justify-center bg-muted/10">
        <div className="p-16">
          <blockquote className="space-y-2">
            <p className="text-2xl">
              "This is lit. It took me less than 10 minutes to setup, the DX is
              just amazing."
            </p>
            <footer className="text-sm">
              <div className="font-semibold">@saxxone</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
