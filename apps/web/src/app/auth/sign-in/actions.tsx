'use server'

import ky from 'ky'

const api = ky.create({
  prefixUrl: 'http://localhost:3333',
})

export async function signInWithEmailAndPassword(data: FormData) {
  const { email, password } = Object.fromEntries(data)

  api.post('sessions/password', {
    json: {
      email,
      password,
    },
  })
}
