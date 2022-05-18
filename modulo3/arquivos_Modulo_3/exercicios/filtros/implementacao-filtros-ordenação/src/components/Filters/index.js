import { FiltersContainer } from "../../style";

export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={props.updateQuery}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />

      <span>
         <label for="sort">Ordenação: </label>
         <select
            name="sort"
            value={props.sortingParameter}
            onChange={props.updateSortingParameter}
         >
            <option value="title">Título</option>
            <option value="price">Preço</option>
            <option value="dueDate">Prazo</option>
         </select>
      </span>

      <select
         name="order"
         value={props.order}
         onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>

   </FiltersContainer>

}