import { useWeatheStore } from "../stores/weatherStore";
import {getTemperatura} from "../helpers/getWeather"

export const usewWeather = async() =>{
    const temperatura = await getTemperatura()
    const weatheStore = useWeatheStore();

    weatheStore.temperatura=temperatura;
}