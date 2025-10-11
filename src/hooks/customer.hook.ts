import { useQueryClient, useMutation } from "@tanstack/react-query";
import { login } from "@/actions/customer/login.action";
import { signup } from "@/actions/customer/signup.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { recovery } from "@/actions/customer/forget.action";
export function useSignup() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      password: string;
    }) => {
      const res = await signup(data);
      return res;
    },

    onSuccess: (data) => {
      if (data.success) {
        toast.info("Signup successful");
        router.push("/");
        queryClient.invalidateQueries({ queryKey: ["customer"] });
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } else {
        console.log(data.message);
        toast.error(
          `Signup Failed! ${
            data.message ? data.message.split(",")[0] : "Please try again later"
          } `
        );
      }
    },
  });

  return mutation;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await login(data);
      return res;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.info("Login successful");
        router.push("/");
        queryClient.invalidateQueries({ queryKey: ["customer"] });
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } else {
        toast.error("Login Failed! Please check your email and password");
      }
    },
  });

  return mutation;
}

export function useForgetPassword() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const res = await recovery(data);
      return res;
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.info(data.message);
        // router.push("/");
      } else {
        toast.error(data.message || "Recovery Failed! Please check your email");
      }
    },
  });

  return mutation;
}
