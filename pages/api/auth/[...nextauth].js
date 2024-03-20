import nextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    // GithubProvider({
    //   clientId: "73a62fc86545dec5a16c",
    //   clientSecret: "c51ac2423589607e7f4f8cc863a1e85972f4bc58",
    // }),
    GoogleProvider({
        clientId: '940483829717-rop71lo84qkm0lr79jqvre34bkjvc2eg.apps.googleusercontent.com',
        clientSecret: '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',
      }),
      // EmailProvider({
      //   clientId: ,
      //   clientSecret:
      // })
  ],
};
export default nextAuth(authOptions)
