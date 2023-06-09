import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://listil-production.up.railway.app/api/auth/'
    }),
    endpoints:(builder) => ({
        postUsers: builder.mutation({
            query:() => ({
                url: 'local/register',
                method: 'POST',
            })
        }),
        getUsers: builder.query({
            query:() => 'users'
        }),
        getUserById: builder.query({
            query:({id}) => `users/${id}`  
        })
    })
})

export const {useGetUsersQuery, useGetUserByIdQuery,usePostUsersMutation} = userApi