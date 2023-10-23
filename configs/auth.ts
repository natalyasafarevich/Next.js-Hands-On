import {redirect} from 'next/navigation';
import type {AuthOptions}
from 'next-auth';
import {User} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import {users} from '@/users';


export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider(
      {
        clientId: process.env.GOOGLE_CLIENT_ID !,
        clientSecret: process.env.GOOGLE_SECRET !
      }
    ),
    Credentials(
      {
        credentials: {
          email: {
            label: 'email',
            type: "email",
            redirect: true
          },
          password: {
            label: 'password',
            type: "password",
            redirect: true
          }
        },
        async authorize(credentials) {
          if (!credentials ?. email || !credentials.password) {
            return null
          }

          const currentUsers = users.find(user => user.email === credentials.email);

          if (currentUsers && currentUsers.password === credentials.password) {
            const {
              password,
              ...userWithoutPassword
            } = currentUsers;
            return userWithoutPassword as unknown as User;
          }
          return null
        }
      }
    )
  ],
  pages:{
    signIn:'/signin'
  }
}
