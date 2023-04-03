import React, {useState, useEffect} from 
"react";
import { useParams,  useHistory } from "react-router-dom";
import '../assets/css/post.css'
import { busca } from '../api/api'  

const Post = () =>{
  let history = useHistory() // Percorrer os ids para identificar um id que nao existe
  const[post,setPost]=useState({}) 
  const {id}=useParams() //Faz o link do {id} quando chamado no path em App
  useEffect(()=>{
    busca(`/posts/${id}`, setPost)
    .catch(()=>{
       history.push('/404')
    }) 
  },[history, id])
  return(
    <main className='container flex flex--centro'>
      <article className='cartao post'>
        <h2 className='cartao__titulo'>{post.title}</h2>
        <p className='cartao__texto'>{post.body}</p>
      </article>
    </main>
  )
}
export default Post