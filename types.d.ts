type Headers = {
    "Authorization": string,
    "DB-Name"?: string,
    "Prefer"? : "resolution=merge-duplicates"
}

export { Headers };