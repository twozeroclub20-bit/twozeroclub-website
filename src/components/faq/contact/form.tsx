"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submit } from "@/actions/contact/submit.action";
import { Loader } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.email({
    message: "Email is required",
  }),
  subject: z.string().min(1, {
    message: "Subject is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await submit({ data: values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-8 flex-1"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-area !text-[1rem] !font-extrabold">
                Full Name*
              </FormLabel>
              <FormControl>
                <Input
                  className="!border-black !rounded-full !py-[10px] !px-[20px]  "
                  placeholder="Enter your full name..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-area !text-[1rem] !font-extrabold">
                Email*
              </FormLabel>
              <FormControl>
                <Input
                  className="!border-black !rounded-full !py-[10px] !px-[20px]  "
                  placeholder="Enter your email..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-area !text-[1rem] !font-extrabold">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  className="!border-black !rounded-full !py-[10px] !px-[20px] "
                  placeholder="Enter your subject of query..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-area !text-[1rem] !font-extrabold">
                Message*
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="!border-black !rounded-[1.5rem] h-64 !py-[10px] !px-[20px]  "
                  placeholder="Enter your message..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="px-6 py-2 rounded-full "
          disabled={form.formState.isSubmitting || form.formState.isLoading}
        >
          {form.formState.isSubmitting || form.formState.isLoading ? (
            <>
              <Loader className="animate-spin duration-300"></Loader>
            </>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
}
