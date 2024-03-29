import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function PaginationControlled({
  page,
  count,
  limit,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
  count: number;
  limit?: number;
}) {
  const totalPages = Math.ceil(count / (limit ?? 20));
  return (
    <div className="flex flex-row w-full justify-center items-center text-gray-500">
      <ArrowBackIosNewIcon
        className="text-sm  text-center cursor-pointer"
        onClick={() => page >= 2 && setPage(page - 1)}
      />
      <h5 className="text-md  text-center bold mx-3">
        Page {page || 1} / {totalPages}
      </h5>
      <ArrowForwardIosIcon
        className="text-sm  text-center cursor-pointer"
        onClick={() => totalPages > page && setPage(page + 1)}
      />
    </div>
  );
}
