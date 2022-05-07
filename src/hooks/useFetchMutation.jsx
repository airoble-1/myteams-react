import { useState } from "react"

export default function useFetchMutation(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postData = async (options) => {
    setLoading(true)
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        const errorObj = await response.json()
        setData(null)
        setError(errorObj)
      } else {
        const json = await response.json()
        setError(null)
        setData(json)
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  return [postData, { data, loading, error }]
}
