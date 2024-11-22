import { BASE_URL } from "../constants/baseUrl";
import { HistoryData, InfoData, PriceData } from "../types/coin";

export async function getCoinInfo(coinId: string): Promise<InfoData> {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  const data = await response.json();
  return data;
}

export async function getPriceInfo(coinId: string): Promise<PriceData> {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  const data = await response.json();
  return data;
}

export async function getCoinHistory(coinId: string): Promise<HistoryData[]> {
  const response = await fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`);
  const data = await response.json();
  console.log(data);
  return data;
}
