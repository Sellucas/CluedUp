'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

type FormData = {
  'First name': string
  Email: string
  Password: string
  ConfirmPassword: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.Password !== data.ConfirmPassword) {
      alert('A senha e a confirmação de senha não coincidem.')
      return
    }
    console.log(data)
  }

  return (
    <div className="pt-32 pb-96 md:pt-56 grid lg:grid-cols-2">
      <div className="lg:flex justify-center items-center mt-12 lg:mt-0 hidden">
        <Image src={'signup.svg'} alt="Registration" width={600} height={1} />
      </div>
      <div className="max-w-xl p-2">
        <div className="mb-12">
          <h1 className="text-4xl">Criar uma Conta no CluedUp</h1>
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
            type="text"
            placeholder="Primeiro Nome"
            className="p-4 text-lg border rounded-md"
            {...register('First name', {
              required: 'Primeiro Nome é obrigatório'
            })}
          />
          {errors['First name'] && (
            <p className="text-red-600">{errors['First name'].message}</p>
          )}

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
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres'
              }
            })}
          />
          {errors.Password && (
            <p className="text-red-600">{errors.Password.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirmar Senha"
            className="p-4 text-lg border rounded-md"
            {...register('ConfirmPassword', {
              required: 'Confirmação de senha é obrigatória'
            })}
          />
          {errors.ConfirmPassword && (
            <p className="text-red-600">{errors.ConfirmPassword.message}</p>
          )}

          <input
            type="submit"
            className="bg-blue-500 p-4 text-lg text-white rounded-md"
          />
        </form>
        <div className="flex items-center justify-center mt-12 text-lg">
          Já tem uma conta?{' '}
          <Link className="text-blue-500 ml-2 font-bold" href={'/sign-in'}>
            Faça o Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
