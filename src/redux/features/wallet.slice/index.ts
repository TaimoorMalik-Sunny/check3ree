import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { WritableDraft } from "immer/dist/internal";
import { calculatWalletScore, getWalletDetails } from './asyncThunks';
import { GraphQLResult } from '@/types';



interface StateType {
    userinfo?:boolean|null
    calUserRep?:boolean|null
    address?: string | null
    balance?: number | null
    ageInDays?: number | null
    nfts?: any[] | null
    coins?: any[] | null
    credit_score?: number| null
    loan_sucess_probability?: string| null |any
    


    fetchingStatus: {
        getWalletDetails: boolean
        userinfo:boolean
        calUserRep:boolean
    }
    error: {
        getWalletDetails: null | string
    }
}

const initialState: StateType = {


    fetchingStatus: {
        getWalletDetails: false,
        userinfo:false,
        calUserRep:false
    },
    error: {
        getWalletDetails: null
    }

}


const slice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getWalletDetails.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            const predictCreditScore={...payload.data}
            
            state.userinfo = true;
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;

            state.fetchingStatus.getWalletDetails = false;
            state.error.getWalletDetails = null;
        })
        builder.addCase(getWalletDetails.pending, (state, { payload }) => {
            state.fetchingStatus.getWalletDetails = true;
        })
        builder.addCase(getWalletDetails.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.getWalletDetails = false;
        })

        builder.addCase(calculatWalletScore.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            const predictCreditScore={...payload.data}
            
            state.calUserRep = true;
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;

            state.fetchingStatus.getWalletDetails = false;
            state.error.getWalletDetails = null;
        })
        builder.addCase(calculatWalletScore.pending, (state, { payload }) => {
            state.fetchingStatus.getWalletDetails = true;
        })
        builder.addCase(calculatWalletScore.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.getWalletDetails = false;
        })
    




    }
});


export default slice.reducer;

export const { } = slice.actions;
export { getWalletDetails };