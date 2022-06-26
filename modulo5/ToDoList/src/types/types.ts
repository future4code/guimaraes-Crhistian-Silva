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
    limitDate: string,
    creatorUserId: string;
}

export type TASK = {
    id: string,
    title: string,
    description: string,
    limit_Date: Date | string
    creator_user_id: string,
/*     creator_user_nickname: string | undefined */
}