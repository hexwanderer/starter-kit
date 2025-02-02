import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";

export function SignOn() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Left pane - Auth form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                /* Handle GitHub auth */
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                /* Handle SSO */
              }}
            >
              <Lock className="mr-2 h-4 w-4" />
              Continue with SSO
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>
            <Tabs
              value={tab}
              onValueChange={(value) => setTab(value as "signin" | "signup")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <SignIn />
              </TabsContent>
              <TabsContent value="signup">
                <SignUp />
              </TabsContent>
            </Tabs>
            <p className="text-xs text-muted-foreground text-center">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
      {/* Right pane - Testimonial */}
      <div className="hidden lg:flex items-center justify-center bg-muted/10 w-full h-full">
        <div className="flex items-center w-full h-full p-16">
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
