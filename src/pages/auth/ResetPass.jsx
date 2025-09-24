import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { confirmPasswordReset, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/Firebase";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

// ✅ Schema for new password + confirm password
const ResetSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export default function ResetPass() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const oobCode = searchParams.get("oobCode")

  const form = useForm({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      password : "",
      confirmPassword : "",
    },
  });

  if (!oobCode) {
    return <Navigate to={"/login"}/>
  }

  const onSubmit = async (data) => {
    confirmPasswordReset(auth, oobCode, data.password)
    .then((res) => {
      console.log(res);
      toast.success("Password reset Successful!")
      navigate("/login")
    }).catch((err) => {
      console.log(err.message);
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
  <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
    <h1 className="text-xl font-semibold text-center mb-6">Reset Password</h1>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* New Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-11 bg-slate-900 text-white hover:bg-slate-800 rounded-lg"
        >
         Reset Password
        </Button>
      </form>
    </Form>
  </div>
</div>
  );
}
