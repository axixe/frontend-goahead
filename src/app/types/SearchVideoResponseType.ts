export interface SearchVideoResponseType {
    kind: string
    etag: string
    nextPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    },
    items: (string | number)[] | []
}