import logo from './assets/logo.svg'
import { Card, CardContent, CardTitle } from './components/ui/card'
import { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Button } from './components/ui/button'
import FormCardLayout from './components/form-card-layout'

type Period = {
  id: string
  period: string
  hours: string
  value: PeriodsValues
}

type PeriodsValues = "morning" | "afternoon" | "night"

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

export function App() {
  const [period, setPeriod] = useState<PeriodsValues | null>(null)

  function onPeriodChange(value: PeriodsValues) {
    setPeriod(value)
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

          <form className='space-y-5'>
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
              <Button className='bg-yellow text-black uppercase font-bold w-full'>
                Encontrar unidade
              </Button>

              <Button className='bg-transparent border-2 w-full text-black uppercase font-bold'>
                Limpar
              </Button>
            </div>
          </form>
        </CardContent>
      </FormCardLayout>
    </main>
  )
}
