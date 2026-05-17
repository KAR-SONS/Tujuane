import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6a0a0427000605b510f1");

export const account = new Account(client);
export const databases = new Databases(client);