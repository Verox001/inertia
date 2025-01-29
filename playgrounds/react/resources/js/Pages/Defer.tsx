import {Deferred, Head, usePage, useForm} from '@inertiajs/react'
import DeferredUsers from '../Components/DeferredUsers'
import Layout from '../Components/Layout'
import {useEffect} from "react";

const Defer = ({
  users,
  foods,
  organizations,
}: {
  users?: {
    id: number
    name: string
    email: string
  }[]
  organizations?: {
    id: number
    name: string
    url: string
  }[]
  foods?: {
    id: number
    name: string
  }[]
}) => {
  const props = usePage()
  console.log(props);

  const { data, post } = useForm({});

  useEffect(() => {
    post('/sleepy/5');
  }, []);

  return (
    <>
      <Head title="Form" />
      <h1 className="text-3xl">Defer</h1>
      <div className="mt-6 rounded border border-yellow-500 bg-yellow-200 p-4">
        <p>Page is loaded!</p>
      </div>

      <div className="mt-6 flex space-x-6">
        <div className="w-1/2 rounded border border-black p-4">
          <Deferred data="users" fallback={<p>Loading Users...</p>}>
            <DeferredUsers />
          </Deferred>
        </div>

        <div className="w-1/2 rounded border border-black p-4">
          {/* <Suspense fallback={<p>Loading Food...</p>}>
            <DeferredFood />
          </Suspense> */}
        </div>

        <div className="w-1/2 rounded border border-black p-4">
          {/* <Suspense fallback={<p>Loading Organizations...</p>}>
            <DeferredOrganizations />
          </Suspense> */}
        </div>
      </div>
    </>
  )
}

Defer.layout = (page) => <Layout children={page} />

export default Defer
