import Vue from 'vue'
export default new class RequestService {
 constructor() {
  this.api = 'https://reqres.in/api/'
  this.apiLicalitation = 'http://ip-api.com/json/'
 }
 async getUsers() {
  return (await Vue.axios.get(this.api + "users?page=1")).data.data
 }
 async getLocation(ip) {
  return (await Vue.axios.get(this.apiLicalitation + ip)).data
 }
}