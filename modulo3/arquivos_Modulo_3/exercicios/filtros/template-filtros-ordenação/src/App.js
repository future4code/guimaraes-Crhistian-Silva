import React, { Component } from "react"
import jobList from "./data/jobs.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { ListContainer } from "./style";

export class App extends Component {

   state = {
      jobs: jobList
   }

   render() {
      return <>
         <Header />
         <ListContainer>
            {this.state.jobs.map(job => {
               return <Card key={job.id} job={job} />
            })}
         </ListContainer>
      </>
   }
}