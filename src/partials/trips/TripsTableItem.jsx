import React, { useState } from 'react';

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
          <div className='font-medium text-slate-800'>{props.order}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium ">{props.date}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium">{props.customer}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className={`text-left `}>{props.items}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.items}</div>
        </td>
        
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-red-500">{props.total}</div>
        </td>
       
        
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">{props.total}</div>
        </td>
       
      </tr>
    
    </tbody>
  );
}

export default TripsTableItem;
