import { Card, CardTitle } from "./ui/card"
import iconHour from '../assets/icon-hour.png'

const FormCardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-9 py-9 flex-1 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-gotham-bold font-bold uppercase text-3xl text-dark-grey w-44'>Reabertura Smart Fit</h1>
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
      </div>

      <Card>
        <CardTitle className='flex items-center gap-2 text-light-grey'>
          <img
            src={iconHour}
            className='w-5 h-5'
            alt=""
          />
          Horário
        </CardTitle>

        {children}
      </Card>
    </div>
  )
}

export default FormCardLayout