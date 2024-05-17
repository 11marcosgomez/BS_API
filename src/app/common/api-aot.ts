export interface ApiAOT {
    info: Info
    results: Result[]
  }
  
  export interface Info {
    count: number
    pages: number
    next_page: string
    prev_page: any
  }
  
  export interface Result {
    id: number
    name: string
    img?: string
    alias: string[]
    species: string[]
    gender: string
    age: any
    height: string
    relatives: Rela[]
    birthplace: string
    residence: string
    status: string
    occupation: string
    groups: Group[]
    roles: string[]
    episodes: string[]
  }
  
  export interface Rela {
    family: string
    members: string[]
  }
  
  export interface Group {
    name: string
    sub_groups: string[]
  }
