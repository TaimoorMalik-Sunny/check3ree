import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GraphQLResult } from '@/types';
import { graphQlApiHandler } from '@/lib/utils';
import { RootStateType } from '@/redux/store';
import { getWalletAttributes } from '@/graphql/queries';
 type PredictCreditScore = {
    loan_sucess_probability:string 
    credit_score: number
    pre_approval_nftfi:number
    pre_approval_benddao:number
    success:boolean
    message:string
    rowId:string
    

 }

type VerifyApiKeyProps = { apiKey?: string }
export const getWalletDetails = createAsyncThunk(
    "query/getWalletDetails",
    async ({ apiKey }: VerifyApiKeyProps | undefined = {}, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        const res = await graphQlApiHandler<{predictCreditScore:PredictCreditScore }>({
            query: `query MyQuery {
                predictCreditScore(input: {walletAddress: "0x0878ea49B8bd5296366799F6a4D385729E3c05Ae"})
              }`,

             
        });
        // const dummyData = {
        //     address: '0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4',
        //     balance: 2.3434,
        //     ageInDays: 200,
        //     nfts: [],
        //     coins: []
        // };
        
        console.log()
        return { data: res.data };

    }
)

export const calculatWalletScore = createAsyncThunk(
    "query/calculatWalletScore",
    async ({ apiKey }: VerifyApiKeyProps | undefined = {}, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        const res = await graphQlApiHandler<{predictCreditScore:PredictCreditScore }>({
            query: `query MyQuery {
                predictCreditScore(input: {walletAddress: "0x0878ea49B8bd5296366799F6a4D385729E3c05Ae"})
              }`,

             
        });
        // const dummyData = {
        //     address: '0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4',
        //     balance: 2.3434,
        //     ageInDays: 200,
        //     nfts: [],
        //     coins: []
        // };
        
        console.log()
        return { data: res.data };

    }
)