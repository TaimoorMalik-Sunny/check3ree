import { graphQlApiHandler } from "@/lib/utils";
import { Query, QueryGetWalletAttributesArgs } from "@/types/graphql"


export const getWalletAttributes = async ({ input }: QueryGetWalletAttributesArgs) => {
    return await graphQlApiHandler<QueryGetWalletAttributesArgs, { getWalletAttributes: Query['getWalletAttributes'] }>({
        query:  /* GraphQL */`
            query MyQuery($input: GetWalletAttributesInput!) {
                getWalletAttributes(input: $input) {
                    id
                    attrs
                    createdAt
                }
            }

        `,
        variables: { input }
    })
}