import {createSlice} from'@reduxjs/toolkit';
const initialeState={list: [
  {
    id: 101,
    fullName: "Ahmed Ben Ali",
    phone: "0612345678",
    licenseNumber: "MA987654",
    activeRentalCarId: null
  },
  {
    id: 102,
    fullName: "Khadija El Amrani",
    phone: "0623456789",
    licenseNumber: "MA123456",
    activeRentalCarId: null
  },
  {
    id: 103,
    fullName: "Youssef Bensaid",
    phone: "0676543210",
    licenseNumber: "MA555666",
    activeRentalCarId: null
  }
]
}
const clientSlice=createSlice({
    name:'clients',
    initialState:initialeState,
    reducers:{
        selectClient(state,action){
            state.selectedClientId=action.payload;
        },
        assignCarToClient(state,action){
            const {clientId,carId}=action.payload;
            const client=state.list.find(client=>client.id===clientId);
            if(client){
                client.activeRentalCarId=carId;
            }
        },
        removeCarFromClient(state,action){
            const client=state.list.find(client=>client.id===action.payload);
            if(client){
                client.activeRentalCarId=null;
            }
        }
}
});
export const{selectClient,assignCarToClient,removeCarFromClient}=clientSlice.actions;
export default clientSlice.reducer;