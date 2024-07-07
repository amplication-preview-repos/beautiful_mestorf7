import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  description: string | null;
  price: number | null;
  appointments?: Array<Appointment>;
};
