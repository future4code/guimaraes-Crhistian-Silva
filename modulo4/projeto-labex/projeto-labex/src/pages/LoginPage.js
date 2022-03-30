import React, { useState } from "react";

export default function LoginPage(props) {
 
  return (
    <div>
      <main>
        <form>
          <label>Login</label>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Entrar
          </button>
        </form>
      </main>
      <br/>
        <button >
          Voltar ao Inicio
        </button>
    </div>
  );
}
