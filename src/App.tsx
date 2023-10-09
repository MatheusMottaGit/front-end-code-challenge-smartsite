import logo from './assets/logo.svg'

export function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="bg-zinc-900 flex items-center justify-center">
        <img
          src={logo}
          className='h-20 w-20'
          alt=""
        />
      </div>

      <div className='p-12 flex-1 flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <h1 className='font-gotham-bold font-bold uppercase text-3xl text-dark-grey w-44'>Reabertura Smart Fit</h1>
          <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
        </div>

      </div>
    </main>
  )
}