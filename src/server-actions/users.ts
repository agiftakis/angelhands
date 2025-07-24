'use server'

import UserModel from "@/models/user-model"
import { currentUser } from "@clerk/nextjs/server"

export const createUser = async ()=> {
    try {
        
    } catch (error:any) {
        return{
            success : false,
            message : error.message,
        }
    }
}