import { sanityClient } from "sanity:client";

export async function loadQuery<QueryResponse>({ query, params = {} }: { query: string; params?: any }) {
    const { result } = await sanityClient.fetch<QueryResponse>(query, params, {
        filterResponse: false,
    });
    return { data: result };
}