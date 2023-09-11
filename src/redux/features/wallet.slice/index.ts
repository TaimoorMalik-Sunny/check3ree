import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { WritableDraft } from "immer/dist/internal";
import { getWalletDetails } from './asyncThunks';
import { GraphQLResult } from '@/types';



interface StateType {
    address?: string | null
    balance?: number | null
    ageInDays?: number | null
    nfts?: any[] | null
    coins?: any[] | null

    fetchingStatus: {
        getWalletDetails: boolean
    }
    error: {
        getWalletDetails: null | string
    }
}

const initialState: StateType = {


    fetchingStatus: {
        getWalletDetails: false
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
            console.log("payload.data.fulfilled ===>", payload.data)
            const { address, ageInDays, balance, coins, nfts } = payload.data;
            state.address = address;
            state.ageInDays = ageInDays;
            state.coins = coins;
            state.nfts = nfts;

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




    }
});


export default slice.reducer;

export const { } = slice.actions;
export { getWalletDetails };