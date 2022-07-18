import React from 'react'
import {getProviders, signin} from 'next-auth/react'

export async function getServerSideProps(){
      const providers = await getProviders()
      return{
        props: {
          providers
        }
      }
}

const signin = (props) => {
  return (
    <div>
      {Object.values(props.providers).map((provider) =>{
        <div>
          <button style={{backroundColor:'green'}}>Login with {provider.name}</button>
        </div>
      })}
    </div>
  )
}

export default signin