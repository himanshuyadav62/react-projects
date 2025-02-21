import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client(); 
    account; 
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount(email, password,name ) {
        try {
            return await this.account.create(ID.unique() ,email, password, name);
        } catch (error) {
            console.error(error);
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error(error);
        }
    }
}


const authService = new AuthService();

export default authService; 
