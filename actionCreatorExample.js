//Example of action creators

// action creator person dropping off
// function is action creator the return inside is action
const createPolicy = (name,amount) => {
    // return form in our analogy
    return {
      type : 'CREATE_POLICY',
      payload : {
        name : name,
        amount : amount
      }
    }
  }
  
  const deletePolicy = (name)=>{
    return {
      type:'DELETE_POLICY',
      payload: {
        name
      }
    }
  }

  const createClaim = (name, moneytoCollect)=>{
    return {
      type:'CREATE_CLAIM',
      payload: {
        name,moneytoCollect
      }
    }
  }