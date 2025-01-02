import axios from "axios";
import { API_URL } from "../helpers";

export class MainService {
    register (data) {
        return axios.post(
            `${API_URL}/api/v1/register/`, 
            {
                fio: data.fio,
                form: data.form,
                phone: data.phone
            }
        ).then(this.handleResponse)
    } 
  
    handleResponse (response) {
        return response.data
    }
  }
  
  export const mainService = new MainService()