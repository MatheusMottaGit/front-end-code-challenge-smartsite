import { useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

interface GymCard {
  id: string,
  title: string,
  content: string,
  opened: boolean,
  schedules: [
    weekdays: string,
    hour: string
  ]
}

const UnitsList = () => {
  const [units, setUnits] = useState<GymCard[]>([])

  // useEffect(() => {
  //   async function getGymUnits() {
  //     const response = await api.get('/data/locations.json')
  //     const data: GymCard[] = response.data.locations

  //     setUnits(data)
  //   }

  //   getGymUnits()
  // }, [])

  return (
    <>
      {/* <div className='grid grid-cols-3 gap-5'>
          {units.map(unit => {
            return (
              <Card key={unit.id} className='p-0 bg-zinc-100'>
                <CardHeader>
                  <CardDescription className={`font-bold ${unit.opened ? 'text-green' : 'text-red'}`}>
                    {unit.opened ? 'Aberto' : 'Fechado'}
                  </CardDescription>
                  <CardTitle>{unit.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>{unit.content}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div> */}
    </>
  )
}

export default UnitsList