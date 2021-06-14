//Reducers (DEPARTMENTS)
const ClaimsDepartment = (oldList = [] , action) => {
    if( action.type === 'CREATE_CLAIM') {
      return [...oldList, action.payload]
    }
    
    return oldList
  }

  const accountingDepartment = ( money = 100 , action) => {
    if (action.type === 'CREATE_CLAIM') {
      return money - action.payload.moneytoCollect;
    } else if(action.type === 'CREATE_POLICY') {
      return money + action.payload.amount
    }
    return money
  }
  

  const polices = (listofPolices = [] , action) => {
    if (action.type === 'CREATE_POLICY') {
      return [...lisofPolices , action.payload.name];
    } else if(action.type === 'DELETE_POLICY') {
      return listofPolices.filter(name=> name !== action.payload.name)
    }
    return listofPolices
  }
  
  