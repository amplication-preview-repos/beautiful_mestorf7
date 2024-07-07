import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
