// ApiService.js
'use client'
import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get("auth_token")




class ApiService {
    constructor() {
        this.client = axios.create({
            baseURL: "https://easy-expense.onrender.com",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
    }

    async login(dto) {
        try {
            const {
                data
            } = await this.client.post('/auth/signin', {
                ...dto

            });
            return data;
        } catch (error) {
            console.log(error.response.status);
            throw error;
            // throw new Error(error.messages);
        }
    }

    async addMember(email) {
        try {
            const {
                data
            } = await this.client.post("/members", {
                email
            });
            return data;
        } catch (error) {

            throw error;
        }
    }
    async removeMember(memberId) {
        try {
            const {
                data
            } = await this.client.delete(`/members/${memberId}`)
            return data

        } catch (error) {
            throw error;


        }
    }
    async getMembers() {
        try {
            const {
                data
            } = await this.client.get('/members')
            return data

        } catch (error) {
            throw error;


        }
    }
}

export default new ApiService();