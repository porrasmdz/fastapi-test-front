import { useState, useEffect, useContext } from "react";
import Trips from "./TripsTableItem";
import { DataContext }from "../../Context"
import {formatThousands} from './../../utils/Utils.js'

function TripsTable({ selectedItems }) {
  const { data, setData } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(true);
  // const [apiData, setData] = useState({});
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);

 
  

  return data?.data == null ? (
    <div className="relative py-36 flex flex-col items-center justify-center">
      
       <div className="mx-auto">
        <svg
          className="animate-spin -ml-1 mr-3 w-36 h-36 mx-auto inline-block text-indigo-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <h2 className="font-medium text-slate-800 text-2xl py-8 px-4"> 
      
       Cargando datos...</h2>
      
    </div>
  ) : (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          Todas las Carreras{" "}
          <span className="text-slate-400 font-medium">
            {data.total_registries ? formatThousands(data.total_registries): 0}
          </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">ID de Carrera</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Fecha de Recogida
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Barrio de Recogida
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Núm. de Pasajeros
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Distancia (km.)</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Peajes o Impuestos
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Ingreso Neto</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {data?.data?.map((trip) => {
              return (
                <Trips
                  key={trip.trip_id}
                  id={trip.trip_id}
                  date={trip.pickup_date}
                  ntaname={trip.pickup_ntaname}
                  distance={trip.trip_distance}
                  count={trip.passenger_count}
                  tolls={trip.tolls_amount}
                  total={trip.total_amount}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TripsTable;
