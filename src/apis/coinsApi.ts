import { BASE_URL } from "../constants/baseUrl";
import { CoinTypes } from "../types/coins";

export async function getCoins(): Promise<CoinTypes[]> {
  const response = await fetch(`${BASE_URL}/coins`);
  const data = await response.json();
  return data;
}
