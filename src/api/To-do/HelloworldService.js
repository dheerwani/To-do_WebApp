import axios from "axios"

class HelloworldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8764/hello-world')
        // console.log('execute service')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8764/hello-world-bean')
        // console.log('execute service')
    }

    executeHelloWorldPathBeanService(name){
        return axios.get(`http://localhost:8764/hello-world/path-var/${name}`)
        // console.log('execute service')
    }
}

export default new HelloworldService()