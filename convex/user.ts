import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const { name, imageUrl, email } = args;
    // if user already exists, return
    const user = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
    if (user) {
      return user;
    }
    // if user does not exist, create new user
    const newUser = await ctx.db.insert("UserTable", { name, imageUrl, email });
    return newUser;
  },
});
