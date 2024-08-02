

import { configureStore } from "@reduxjs/toolkit";
import redd from "./toDolist";
import dell from "./toDolist"

const Store=configureStore({
    reducer:{
      todolist:redd
    
    }

   
})

export default Store;