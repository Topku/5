import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  console.log(selectedSort);
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort((selectedSort) => ({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
        className:
          selectedSort.order === "asc"
            ? "bi bi-caret-down-fill"
            : "bi bi-caret-up-fill",
      }));
    } else {
      onSort({ path: item, order: "asc", className: "bi bi-caret-up-fill" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{
              role: columns[column].path && "button",
              className:
                columns[column].path &&
                columns[column].path === selectedSort.path &&
                selectedSort.className,
            }}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
