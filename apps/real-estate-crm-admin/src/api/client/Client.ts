import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  phoneNumber: string | null;
  name: string | null;
  appointments?: Array<Appointment>;
};
