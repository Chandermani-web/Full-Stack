import { z } from 'zod';  // ❗ Use `z`, not `zod.Schema`

const SignupSchema = () => {
  return z.object({
    username: z.string().min(3, "Name must contain at least 3 characters"),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });
};

export default SignupSchema;
