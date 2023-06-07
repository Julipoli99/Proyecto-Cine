import axios from "axios";
import { defineStore } from "pinia";

export const reservasStore = defineStore('reservasStore', {
    state: () => ({
        reservasDeUsuario: null,

    }),
    actions: {
        async buscarReservas(idUsuario){
            const url = `https://646423da127ad0b8f8985dff.mockapi.io/api/v1/users/${idUsuario}/reservas`
            try{
                const response = await axios.get(url);
                console.log('Reserva guardada:', response.data);
                this.reservasDeUsuario = response.data
            } catch(error) {
                console.log('Error al consultar la reserva:');
            }
        }

    },
    getters: {

    },

})

