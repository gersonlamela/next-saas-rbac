import { api } from './api-client'

interface SignInWithPasswordRequest {
  email: string
  password: string
}
interface SignInWithPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWithPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .json<SignInWithPasswordResponse>()

  return result
}
