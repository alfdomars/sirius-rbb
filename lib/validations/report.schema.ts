import { z } from "zod";

export const reportSchema = z.object({
  okt_2024: z.number(),
  nov_2024: z.number(),
  des_2024: z.number(),
  jan_2025: z.number(),
  feb_2025: z.number(),
  mar_2025: z.number(),
  apr_2025: z.number(),
  mei_2025: z.number(),
  jun_2025: z.number(),
  jul_2025: z.number(),
  agu_2025: z.number(),
  sep_2025: z.number(),
  okt_2025: z.number(),
  nov_2025: z.number(),
  des_2025: z.number(),
});

export type ReportSchema = z.infer<typeof reportSchema>;

export const reportDefaultValues: ReportSchema = {
  okt_2024: 0,
  nov_2024: 0,
  des_2024: 0,
  jan_2025: 0,
  feb_2025: 0,
  mar_2025: 0,
  apr_2025: 0,
  mei_2025: 0,
  jun_2025: 0,
  jul_2025: 0,
  agu_2025: 0,
  sep_2025: 0,
  okt_2025: 0,
  nov_2025: 0,
  des_2025: 0,
};
