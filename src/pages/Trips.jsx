import { useState, useContext } from 'react';
import { DataContext } from '../Context';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import DateSelect from '../components/DateSelect';
import FilterButton from '../components/DropdownFilter';
import PaginationClassic from '../components/PaginationClassic';
import DeleteButton from '../partials/actions/DeleteButton';
import TripsTable from '../partials/trips/TripsTable';

function Trips() {
  
  const { data, setData } = useContext(DataContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Carreras 🚕</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Delete button */}
                {/* <DeleteButton selectedItems={selectedItems} /> */}
                {/* Dropdown */}
                {/* <DateSelect /> */}
                {/* Filter button */}
                {/* <FilterButton align="right" /> */}
                
              </div>

            </div>

            {/* Pagination */}
            { data?.data && <div className="my-4">
              <PaginationClassic />
            </div>}
            {/* Table */}
            <TripsTable selectedItems={handleSelectedItems} className="mb-8"/>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Trips;