'use client'

export default function ErrorWrapper ({error}:{error:Error}){
  return <h1>opps {error.message}</h1>
}