import React from 'react';
import UsersCard from './UsersCard';
import './UsersList.css';

// ...

const listOfUsersPerRow = (users, row, itemsPerRow, match) =>
  users
    .slice((row - 1) * itemsPerRow, row * itemsPerRow)
    .map(user => <UsersCard user={user} key={user.id} match={match} />);

    // ...

const listOfRows = (users, itemsPerRow, match) => {
  const numberOfUsers = users.length;
  const rows = Math.ceil(numberOfUsers / itemsPerRow);

  return Array(rows)
    .fill()
    .map((val, rowIndex) => (
    <div className="columns">
        {listOfUsersPerRow(users, rowIndex + 1, itemsPerRow, match)}
    </div>
  ));
};

const UsersList = ({ users, itemsPerRow = 2, match }) => (
  <div className="cards">
    <h3 className="is-size-3 has-text-centered">Users</h3>
    {listOfRows(users, itemsPerRow, match)}
  </div>
);

export default UsersList;