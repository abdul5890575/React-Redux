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
  