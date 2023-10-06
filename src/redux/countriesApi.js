import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1"
  }),
  endpoints: (builder) => {
    return {
      getCountries: builder.query({
        query: () => "/all"
      }),
      getCountriesByName: builder.query({
        query: () => "/name/@{name}?fullText=true"
      })
    }    
  }
})

export default countriesApi