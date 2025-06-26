'use client';
import React, { useState, useEffect } from 'react';

function PageUtilisateurs({ utilisateurs }: { utilisateurs: Array<{ id: number, name: string, email: string, phone: string, website: string }> }) {

  const [userData, setUserData] = useState(utilisateurs);
 
    
      useEffect(() => {
    if (utilisateurs) {
      setUserData(utilisateurs);
    }
  }, [utilisateurs]);

  if (!userData || userData.length === 0) {
    return <p>No users found or still loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PageUtilisateurs;