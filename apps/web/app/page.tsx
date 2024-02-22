export default async function Page() {

  const response = await fetch(process.env.API_URL!).then(res => res.json())

  return (
    <div>
      <h1>My page (ADD NEW TEXT)</h1>
      <p>API_URL: {process.env.API_URL}</p>
      <p>Message from API: {response.message}</p>
    </div>
  )
}
