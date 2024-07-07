import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  location?: string | null;
  description?: string | null;
  price?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
