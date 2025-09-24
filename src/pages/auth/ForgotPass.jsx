"use client";

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
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/Firebase";
import { useNavigate } from "react-router-dom";

const forgotPassSchema = z.object({
  email: z.string().email("Enter a valid email"),
});


export default function ForgotPass() {

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(forgotPassSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    sendPasswordResetEmail(auth, data.email)
    .then((res) => {
      // console.log(res, email);
      console.log(res, data.email);
      toast.success("Password reset Email sent");
    }).catch((err) => {
        console.log(err.code, err.message);
         toast.error("Password reset Email Invalid");
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
  <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
    <h1 className="text-xl font-semibold text-center mb-6">Forgot Password</h1>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
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
          Sent Email to Forgot Password
        </Button>
      </form>
    </Form>
  </div>
</div>
  );
}
