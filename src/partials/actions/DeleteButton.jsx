
function DeleteButton({
  selectedItems
}) {
  return (
    <div className={`${selectedItems.length < 1 && 'hidden'}`}>
      <div className="flex items-center">
        <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap"><span>{selectedItems.length}</span> registros seleccionados</div>
        <button className="btn bg-white border-slate-200 hover:border-slate-300 text-rose-500 hover:text-rose-600">Eliminar</button>
      </div>
    </div>
  );
}

export default DeleteButton;