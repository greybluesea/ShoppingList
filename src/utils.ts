"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function getList() {
  return await prisma.item.findMany();
}

export async function toggleComplete(id: string, checked: boolean) {
  await prisma.item.update({ where: { id }, data: { complete: checked } });
}

export async function deleteItem(id: string) {
  await prisma.item.delete({ where: { id } });
}

/* export async function revalid(path: string) {
  await revalidatePath(path);
}
 */
