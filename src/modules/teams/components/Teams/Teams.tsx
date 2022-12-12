import s from "./Teams.module.scss";
import SuperInputText from "../../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import { TeamsCard } from "../TeamsCard/TeamsCard";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import React, { ChangeEvent } from "react";
import { Empty } from "../Empty/Empty";
import { TeamDto } from "../../../../api/teams/ITeams";

interface TeamsProps {
  currentItems: Array<TeamDto>;
  handlePageClick: (event: { selected: number }) => void;
  pageCount: number;
  itemsPerPage: number;
  setItemsPerPage: (page: number) => void;
  addNewTeam: () => void;
  searchValue: string;
  setSearchValue: (title: string) => void;
}

export const Teams: React.FC<TeamsProps> = ({
  currentItems,
  handlePageClick,
  pageCount,
  itemsPerPage,
  setItemsPerPage,
  addNewTeam,
  searchValue,
  setSearchValue,
}) => {
  // const [searchValue, setSearchValue] = useState('');

  const searchTeamsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const selectValue = { value: itemsPerPage, label: `${itemsPerPage}` };
  const selectOptions = [
    { value: 6, label: "6" },
    { value: 12, label: "12" },
    { value: 24, label: "24" },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <SuperInputText
          placeholder={"search..."}
          className={s.search}
          value={searchValue}
          onChange={searchTeamsHandler}
        />
        <SuperButton onClick={addNewTeam}>Add +</SuperButton>
      </div>
      <div className={s.cards}>
        {currentItems.length ? (
          currentItems.map((item) => (
            <TeamsCard key={item.id + item.name} {...item} />
          ))
        ) : (
          <Empty />
        )}
      </div>
      <div className={s.footer}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={() => {}}
          className={s.paginator}
          activeClassName={s.active_page}
        />
        <Select
          options={selectOptions}
          value={selectValue}
          menuPlacement={"auto"}
          onChange={(e) => setItemsPerPage(e!.value)}
          isDisabled={!currentItems.length}
        />
      </div>
    </div>
  );
};
