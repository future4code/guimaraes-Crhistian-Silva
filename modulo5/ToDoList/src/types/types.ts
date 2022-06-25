export type USER = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type EDITUSER ={
    name: string,
    nickname: string
}

export type TASKBODY = {
    title: string,
    description: string,
    limitDate: Date | string
    creatorUserId: string
}

export type TASK = {
    id: string,
    title: string,
    description: string,
    limit_Date: Date
    creator_user_Id: string
}