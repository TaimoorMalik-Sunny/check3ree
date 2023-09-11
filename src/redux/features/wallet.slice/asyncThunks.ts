import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GraphQLResult } from '@/types';
import { graphQlApiHandler } from '@/lib/utils';
import { RootStateType } from '@/redux/store';
import { getWalletAttributes } from '@/graphql/queries';


type VerifyApiKeyProps = { apiKey?: string }
export const getWalletDetails = createAsyncThunk(
    "query/getWalletDetails",
    async ({ apiKey }: VerifyApiKeyProps | undefined = {}, thunkAPI) => {
        // const state = thunkAPI.getState() as RootStateType;
        // const res = await graphQlApiHandler({
        //     query: '',
        // });
        const dummyData = {
            address: '0x715924a02ee6bc69e51c2bbf7d06bfef3db8d8e4',
            balance: 2.3434,
            ageInDays: 0,
            nfts: [],
            coins: []
        };

        return { data: dummyData };

    }
)