import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
};
