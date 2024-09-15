const fetchWithTimeout=(url:string, timeout:number)=>{
    let controller = new AbortController();
    let signal = controller.signal;
    
    let timeoutid=setTimeout(()=>{
    controller.abort();
    }, timeout)

   return fetch(url, { signal }).then((res)=>{clearTimeout(timeoutid); return res.json()}).catch((err)=>{return err});
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeoutMs = 5000;  

fetchWithTimeout(url, timeoutMs).then((res)=>console.log(res)).catch((err)=>console.log(err));