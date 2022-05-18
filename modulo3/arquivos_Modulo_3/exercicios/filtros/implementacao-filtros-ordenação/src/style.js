import styled from "styled-components";

export const ListContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

export const FiltersContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
`