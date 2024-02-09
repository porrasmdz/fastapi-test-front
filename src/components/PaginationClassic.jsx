import { useContext, useEffect } from "react";
import { DataContext } from "../Context";

function PaginationClassic() {
  const { data, setData } = useContext(DataContext);

  async function fetchData(api_url) {
    try {
      const response = await fetch(`${api_url}`);
      if (response.ok) {
        const api_data = await response.json();

        setData({ ...api_data, url: api_url });
      } else {
        setData({ error: "Error al obtener datos" });
        // setError("Hubo un error al obtener datos");
      }
    } catch (error) {
      setData({ error: "No se pudo hacer la solicitud para obtener datos" });
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <button
              className={
                "btn bg-white border-slate-200 " +
                (parseInt(data.page) > 1
                  ? "hover:border-slate-300 text-indigo-500 cursor-pointer "
                  : "text-slate-300 cursor-not-allowed")
              }
              disabled={data.page <= 1}
              onClick={() => {
                let api_url = new URL(import.meta.env.VITE_API_URL);

                const queryParams = api_url.searchParams;

                const page = data.page;
                if (page > 1) {
                  queryParams.append("page", `${parseInt(page) - 1}`);
                  queryParams.append("limit", `${parseInt(data.limit)}`);

                  fetchData(api_url.toString());
                  setData({ ...data, url: api_url.toString() });
                }
              }}
            >
              &lt;- Previo
            </button>
          </li>
          <li className="ml-3 first:ml-0">
            <button
              className={
                "btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 cursor-pointer" +
                (parseInt(data.page) < parseInt(data.total_pages)
                  ? " hover:border-slate-300 text-indigo-500 cursor-pointer"
                  : " text-slate-300 cursor-not-allowed")
              }
              disabled={data.page >= data.total_pages}
              onClick={() => {
                let api_url = new URL(import.meta.env.VITE_API_URL) ?? null;

                const queryParams = api_url.searchParams;

                const page = data.page;
                if (page < data.total_pages) {
                  queryParams.append("page", `${parseInt(page) + 1}`);
                  queryParams.append("limit", `${parseInt(data.limit)}`);

                  fetchData(api_url.toString());
                  setData({ ...data, url: api_url.toString() });
                }
              }}
            >
              Siguiente -&gt;
            </button>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-slate-500 text-center sm:text-left">
        Mostrando
        <input 
          className="input text-slate-600 w-12  px-2 mx-1 border rounded-md"
          value={data?.limit}
          onChange={(e) => {
            try {
              let limit
              if(e.target.value == null || e.target.value == '' || e.target.value == undefined)
              {
                limit = 0
              }
              else {
                limit = parseInt(e.target.value)
              }
              setData({...data, "limit": limit})
            }
            catch(e) {
              setData({...data,"limit": 15})
            }
          }}
        />
        resultados por página | Página{" "}
        <span className="font-medium text-slate-600">{data?.page}</span> de{" "}
        <span className="font-medium text-slate-600">{data?.total_pages}</span>.
      </div>
    </div>
  );
}

export default PaginationClassic;
