import logo from './assets/logo.svg'
import { Card, CardContent, CardTitle } from './components/ui/card'
import { FormEvent, useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Button } from './components/ui/button'
import FormCardLayout from './components/form-card-layout'
import { Period, Location } from './types/types'
import axios from 'axios'
import { transformDate } from './lib/transform-date'

export type PeriodsValues = "morning" | "afternoon" | "night"

const periods: Period[] = [
  {
    id: '1',
    period: 'Manhã',
    hours: '06:00 às 12:00',
    value: 'morning'
  },
  {
    id: '2',
    period: 'Tarde',
    hours: '12:01 às 18:30',
    value: 'afternoon'
  },
  {
    id: '3',
    period: 'Noite',
    hours: '18:31 às 23:00',
    value: 'night'
  }
]

const OPENING_HOURS = {
  morning: {
    first: '06',
    last: '12'
  },
  afternoon: {
    first: '12',
    last: '18'
  },
  night: {
    first: '18',
    last: '23'
  }
}

export function App() {
  const [period, setPeriod] = useState<PeriodsValues | null>(null)
  const [units, setUnits] = useState<Location[]>([])

  function onPeriodChange(value: PeriodsValues) {
    setPeriod(value)
  }

  async function fetchUnits(event: FormEvent) {
    event.preventDefault()

    const response = await axios.get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json') //baseUrl on file: lib/axios.ts
    const data: Location[] = await response.data.locations
    setUnits(data)
    console.log(data)

    // switch (period) {
    //   case 'morning':
    //     const today = transformDate(new Date().getDay())

    //     const morningUnits = data.filter(data => data.schedules[0].hour === "12h às 19h")
    //     setUnits(morningUnits)
    //     break;

    //   case 'afternoon':
    //     break;

    //   case 'night':
    //     break;

    //   default: 'defina um horário'
    //     break;
    // }
  }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="bg-zinc-900 flex items-center justify-center">
        <img
          src={logo}
          className='h-20 w-20'
          alt=""
        />
      </div>

      <FormCardLayout>
        <CardContent className='space-y-4 pb-0'>
          <h2 className='text-2xl text-light-grey'>Qual período quer treinar?</h2>

          <form onSubmit={fetchUnits} className='space-y-5'>
            {periods.map(period => {
              return (
                <RadioGroup key={period.id} className='space-y-2 text-light-grey'>
                  <div className='flex items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                      <RadioGroupItem
                        value={period.value}
                        id={period.value}
                        onClick={() => onPeriodChange(period.value)}
                      />
                      <Label htmlFor={period.value}>
                        {period.period}
                      </Label>
                    </div>

                    <span>
                      {period.hours}
                    </span>
                  </div>
                </RadioGroup>
              )
            })}

            <div className='flex items-center gap-3 flex-1'>
              <Button type='submit' className='bg-yellow text-black uppercase font-bold w-full'>
                Encontrar unidade
              </Button>

              <Button className='bg-transparent border-2 w-full text-black uppercase font-bold'>
                Limpar
              </Button>
            </div>
          </form>
        </CardContent>
      </FormCardLayout>

      {/* {units.map(unit => {
        return (
          <p>{unit.title}</p>
        )
      })} */}
    </main>
  )
}
