import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { WritableDraft } from "immer/dist/internal";
import { calcCreditScore, calcLaonSuccessProbability, calcPreApproval, calcWalletAttributes, getWalletAttributes } from './asyncThunks';
import { GraphQLResult } from '@/types';


// isWalletConnected
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
    attribute?: any 
    preApprovalNftfi?:number 
    preApprovalBendDao?:number
    probability?:number
    score:number
    


    fetchingStatus: {
        getWalletDetails: boolean
        calcWalletAttributes:boolean
        calcCreditScore:boolean
        calcPreApproval:boolean
        calcLaonSuccessProbability:boolean
        userinfo:boolean
        calUserRep:boolean
    }
    error: {

        getWalletAttributes: null | string
        calcWalletAttributes: null |string
        calcCreditScore:null | string
        calcPreApproval: null | string
        calcLaonSuccessProbability: null|string
    }
}

const initialState: StateType = {

    
//     address:"0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4",
  // address:"0x0fe93C4feBD368204D81758468EE5BFAF623fA5f",
   score:0,
    fetchingStatus: {
        getWalletDetails: false,
        calcWalletAttributes:false,
        userinfo:false,
        calUserRep:false,
        calcPreApproval:false,
        calcLaonSuccessProbability:false,
        calcCreditScore:false
    },
    error: {
        getWalletAttributes: null,
        calcWalletAttributes:null,
        calcPreApproval:null,
        calcLaonSuccessProbability:null,
        calcCreditScore:null
    }

}


const slice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {


        setMyValue: (state, action) => {
            state.address = action.payload;}
    
        // connectWallet(state){
        //     state.address="0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4"
            
        // }

    },
    extraReducers: (builder) => {

        builder.addCase(getWalletAttributes.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            const walletattributes = JSON.parse(payload.attrs)
            
            state.userinfo = true;
            state.attribute = walletattributes
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;

            state.fetchingStatus.getWalletDetails = false;
            state.error.getWalletAttributes = null;
        })
        builder.addCase(getWalletAttributes.pending, (state, { payload }) => {
            state.fetchingStatus.getWalletDetails = true;
        })
        builder.addCase(getWalletAttributes.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.getWalletDetails = false;
        })

        builder.addCase(calcWalletAttributes.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            const walletattributes = JSON.parse(payload.attrs)
            
           
            state.attribute = walletattributes
            state.calUserRep = true;
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcWalletAttributes = false;
            state.error.calcWalletAttributes = null;
        })
        builder.addCase(calcWalletAttributes.pending, (state, { payload }) => {
            state.fetchingStatus.calcWalletAttributes = true;
        })
        builder.addCase(calcWalletAttributes.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcWalletAttributes = false;
        })
    
        
        builder.addCase(calcCreditScore.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.score = payload.score

            console.log(payload.score)
           
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcCreditScore = false;
            state.error.calcCreditScore = null;
        })
        builder.addCase(calcCreditScore.pending, (state, { payload }) => {
            state.fetchingStatus.calcCreditScore = true;
        })
        builder.addCase(calcCreditScore.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcCreditScore = false;
        })

        builder.addCase(calcPreApproval.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.preApprovalNftfi = payload.preApprovalNftfi
            state.preApprovalBendDao = payload.preApprovalBendDao
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcPreApproval = false;
            state.error.calcPreApproval = null;
        })
        builder.addCase(calcPreApproval.pending, (state, { payload }) => {
            state.fetchingStatus.calcPreApproval = true;
        })
        builder.addCase(calcPreApproval.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcPreApproval = false;
        })
        
    
        builder.addCase(calcLaonSuccessProbability.fulfilled, (state, { payload }) => {
            console.log("payload.data.fulfilled ===>", {payload})
            if(!payload)return
            
            // const walletattributes = JSON.parse(payload)
            
           
            // state.attribute = walletattributes
            state.calUserRep = true;

            state.probability = payload.probability
          
             
            
            // const {credit_score} = payload.data
           
            // state.balance = balance;
            // state.ageInDays = ageInDays;
            // state.coins = coins;
            // state.nfts = nfts;
            
            state.fetchingStatus.calcLaonSuccessProbability = false;
            state.error.calcLaonSuccessProbability = null;
        })
        builder.addCase(calcLaonSuccessProbability.pending, (state, { payload }) => {
            state.fetchingStatus.calcLaonSuccessProbability = true;
        })
        builder.addCase(calcLaonSuccessProbability.rejected, (state, { payload, error }) => {
            const err = JSON.parse(error.message || "{}") as GraphQLResult<any>
            console.log("payload.data.rejected ===>", err.errors?.[0]);
            state.fetchingStatus.calcLaonSuccessProbability = false;
        })
        

      

    
    }
});


export default slice.reducer;

export const {setMyValue } = slice.actions;
export { getWalletAttributes };