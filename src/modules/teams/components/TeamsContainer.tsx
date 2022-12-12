import { useEffect, useState } from "react";
import { getTeamsTC } from "../asyncActions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../common/hooks/reduxHooks";
import { useDebounce } from "../hooks/debounce";
import { Teams } from "./Teams/Teams";
import { DEBOUNCE_DELAY } from "../constants/teams_const";
import { useNavigate } from "react-router-dom";
import { TeamDto } from "../../../api/teams/ITeams";

export const TeamsContainer = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.teams.data);
  const count = useAppSelector((state) => state.teams.count);

  const [currentItems, setCurrentItems] = useState<Array<TeamDto>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const debounce = useDebounce(searchValue, DEBOUNCE_DELAY);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // @ts-ignore
    dispatch(getTeamsTC(searchValue, currentPage + 1, itemsPerPage, token));
  }, [debounce, itemsPerPage, currentPage]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(count / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const addNewTeamHandler = () => {
    navigate("/teams/add");
  };
  return (
    <>
      <Teams
        currentItems={currentItems}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        addNewTeam={addNewTeamHandler}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  );
};
