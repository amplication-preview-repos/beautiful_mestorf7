import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  name?: string | null;
  location?: string | null;
  description?: string | null;
  price?: number | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
