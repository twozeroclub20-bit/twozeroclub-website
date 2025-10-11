"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { subscribe } from "@/actions/customer/subscribe.action";
import { toast } from "sonner";
const formSchema = z.object({
  email: z.email({
    message: "Please add a valid email",
  }),
});

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await subscribe(values);
      toast.info(
        "Thanks for subscribing! You’ll start receiving our latest updates soon."
      );
    } catch (err) {
      toast.error(
        "Sorry, we couldn’t add your email to our newsletter. Please try again later."
      );
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your email address ..."
                  className="!py-[10px] !px-[30px] w-full sm:w-[400px] bg-[rgba(0,0,0,0.05)] rounded-full outline-none ring-0 focus:ring-0 focus:outline-none focus-within:ring-0 focus-within:outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="!rounded-[24px]">
          <ArrowRight></ArrowRight>
        </Button>
      </form>
    </Form>
  );
}
