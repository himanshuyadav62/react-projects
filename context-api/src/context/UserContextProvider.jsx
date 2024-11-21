/* eslint-disable react/prop-types */
import React from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)

  const value = React.useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

