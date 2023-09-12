import { graphQlApiHandler } from "@/lib/utils";
import { Mutation, MutationCalcWalletAttributesArgs,  } from "@/types/graphql"


export const calcWalletAttributes = async ({ input }: MutationCalcWalletAttributesArgs) => {
    return await graphQlApiHandler<MutationCalcWalletAttributesArgs, { getPlugUsers: Mutation['calcWalletAttributes'] }>({
        query:  /* GraphQL */`
            query MyMutation($input: CalcWalletAttributesInput!) {
                calcWalletAttributes(input: $input) {
                    id
                    attrs
                    createdAt
                }
            }
        
        `,
        variables: { input }
    })
}


