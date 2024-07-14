import { defineSchema, defineTable } from "convex/server";
import { v } from 'convex/values'

export default defineSchema({
  products: defineTable({
    user: v.id('users'),
    productTitle: v.string(),
    productDescription: v.string(),
    productUrl: v.optional(v.string()),
    productStorageId:v.optional(v.id('_storage')),
    imageUrl: v.optional(v.string()),
    imageStorageId:v.optional(v.id('_storage')),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    price: v.number(),
    stock_quantity: v.number(),
  })
    .searchIndex('search_author', { searchField: 'author' })
    .searchIndex('search_title', { searchField: 'productTitle' })
    .searchIndex('search_body', { searchField: 'productDescription' }),
  users: defineTable({
    email:v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    first_name: v.string(),
    last_name: v.string(),
    username:  v.optional(v.string()),
  })
})