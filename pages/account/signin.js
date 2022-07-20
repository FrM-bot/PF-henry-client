// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginWithGoogle } from 'firebase_/client'
import { SIGN_IN } from 'services/SIGN_IN'

const Regiter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    SIGN_IN(data).then(console.log)
  }
  const login = () => {
    LoginWithGoogle().then(console.log).catch(console.error)
  }
  return (
    <div>
      <div>
        <button onClick={login}>Login with Google</button>
      </div>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input defaultValue="" placeholder='email' {...register('email', { required: true, minLength: 8 })} />
            { errors.email && <span>This field is required</span> }
          </div>

          <div>
            <input defaultValue="" placeholder='password' {...register('password', { required: true, minLength: 8 })} />
            { errors.password && <span>This field is required</span> }
          </div>
        <div>
          <input defaultValue="" placeholder='password' {...register('passwordVerify', { required: true, minLength: 8 })} />
          { errors.passwordVerify && <span>This field is required</span> }
        </div>

        <div>
          <input defaultValue="" placeholder='username' {...register('name', { required: true, minLength: 6 })} />
          { errors.name && <span>This field is required</span> }
        </div>

        <div>
          <input defaultValue="" placeholder='your name' {...register('name', { required: true, minLength: 3 })} />
          { errors.name && <span>This field is required</span> }
        </div>

        <div>
          <input defaultValue="" placeholder='your lastname' {...register('lastname', { required: true, minLength: 1 })} />
          { errors.lastname && <span>This field is required</span> }
        </div>

          <input type="file" {...register('photoDNIFront', { required: true })} />
         { errors.photoDNIFront && <span>This field is required</span> }

          <input type="file" {...register('photoDNIReverse', { required: true })} />
         { errors.photoDNIReverse && <span>This field is required</span> }

          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Regiter
