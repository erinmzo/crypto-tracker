import { useQuery } from "react-query";
import { getPriceInfo } from "../apis/coinApi";

export function usePriceData(coinId: string) {
  const {
    data: price,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["price", coinId],
    queryFn: () => getPriceInfo(coinId),
  });
  return { price, isLoading, isError };
}
