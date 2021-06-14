//import reducers

const { createStore , combineReducers } = Redux;

const allDepartments = combineReducers({
    ClaimsDepartment, accountingDepartment ,polices
})

const store = createStore(allDepartments);

// How to use  or update storeState 
const action = createPolicy('Alex', 20)
// when we call dispatch each reducer ran and updated the state
// so ran accounting as it is the only one with create policy
store.dispatch(action);
// get entire state
store.getState()