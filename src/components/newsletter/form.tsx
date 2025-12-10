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
        className="flex items-center gap-[13px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full! sm:w-[350px]!">
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  className="!p-[10px] h-11! !pl-[20px]  bg-[rgba(0,0,0,0.05)] rounded-full outline-none ring-0 focus:ring-0 focus:outline-none focus-within:ring-0 focus-within:outline-none placeholder:text-[#00000040] text-[1rem]! leading-[150%]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="p-[14px]! h-auto! rounded-full">
          <ArrowRight></ArrowRight>
        </Button>
      </form>
    </Form>
  );
}
