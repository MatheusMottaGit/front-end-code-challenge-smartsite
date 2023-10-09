import { PeriodsValues } from "@/App"

export type Period = {
  id: string
  period: string
  hours: string
  value: PeriodsValues
}

export type Unit = {
  id: number
  title: string
  content: string
  opened: boolean
  schedules: [
    weekdays: string,
    hour: string
  ]
}