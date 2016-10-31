import React from 'react';
import { Router, Route,hashHistory, IndexRoute  } from 'react-router'

class Admin extends React.Component {
   render() 
   {
   return (
      <div className="con">
      <h2 className="centerHeading"> Add Expenses </h2>
     <div className="col-sm-6 col-md-6 col-md-offset-3">
      <div className="panel panel-default">
         <form action="/expenses" method="POST">
           <input type="date"  name="date" className="form-control"/>
           <input type="time" name="time" className="form-control"/>
           <input type="text" name="description" placeholder="Description" className="form-control"/>
           <input type="number" name="amount" placeholder="Amount" className="form-control"/>
           <textarea placeholder="Comments" name='comments' className="form-control"></textarea>
           <button type="submit" className="form-control" >Submit</button>
         </form>
       </div>
      </div>
        <div  className="con">        
          <table className = "table table-striped"> 
            <thead>
                  <tr>
                     <th>Date</th>
                     <th>Time</th>
                     <th>Description</th>
                     <th>Amount</th>
                     <th>Comments</th>
                  </tr>
               </thead>
               
               <tbody>
                  <tr>
                     <td>Lorem Ipsum</td>
                     <td>Lorem Ipsum</td>
                     <td>Lorem Ipsum</td>
                     <td>Lorem Ipsum</td>
                     <td>Lorem Ipsum</td>
                  </tr>
                  
               </tbody>
               
            </table>
            </div>
           </div> 
                     


        );
   }  
}

export default Admin;
