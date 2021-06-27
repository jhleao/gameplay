import { GuildProps } from "./guild";

export type AppointmentProps = {
  id: string,
  guild: GuildProps,
  category: string,
  date: string,
  description: string,
}