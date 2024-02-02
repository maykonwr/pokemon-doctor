import axios, { AxiosResponse } from "axios"
import { TDate, IRegion } from "../../types/pages"

export async function getServerSideProps() {
    try {
        const regionsResponse: AxiosResponse<{ results: IRegion[] }> = await axios.get('https://pokeapi.co/api/v2/region/')
        const regions: IRegion[] = regionsResponse.data.results
        const datesResponse: AxiosResponse<TDate> = await axios.get('http://localhost:3000/api/scheduling/date')
        const dates: TDate = datesResponse.data

        return {
            props: { regions, dates }
        }
    } catch (error) {
        console.error("Error fetching data:", error)
        return {
            props: {
                error: "An error occurred while fetching data."
            }
        }
    }
}
