// item_id INT AUTO_INCREMENT PRIMARY KEY,
// owner_id INT,
// category VARCHAR(255),
// description TEXT,
// condition VARCHAR(50),
// availability BOOLEAN,
// -- Add more item-related fields as needed
// FOREIGN KEY (owner_id) REFERENCES Users(user_id)

import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// export const item_upload = mutation({
//     args: { owner_id: v.id('users'),  },
//     handler: async (ctx, { owner_id }) => {
//         const item_id = await ctx.db.items.insert({ owner_id });
//         return item_id;
//     }
// })