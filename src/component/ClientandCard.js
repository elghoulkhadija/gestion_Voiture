import { returnCar,rentCard} from "../reducers/carsSlice";
import {assignCarToClient,removeCarFromClient, selectClient  } from "../reducers/clientsSlice";
import { useDispatch,useSelector } from "react-redux";
export default function ClientandCard(){
    const dispatch=useDispatch();
    const cars=useSelector(state=>state.cars.list);
    const clients=useSelector(state=>state.clients.list);
    const selectedClientId = useSelector(state => state.clients.selectedClientId);
    const Louer=(clientId,carId)=>{
        dispatch(rentCard(carId));
        dispatch(assignCarToClient({clientId,carId}));
    }
    const Retourner=(clientId,carId)=>{
        dispatch(returnCar(carId));
        dispatch(removeCarFromClient(clientId));
    }
    return(
  <div className="max-w-5xl mx-auto space-y-8">
    <h2 className="text-3xl font-bold text-gray-800 text-center">
      Gestion de Location des Voitures
    </h2>

    {/* Clients */}
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4"> Clients</h3>
      <div className="space-y-3">
        {clients.map(client => (
        <div key={client.id}
           onClick={() => dispatch(selectClient(client.id))}
            className={`p-4 border rounded-xl cursor-pointer
            ${selectedClientId === client.id ? "bg-blue-100" : "bg-gray-50"}`}
            // className="p-4 border rounded-xl bg-gray-50 flex justify-between items-center" 
            >
            <p className="font-medium text-gray-700">👤 {client.fullName}</p>
             {client.activeRentalCarId && (
                <p className="text-sm text-green-600">
                  Loue la voiture ID: {client.activeRentalCarId}
                </p>
              )}
        </div>
        ))}
      </div>
    </div>
    {/* Cars */}
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Voitures</h3>
      <div className="grid md:grid-cols-2 gap-5 items-center">
        {cars.map(car => (
          <div key={car.id}
            className="border rounded-2xl p-5 bg-gray-50 shadow-sm hover:shadow-md transition">
            <p className="text-lg font-semibold text-gray-800">{car.brand} — {car.model}</p>
            <p className="text-sm text-gray-500 mt-1">
              Statut :
              <span className={`ml-2 font-bold
                  ${car.status === "available" ? "text-green-600" : "text-red-500"}`}>
                  {car.status}
              </span>
            </p>
            <div className="mt-4">
              {car.status === "available" ? (
                <button
                  onClick={() =>Louer(selectedClientId.id, car.id)}
                  className="w-full py-2 rounded-xl  bg-green-500 hover:bg-green-600 text-white ">
                  Louer 🚗
                </button>
                ) : (
                <button
                  onClick={() =>Retourner(selectedClientId.id, car.id)}
                  className="w-full py-2 rounded-xl  bg-red-500 hover:bg-red-600 text-white " >
                  Retourner 🔄
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

);
}
