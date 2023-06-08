"use server";

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
