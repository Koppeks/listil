'use client';

import { ListilText } from "../../components/ListilText";
import { Register } from "../../components/RegisterStucture";
import { LoginForm } from "../../components/LoginForm";

export default function RegisterPage(){

    return(
        <Register>
        <ListilText>
          <LoginForm/>
        </ListilText> 
      </Register>
    )

}

