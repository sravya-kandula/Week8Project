import React from 'react'

function AddUser() {
  return (
    
    // form creation
    <div>
        <h1 >Add New User</h1>
        <form className='border mt-6 '>
            <input type="text" {...register("name")} />
            <input type="text"  {...register("email")}/>
            <input type="text"  {...register("dob")}/>
            <input type="text"  {...register("number")}/>

    </form>
    </div>
    
  )
}

export default AddUser