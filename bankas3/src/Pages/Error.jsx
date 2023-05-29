import { useContext } from "react"
import { Store } from "../Store"

export default function Error() {

  const { loginResponse } = useContext(Store);

  return (
    <div className="error">
      <h1>Error</h1>
      <h2>{loginResponse.message[0]}</h2>
    </div>

  )
}