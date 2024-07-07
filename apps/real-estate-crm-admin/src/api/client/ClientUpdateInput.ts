import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
