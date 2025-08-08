import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
