import { User } from "@/lib/types"

export function userById(users: User[], id: string) {
  return users.find((u) => u.id === id)!;
}