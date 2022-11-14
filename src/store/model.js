import { defineStore } from "pinia"

export const useModel = defineStore('model',{
  state: () => {
    return {
      data: [],
      headers: [
        "UserName",
        "FirstName", 
        "LastName", 
        "MiddleName", 
        "Gender", 
        "Age",
        "Emails",
        "FavoriteFeature", 
        "Features", 
        "AddressInfo",
        "HomeAddress"
         
      ]
    }
  }
})
