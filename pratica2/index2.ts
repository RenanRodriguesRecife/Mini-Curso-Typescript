//accontInfo
//CharInfo
//PlayerInfo

type AccontInfo = {
    id:number;
    name: string;
    email?: string;
}

const accont: AccontInfo = {
    id: 123,
    name: "Willian"
}

type CharInfo = {
    nickname: string;
    level: number | string
}

const char: CharInfo = {
    nickname: "willjusten",
    level: 100
}

type PlayerInfo = AccontInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "willian",
    nickname: "willjusten",
    level: 100
}