//import {collection} from 'firebase/firestore'
import React, { useCallback, useState } from 'react'
import {auth, firestoreDB} from '../../database/firestore'
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [register, setRegister] = useState(true)

  const processData = e => {
    e.preventDefault()
    console.log(e.target.value)
    if(!email.trim()){
      //console.log('Ingrese Email')
      setError('Ingrese Email')
      return
    }
    if(!password.trim()){
      //console.log('Ingrese Password')
      setError('Ingrese Password')
      return
    }
    if(password.length < 6){
      //console.log('Ingrese Password mayor a 6 carácteres')
      setError('Ingrese Password igual o más a 6 carácteres')
      return
    }

    setError(null)
    console.log('Pasando todas las validaciones')

    
      if(register){
      registrar()
    }
  }

  // const user = {
  //   name: user.name,
  //   password: user.password
  // }

  // const handleSubmit = () => {
  //   const db = getFirestore();
  //   const usersCollection = collection(db, 'usuarios');
  //   addDoc(usersCollection, user)
  //   .then(({id}) => console.log(id))
  // }

  const registrar = useCallback(async() => {

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)
      await firestoreDB.collection('usuarios').doc(res.user.email).set({
        email: res.user.email, password,
        uid: res.user.uid
      })
      
    }catch(err) {
      console.log(err)
      if(err.code === 'auth/invalid-email'){
        setError('El email no es valido')
      }
      if(err.code === 'auth/email-already-in-use'){
        setError('Email no disponible')
      }
      
    }

  }, [email, password])

  return (
    <div>
        <h1 className="bg-dark text-center text-light m-2 rounded">
          {
            register ? 'REGISTRO DE USUARIO' : 'INICIO DE SESIÓN'
          }
        </h1>
        <hr />
        <section>
        <div className="form row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-xl-4">
            <form onSubmit={processData}>
              {
                error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )
              }
              <input 
                type="email" 
                className="form-control mb-2"
                placeholder="Ingrese un email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <input 
                type="password" 
                className="form-control mb-2"
                placeholder="Ingrese un password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                {
                  register ? 'Registrarse' : 'Acceder'
                }
              </button>
              <button 
                className="btn btn-info btn-sm btn-block"
                onClick={() => setRegister(!register)}
                type="button"
                >
                  {
                    register ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'
                  }
                
              </button>
            </form>

          </div>
        </div>
        </section>
    </div>
  )
}

export default Login