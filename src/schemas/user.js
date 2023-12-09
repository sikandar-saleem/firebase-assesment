import * as z from "zod";

export const schema = z.object({
  name: z
    .string()
    .refine((value) => value.trim().length > 0, {
      message: "Name is required.",
    })
    .refine((value) => /^[a-z A-Z]+$/.test(value), {
      message: "Name must contain only alphabets.",
    })
    .refine((value) => value.length >= 3, {
      message: "Name must be at least 3 characters.",
    }),
  sectors: z.array(z.string()).refine((value) => value.length >= 1, {
    message: "Choose atleast one sector.",
  }),
});

export default schema;
