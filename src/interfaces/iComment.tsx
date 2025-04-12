export interface iComment {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}
