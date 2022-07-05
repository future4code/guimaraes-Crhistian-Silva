export type USER = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type PRODUCT_BODY = {
  id: string;
  name: string;
  price: number;
  imageUrl: URL;
  rating: number;
  description: string;
  brand: string;
  category: string;
  stock: number;
};


export type PURCHASE_BODY ={
  userId: string,
  productId: string,
  quantity: number,
}

export type PURCHASE ={
  id: string,
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number
}
/* export type EDITUSER ={
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

export type TASKRESPONSIBLE = {[key: string]: [{ task_id: string, responsible_user_id: string }] } */
