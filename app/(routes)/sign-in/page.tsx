'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  Email: string
  Password: string
  Remember: boolean
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)
  console.log(errors)

  return (
    <div className="pt-32 pb-96 md:pt-56 grid lg:grid-cols-2">
      <div className="lg:flex justify-center items-center mt-12 lg:mt-0 hidden">
        <Image src={'login.svg'} alt="Login" width={600} height={1} />
      </div>
      <div className="max-w-xl p-2">
        <div className="mb-12">
          <h1 className="text-4xl">Entrar no CluedUp</h1>
          <p className="text-xl text-gray-500">Insira seus dados abaixo</p>
        </div>

        <div className="flex justify-between mb-12">
          <span className="border py-2 px-12 rounded-lg cursor-pointer">
            <Image src={'google.svg'} alt="Google" width={40} height={1} />
          </span>
          <span className="border py-2 px-12 rounded-lg cursor-pointer">
            <Image src={'github.svg'} alt="Google" width={40} height={1} />
          </span>
          <span className="border py-2 px-12 rounded-lg cursor-pointer">
            <Image src={'linkedin.svg'} alt="Google" width={45} height={1} />
          </span>
        </div>
        <div>
          <span className="h-px w-full my-6 bg-gray-300 flex justify-center items-center before:content-['OU'] before:px-4 before:bg-white before:text-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="p-4 text-lg border rounded-md"
            {...register('Email', { required: 'E-mail é obrigatório' })}
          />
          {errors.Email && (
            <p className="text-red-600">{errors.Email.message}</p>
          )}

          <input
            type="password"
            placeholder="Senha"
            className="p-4 text-lg border rounded-md"
            {...register('Password', {
              required: 'Senha é obrigatório',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />
          {errors.Password && (
            <p className="text-red-600">{errors.Password.message}</p>
          )}

          <div className="flex py-4 justify-between">
            <div>
              <input
                type="checkbox"
                placeholder="Lembrar de mim"
                className="w-4 h-4"
                id="remember"
                {...register('Remember', {})}
              />
              <label className="ml-2 text-lg" htmlFor="remember">
                Lembrar de mim
              </label>
            </div>
            <div>
              <Link className="text-lg" href={'/'}>
                Esqueceu a Senha?
              </Link>
            </div>
          </div>

          <input
            type="submit"
            className="bg-blue-500 p-4 text-lg text-white rounded-md"
          />
        </form>
        <div className="flex items-center justify-center mt-12 text-lg">
          Não tem uma conta?{' '}
          <Link className="text-blue-500 ml-2 font-bold" href={'/sign-up'}>
            Comece Agora
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
