export type USER_BODY = {
  name: string,
  email: string,
  password: string,
  zipcode: number
};

export type USER = {
  id: string,
  name: string,
  email: string,
  password: string,
  address: string
};

export type PRODUCT_BODY = {
  id: string,
  name: string,
  price: number,
  imageUrl: string,
  rating: number,
  description: string,
  brand: string,
  category: string,
  stock: number
};

export type PURCHASE_BODY ={
  userId: string,
  productId: string,
  quantity: number,
}

export type PURCHASE = {
  id: string,
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number
}

export type DATAUSER = {
  id: string,
  name: string,
  email: string,
  address: string,
  purchases: PURCHASE[]
}

export type PRODUCT = {
  id:string,
  name: string,
  price: number,
  image_url:string,
  rating: number | null,
  description:string | null,
  brand: string | null,
  category: string | null,
  stock: number | null
}

export type PURCHASE_USER = {
  product: string,
  quantity: number,
  TotalPrice: string,
 
}