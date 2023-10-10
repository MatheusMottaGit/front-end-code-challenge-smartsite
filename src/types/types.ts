import { PeriodsValues } from "@/App"

export interface Period {
  id: string,
  period: string,
  hours: string,
  value: PeriodsValues,
}

interface Schedule {
  weekdays: string,
  hour: string,
}

export interface Location {
  id: number,
  title: string,
  content: string,
  opened: boolean,
  schedules: Schedule[]
}