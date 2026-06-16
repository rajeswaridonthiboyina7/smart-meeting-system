import { z } from "zod";

export const preferenceSchema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 characters"),

  email: z
    .string()
    .email("Enter a valid email"),

  department: z
    .string()
    .min(2, "Department is required"),

  meeting_time: z
    .string()
    .min(1, "Meeting time is required"),

  remote_preference: z
    .string()
    .min(1, "Remote preference is required"),
});

export type PreferenceFormData =
  z.infer<typeof preferenceSchema>;