import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="instagram"
          className="w-80"
        />
        <p className="font-xs italic">
          This is not a REAL app, it is a clone built for practicing purposes
          only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
                className="rounded-lg bg-blue-500 p-3 text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
