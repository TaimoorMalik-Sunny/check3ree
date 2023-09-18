import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GraphQLResult } from '@/types';
import { graphQlApiHandler } from '@/lib/utils';
import { RootStateType } from '@/redux/store';
import * as queries  from '@/graphql/queries';
import * as mutation from '@/graphql/mutations';

export const calcWalletAttributes = createAsyncThunk(
    "mutation/calcWalletAttributes",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcWalletAttributes({ input: { walletAddress } });
        console.log('res_simple', res.data?.calcWalletAttributes.attrs)
        console.log('res_parse', JSON.parse(res.data?.calcWalletAttributes.attrs as any))
        return res.data?.calcWalletAttributes;
    
    }
)
export const getWalletAttributes = createAsyncThunk(
    "queries/getWalletAttributes",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const dispatch = thunkAPI.dispatch
        console.log('===== calculation init =====')
        const res = await queries.getWalletAttributes({ input: { walletAddress } });
        if(res.errors?.[0].message.includes("This wallet has no attributes calculated")){
            dispatch(calcWalletAttributes({ walletAddress}))
            throw res.errors?.[0].message
        
        }
        console.log('res_simple', res.data?.getWalletAttributes.attrs)
        console.log('res_parse', JSON.parse(res.data?.getWalletAttributes.attrs as any))
        return res.data?.getWalletAttributes;
    
    }
)

export const calcCreditScore = createAsyncThunk(
    "mutation/calcCreditScore",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcCreditScore({ input: { walletAddress} });
      return res.data?.calcCreditScore
    
    }
)


export const calcPreApproval = createAsyncThunk(
    "mutation/calcPreApproval",
    async ({ walletAddress }: { walletAddress: string }, thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcPreApproval({ input: { walletAddress} });
      return res.data?.calcPreApproval
    
    }
)

export const calcLaonSuccessProbability = createAsyncThunk(
    "mutation/calcLaonSuccessProbability",
    async ({ walletAddress,appliedInterestRate,loanRequired_eth,repaymentDays }: 
        { walletAddress: string ,appliedInterestRate: number , loanRequired_eth: number , repaymentDays: number}, 
        thunkAPI) => {
        const state = thunkAPI.getState() as RootStateType;
        console.log('===== calculation init =====')
        const res = await mutation.calcLaonSuccessProbability({ input: { walletAddress,appliedInterestRate,loanRequired_eth,repaymentDays} });
      return res.data?.calcLaonSuccessProbability
    
    }
)




//const ethereum = (window as any).ethereum;
// calcLaonSuccessProbability