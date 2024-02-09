import React, { useState } from 'react';

import {formatThousands, formatValue} from './../../utils/Utils.js'

function TripsTableItem(props) {

  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const statusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-100 text-emerald-600';
      case 'Refunded':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-slate-100 text-slate-500';
    }
  };

 

  return (
    <tbody className="text-sm">
      {/* Row */}
      <tr>
        
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className='font-medium text-slate-800'>{props?.id}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium ">{props?.date}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium">{props?.ntaname}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className={`text-left `}>{props?.count}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{formatThousands(props?.distance) ?? 0}</div>
        </td>
        
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-red-500">{formatValue(props?.tolls) ?? 0}</div>
        </td>
       
        
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">{formatValue(props?.total) ?? 0}</div>
        </td>
       
      </tr>
    
    </tbody>
  );
}

export default TripsTableItem;
