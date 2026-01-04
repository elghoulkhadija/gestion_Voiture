import {createSlice} from'@reduxjs/toolkit';
const initialeState={
    list: [
       {
    id: 1,
    brand: "Toyota",
    model: "Yaris",
    year: 2021,
    pricePerDay: 40,
    status: "available",
    plateNumber: "12345-A-6"
  },
  {
    id: 2,
    brand: "Dacia",
    model: "Logan",
    year: 2020,
    pricePerDay: 35,
    status: "rented",
    plateNumber: "67890-B-7"
  },
  {
    id: 3,
    brand: "Honda",
    model: "Civic",
    year: 2022,
    pricePerDay: 55,
    status: "available",
    plateNumber: "54321-C-8"
  }
],
    selectedCarId: 1
  }



const carsSlice=createSlice({
    name:'cars',
    initialState:initialeState,
    reducers:{
        selectCard(state,action){
            state.selectedCarId=action.payload;
        },
        rentCard(state,action){
            const car=state.list.find(car=>car.id===action.payload);
            if(car && car.status==='available'){
                car.status='rented';
            };
        },
        returnCar(state,action){
             const car=state.list.find(car=>car.id===action.payload);
            if(car && car.status==='rented'){
                car.status='available';
            };
    }
}
});
export const{selectCard,rentCard,returnCar}=carsSlice.actions;
export default carsSlice.reducer;