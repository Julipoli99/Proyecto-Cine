<template>
    <div v-if="!usrStore.isLogged" class="container">
        <h1>Registrarse</h1>

        <div class="form-floating">
            <input type="text" class="form-control" id="nombre" placeholder="name@example.com" v-model="this.nombre">
            <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="Apellido" placeholder="name@example.com" v-model="this.apellido">
            <label for="Apellido">Apellido</label>
        </div>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email">
            <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                v-model="this.password">
            <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword2" placeholder="Password"
                v-model="this.password2">
            <label for="floatingPassword2">Confirmar Contraseña</label>
        </div>

        <button type="submit" class="btn btn-success" @click="ingresar">Registrarse</button>
        

    </div>

    <div v-if="usrStore.isLogged" class="container">
        <h1>you are already logged in</h1>
        <button type="submit" class="btn btn-danger" @click="salir">Salir</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { usrStore } from '../../components/store/usrStore'

export default {
    data() {
        return {
            router: useRouter(),
            usrStore: usrStore(),

            nombre: "",
            apellido: "",
            email: "",
            password: "",
            password2: "",

        }
    },
    methods: {

        async Registrarse() {

        },

        salir() {
            // metodo salir de usuario
            this.usrStore.logOut()
        },

        navegar() {
            this.router.push(
                { path: "/login" }
            )
        }
    }

}

</script>

<style scoped>
body {
    background-color: #f2f2f2;
}

.container {
    font-family: "Montserrat", sans-serif;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

}

.container h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

.container input {
    margin-bottom: 15px;
}

.container button {
    width: 100%;
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-bottom: 15px;
    cursor: pointer;
}
</style>