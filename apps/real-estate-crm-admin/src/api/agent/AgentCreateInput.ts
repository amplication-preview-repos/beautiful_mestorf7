import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
