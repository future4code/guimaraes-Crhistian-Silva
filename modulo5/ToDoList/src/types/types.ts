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
}

export type USERS = {[key: string]: [{ id: number, nickname: string }] }

export type TASKS = {[key:string]:[{ taskId:string,title: string, description:string, limitDate:Date, creatorUserId:string, status:string, creatorUserNickname:string  }]}
